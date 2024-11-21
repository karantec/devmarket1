// src/components/product/ProductFilters.jsx
import React from 'react';
import { Check } from 'lucide-react';

const ProductFilters = ({ filters, setFilters }) => {
  const categories = [
    "Landing Pages",
    "Website Templates",
    "Components",
    "Scripts & Tools",
    "Starter Kits"
  ];

  const priceRanges = [
    { label: 'Under $25', min: 0, max: 25 },
    { label: '$25 to $50', min: 25, max: 50 },
    { label: '$50 to $100', min: 50, max: 100 },
    { label: 'Over $100', min: 100, max: Infinity }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={filters.categories.includes(category)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters(prev => ({
                      ...prev,
                      categories: [...prev.categories, category]
                    }));
                  } else {
                    setFilters(prev => ({
                      ...prev,
                      categories: prev.categories.filter(c => c !== category)
                    }));
                  }
                }}
              />
              <span className="text-sm text-gray-600">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center space-x-2">
              <input
                type="radio"
                name="priceRange"
                className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={filters.priceRange.min === range.min && filters.priceRange.max === range.max}
                onChange={() => {
                  setFilters(prev => ({
                    ...prev,
                    priceRange: { min: range.min, max: range.max }
                  }));
                }}
              />
              <span className="text-sm text-gray-600">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Rating</h3>
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          value={filters.minRating}
          onChange={(e) => {
            setFilters(prev => ({
              ...prev,
              minRating: Number(e.target.value)
            }));
          }}
        >
          <option value="0">All Ratings</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;