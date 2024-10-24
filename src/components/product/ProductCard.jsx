// src/components/product/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Download } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </Link>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Link 
            to={`/product/${product.id}`}
            className="text-lg font-semibold hover:text-blue-600 transition-colors"
          >
            {product.name}
          </Link>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
            ${product.price}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-gray-500 ml-1">({product.reviews})</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <Download className="h-4 w-4 mr-1" />
            <span>{product.downloads}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t flex items-center">
          <img 
            src={product.author.avatar} 
            alt={product.author.name}
            className="h-6 w-6 rounded-full"
          />
          <span className="text-sm text-gray-600 ml-2">{product.author.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;