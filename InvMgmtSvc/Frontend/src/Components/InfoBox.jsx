import React from 'react';
import { useEffect } from 'react';

const UNKNOWN_VALUE = 'Unknown';

const InfoBox = ({ data }) => {

    console.log('InfoBox data before:', data);

  let name, water, sunlight, lifespan, height, fruit_nut, soil_ph, temperature, fertilizer, pest, comp_plants;
  ({ name, water, sunlight, lifespan, height, fruit_nut, soil_ph, temperature, fertilizer, pest, comp_plants } = data);

  console.log('InfoBox data after:', data);
  console.log('Data Name:', name);

  useEffect(() => {
  //   // Force re-render when data prop changes
  }, [data]);

  return (
    <div className="bg-black/50 rounded-md p-4 opacity-50 ml-9 mr-9 font-bold text-green-950">
      <ul>
        <li key="name">Plant Name: {name}</li>
        <li key="water">Water Requirement: {data?.water ?? UNKNOWN_VALUE}</li>
        <li key="sunlight">Lighiting Conditions: {data?.sunlight ?? UNKNOWN_VALUE}</li>
        <li key="lifespan">Life Span: {data?.lifespan ?? UNKNOWN_VALUE}</li>
        <li key="height">Plant Height: {data?.height ?? UNKNOWN_VALUE}</li>
        <li key="fruit_nut">Fruit Nut: {data?.fruit_nut ?? UNKNOWN_VALUE}</li>
        <li key="soil_ph">Soil pH: {data?.soil_ph ?? UNKNOWN_VALUE}</li>
        <li key="temperature">Temperature: {data?.temperature ?? UNKNOWN_VALUE}</li>
        <li key="fertilizer">Soil Fertilizer: {data?.fertilizer ?? UNKNOWN_VALUE}</li>
        <li key="pest">Pest Danger: {data?.pest ?? UNKNOWN_VALUE}</li>
        <li key="comp_plants">Comp Plants: {data?.comp_plants ?? UNKNOWN_VALUE}</li>
      </ul>
    </div>
  );
};

export default InfoBox;