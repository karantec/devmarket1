// pages/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context and hooks/usecart';

const Checkout = () => {
  const { cart, total } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Process payment and create order
      navigate('/order-success');
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Checkout Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Checkout</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields */}
          </form>
        </div>
        
        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            {/* Order details */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;