import React, { useState } from 'react';

const sampleCartItems = [
  {
    id: 1,
    name: "Modern E-commerce Template",
    price: 49,
    image: "/api/placeholder/400/300",
    quantity: 1,
  },
  {
    id: 2,
    name: "Dashboard UI Kit",
    price: 79,
    image: "/api/placeholder/400/300",
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(sampleCartItems);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-600 text-xl">Your cart is empty</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-gray-200 py-6"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full md:w-40 h-auto rounded-lg shadow-md object-cover"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.name}</h2>
                <p className="text-lg text-gray-600 mb-4">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-4">
                  <label htmlFor={`quantity-${item.id}`} className="text-gray-700 font-medium">
                    Quantity:
                  </label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="w-20 py-2 px-4 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex md:flex-col items-center gap-4 md:gap-6">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Cart Summary Section */}
          <div className="mt-12">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-gray-800">Total:</h3>
              <p className="text-3xl font-bold text-gray-900">${calculateTotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-end mt-8 gap-4">
              <button className="bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                Continue Shopping
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900 transition duration-300 transform hover:scale-105">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
