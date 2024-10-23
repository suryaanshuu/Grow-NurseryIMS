import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InfoBox from './InfoBox';
import MarketingBox from './MarketingBox';

const PlantInfo = ({ cartItems, setCartItems }) => {
    const { plantName } = useParams();
    const [data, setData] = useState(null); // Initialize data as null

    // Function to add plant to cart
    const addToCart = () => {
        if (!data) {
            console.error("No data available to add to cart.");
            return; // Exit if data is not available
        }

        console.log("Adding to cart:", data.name);

        if (!Array.isArray(cartItems)) {
            console.error("cartItems is not an array:", cartItems);
            return; // Exit the function if cartItems is not an array
        }

        const newCartItem = {
            id: (cartItems.length || 0) + 1,
            name: data.name, // Use the name from fetched data
            price: data.price || 0, // Use the price from fetched data or default to 0
            quantity: 1,
        };

        setCartItems([...cartItems, newCartItem]); // Update cartItems state
        console.log("Updated cart items:", [...cartItems, newCartItem]);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data for plant:", plantName);
                const response = await fetch(`/api/plant?name=${plantName}`);
                const data = await response.json();
                console.log("Received Data:", data);
                setData(data); // Set data once fetched
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [plantName]);

    console.log("Data in PlantInfo Component:", data);

    return (
        <div>
            <MarketingBox />
            <InfoBox 
                key={JSON.stringify(data)} 
                data={data} 
                onAddToCart={addToCart} // Pass addToCart as a prop
            />
        </div>
    );
};

export default PlantInfo;