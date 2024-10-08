import React from 'react';
import { useEffect } from 'react';

const UNKNOWN_VALUE = 'Unknown';

const InfoBox = ({ data }) => {

    console.log('InfoBox data before:', data);

  const { name, water, sunlight, lifespan, height, fruit_nut, soil_ph, temperature, fertilizer, pest, comp_plants } = data;

  console.log('InfoBox data:', data);
  console.log('Data Name:', name);

  useEffect(() => {
        console.log("Data updated:", data);
  }, [data]);

  if (!data) return null; // Add this line to check if data is null or undefined
  console.log("Type dec", typeof data)
  
  let jsonData
  if (typeof data === 'string') {
    jsonData = JSON.parse(data); // Parse the data string into a JSON object
  }
  else {
    jsonData = data;
  }
  console.log("Type dec 2",typeof data)


  return (
    <div className="bg-black/50 rounded-md p-4 opacity-50 ml-9 mr-9 font-bold text-green-950">
      {/* <ul>
        <li key="name">Plant Name: {name}</li>
        <li key="water">Water Requirement: {data.water ?? UNKNOWN_VALUE}</li>
        <li key="sunlight">Lighiting Conditions: {data?.sunlight ?? UNKNOWN_VALUE}</li>
        <li key="lifespan">Life Span: {data?.lifespan ?? UNKNOWN_VALUE}</li>
        <li key="height">Plant Height: {data?.height ?? UNKNOWN_VALUE}</li>
        <li key="fruit_nut">Fruit Nut: {data?.fruit_nut ?? UNKNOWN_VALUE}</li>
        <li key="soil_ph">Soil pH: {data?.soil_ph ?? UNKNOWN_VALUE}</li>
        <li key="temperature">Temperature: {data?.temperature ?? UNKNOWN_VALUE}</li>
        <li key="fertilizer">Soil Fertilizer: {data?.fertilizer ?? UNKNOWN_VALUE}</li>
        <li key="pest">Pest Danger: {data?.pest ?? UNKNOWN_VALUE}</li>
        <li key="comp_plants">Comp Plants: {data?.comp_plants ?? UNKNOWN_VALUE}</li>
      </ul> */}

      <ul>
    {Object.keys(jsonData).map(key => (
    <li key={key}>
      <span className="font-bold">{key}:</span> {jsonData[key]}
    </li>
  ))}
      </ul>
    </div>
  );
};

export default InfoBox;