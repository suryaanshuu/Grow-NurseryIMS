import { query } from './db';

export async function getPlantData(name: string): Promise<any> {
  // const { name } = req.query as { name: string }; // Get plant name from query parameter
  
  try {
    const plantData = await gpd(name); // Call your function to fetch plant data
    return plantData;
  } 
  catch (error) {
    console.error('Error fetching or processing data:', error);
}
}

  
async function gpd(name: string): Promise<any> {
  try {
      const result = await query(`
        SELECT json_agg(row_to_json(t))
        FROM (
          SELECT name, water, sunlight, lifespan, fruit_nut, fertilizer, pest, comp_plants
          FROM plant
          WHERE plant.name = $1
        ) t
      `, [name]);
  
      if (result.rows.length === 0) {
        return null; // Plant not found
      }
  
      return result.rows[0].json_agg; // Type assertion for clarity
    } catch (error) {
      console.error('Error fetching plant data:', error);
      throw error; // Re-throw the error for proper handling in the API route
    }
}