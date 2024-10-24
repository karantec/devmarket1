// src/components/product/ProductSort.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

const sortOptions = [
  { label: 'Most Popular', value: 'popular' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Rating', value: 'rating' }
];

const ProductSort = ({ currentSort, onSortChange }) => {
  return (
    <div className="relative">
      <select
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value)}
        className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
    </div>
  );
};

export default ProductSort;