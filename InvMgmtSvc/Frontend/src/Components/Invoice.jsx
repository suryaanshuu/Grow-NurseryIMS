// import React, { useState } from 'react';

// const InvoiceState = () => {
//     const [cartItems, setCartItems] = useState([
//         { id: 1, name: 'Item 1', price: 10, quantity: 2 },
//         { id: 2, name: 'Item 2', price: 15, quantity: 1 },
//     ]);

//     const increaseQuantity = (id) => {
//         setCartItems(cartItems.map(item =>
//             item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         ));
//     };

//     const decreaseQuantity = (id) => {
//         setCartItems(cartItems.map(item =>
//             item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
//         ));
//     };

//     const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//     return (
//         <div className="p-4 bg-white shadow-md rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Invoice</h2>
//             <table className="w-full">
//                 <thead>
//                     <tr className="bg-gray-100 text-left">
//                         <th className="py-2 px-4">Item</th>
//                         <th className="py-2 px-4">Price</th>
//                         <th className="py-2 px-4">Quantity</th>
//                         <th className="py-2 px-4">Total</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {cartItems.map((item) => (
//                         <tr key={item.id} className="border-b">
//                             <td className="py-2 px-4">{item.name}</td>
//                             <td className="py-2 px-4">${item.price}</td>
//                             <td className="py-2 px-4 flex justify-center items-center">
//                                 <button
//                                     className="bg-red-500 text-white px-2 py-1 rounded mr-2"
//                                     onClick={() => decreaseQuantity(item.id)}
//                                 >
//                                     -
//                                 </button>
//                                 <span className="mx-2">{item.quantity}</span>
//                                 <button
//                                     className="bg-green-500 text-white px-2 py-1 rounded"
//                                     onClick={() => increaseQuantity(item.id)}
//                                 >
//                                     +
//                                 </button>
//                             </td>
//                             <td className="py-2 px-4">${(item.price * item.quantity).toFixed(2)}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//                 <tfoot>
//                     <tr className="bg-gray-100 text-left">
//                         <td colSpan="3" className="py-2 px-4">Gross Total:</td>
//                         <td className="py-2 px-4">${total.toFixed(2)}</td>
//                     </tr>
//                 </tfoot>
//             </table>
//         </div>
//     );
// };

// const Invoice = () => {
//     return (
//         <div className="max-w-lg mx-auto my-8">
//             <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
//             <InvoiceState />  {/* Only the Invoice component is used */}
//         </div>
//     );
// };

// export default Invoice;

import React, { useState } from 'react';
import jsPDF from 'jspdf';

const InvoiceState = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Item 1', price: 10, quantity: 2 },
        { id: 2, name: 'Item 2', price: 15, quantity: 1 },
    ]);
    const [newItem, setNewItem] = useState({ name: '', price: '', quantity: 1 });

    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item => 
            item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const deleteItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const addItem = (e) => {
        e.preventDefault();
        const { name, price, quantity } = newItem;
        if (name && price > 0 && quantity > 0) {
            const newCartItem = {
                id: cartItems.length + 1, // Simple ID generation
                name,
                price: parseFloat(price),
                quantity: parseInt(quantity),
            };
            setCartItems([...cartItems, newCartItem]);
            setNewItem({ name: '', price: '', quantity: 1 }); // Reset form
        }
    };

    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleGenerateInvoice = () => {
        const doc = new jsPDF();

        // Add logo image (replace 'data:image/png;base64,...' with your actual Base64 string)
        const logo = 'data:image/png;base64,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'; // Your Base64 logo string here
        const logoWidth = 50; // Set the desired width for the logo
        const logoHeight = 50; // Set the desired height for the logo

        // Set up header
        doc.setFontSize(22);
        doc.text('Grow Nursery Pvt. Ltd.', 14, 20);
        doc.setFontSize(12);
        doc.text('Nitte, Near NMAMIT Campus', 14, 30);
        doc.text('Udupi, Karnataka, 574110', 14, 35);
        doc.text('Phone: (123) 456-7890', 14, 40);
        doc.text('Email: info@grownursery.com', 14, 45);
        doc.line(10, 50, 200, 50); // Horizontal line

        // Add the logo to the top right
        doc.addImage(logo, 'PNG', 150, 10, logoWidth, logoHeight); // Adjust position and size as needed

        // Add Invoice Title
        doc.setFontSize(18);
        doc.text('Invoice', 14, 60);
        doc.setFontSize(12);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 60);
        
        // Add Table Headers
        doc.text('Item', 14, 70);
        doc.text('Price', 80, 70);
        doc.text('Quantity', 110, 70);
        doc.text('Total', 140, 70);
        
        // Draw a line under the headers
        doc.line(10, 75, 200, 75);

        let y = 80; // Starting Y position for items

        // Add each item in the cart to the PDF
        cartItems.forEach(item => {
            doc.text(item.name, 14, y);
            doc.text(`$${item.price.toFixed(2)}`, 80, y);
            doc.text(`${item.quantity}`, 110, y);
            doc.text(`$${(item.price * item.quantity).toFixed(2)}`, 140, y);
            y += 10; // Move down for the next item
        });

        // Add total
        doc.setFontSize(12);
        doc.text('Gross Total:', 110, y);
        doc.text(`$${total.toFixed(2)}`, 140, y);

        // Draw a line at the bottom
        doc.line(10, y + 5, 200, y + 5);

        // Save the PDF
        doc.save('invoice.pdf');
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Invoice</h2>
            <form onSubmit={addItem} className="mb-4">
                <input
                    type="text"
                    placeholder="Item Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value
                                            })}
                    className="border p-2 mr-2"
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                    className="border p-2 mr-2"
                    min="0.01"
                    step="0.01"
                    required
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                    className="border p-2 mr-2"
                    min="1"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add Item
                </button>
            </form>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="py-2 px-4">Item</th>
                        <th className="py-2 px-4">Price</th>
                        <th className="py-2 px-4">Quantity</th>
                        <th className="py-2 px-4">Total</th>
                        <th className="py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id} className="border-b">
                            <td className="py-2 px-4">{item.name}</td>
                            <td className="py-2 px-4">${item.price.toFixed(2)}</td>
                            <td className="py-2 px-4 flex justify-center items-center">
                                <button 
                                    className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                                    onClick={() => decreaseQuantity(item.id)}
                                >
                                    -
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button 
                                    className="bg-green-500 text-white px-2 py-1 rounded"
                                    onClick={() => increaseQuantity(item.id)}
                                >
                                    +
                                </button>
                            </td>
                            <td className="py-2 px-4">${(item.price * item.quantity).toFixed(2)}</td>
                            <td className="py-2 px-4">
                                <button 
                                    className="bg-red-600 text-white px-2 py-1 rounded"
                                    onClick={() => deleteItem(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="bg-gray-100 text-left">
                        <td colSpan="3" className="py-2 px-4">Gross Total:</td>
                        <td className="py-2 px-4">${total.toFixed(2)}</td>
                        <td className="py-2 px-4">
                            <button 
                                className="bg-blue-600 text-white px-4 py-2 rounded"
                                onClick={handleGenerateInvoice}
                            >
                                Generate Invoice
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

const Invoice = () => {
    return (
        <div className="max-w-lg mx-auto my-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
            <InvoiceState />  {/* Only the Invoice component is used */}
        </div>
    );
};

export default Invoice;