// src/components/home/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find the Perfect Digital Solution
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Premium web solutions, templates, and components built by developers for developers
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for digital products..."
              className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              <Search className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/products" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Browse Products
            </Link>
            <Link to="/sell" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Start Selling
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;