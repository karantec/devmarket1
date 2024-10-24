// pages/OrderSuccess.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Order Successfully Placed!
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Thank you for your purchase. We'll send you an email with order details.
        </p>
        <Link 
          to="/"
          className="mt-8 inline-block px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;