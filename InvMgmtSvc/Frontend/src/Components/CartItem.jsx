import React, { useState } from 'react';
import PlantInfo from './PlantInfo';
import Invoice from './Invoice';

const CartItem = () => {
    const [cartItems, setCartItems] = useState([]); // Initialize cartItems as an empty array

    return (
        <div>
            <PlantInfo cartItems={cartItems} setCartItems={setCartItems} />
            <Invoice cartItems={cartItems} />
        </div>
    );
};

export default CartItem;