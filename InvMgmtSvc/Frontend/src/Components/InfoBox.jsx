import React from 'react';
import { useEffect } from 'react';

const UNKNOWN_VALUE = 'Unknown';

const InfoBox = ({ data, onAddToCart }) => {
    console.log('InfoBox data before:', data);

    let jsonData;
    if (typeof data === 'string') {
        jsonData = JSON.parse(data); // Parse the data string into a JSON object
    } else {
        jsonData = data;
    }

    const keyMapping = {
        name: 'Plant Name',
        water: 'Water Requirement',
        sunlight: 'Lighting Conditions',
        lifespan: 'Life Span (years)',
        height: 'Height (m)',
        fruit_nut: 'Produces Fruit/Nuts?',
        soil_ph: 'Soil pH',
        temperature: 'Optimal Temperature (°C)',
        fertilizer: 'Recommended Fertilizer',
        pest: 'Common Pests',
        comp_plants: 'Companion Plants',
    };

    useEffect(() => {
        console.log("Data updated:", data);
    }, [data]);

    if (!data) return null; // Check if data is null or undefined

    const handleAddToCart = () => {
        if (jsonData.name) {
            onAddToCart(jsonData.name); // Call the function to add the plant name to the cart
        }
    };

    return (
        <div className="bg-black/50 rounded-md p-4 opacity-50 ml-9 mr-9 font-bold text-green-950">
            <ul>
                {Object.keys(jsonData).map(key => (
                    <li key={key}>
                        <span className="font-bold">{keyMapping[key] || key}:</span> {jsonData[key] ?? UNKNOWN_VALUE}
                    </li>
                ))}
            </ul>
            <button onClick={handleAddToCart} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Add to Invoice
            </button>
        </div>
    );
};

export default InfoBox;

