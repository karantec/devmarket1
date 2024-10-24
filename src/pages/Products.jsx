// src/pages/Products.jsx
import React, { useState } from 'react';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilters from '../components/product/ProductFilters';
import ProductSort from '../components/product/ProductSort';
import { Loader } from 'lucide-react';

// Sample products data
const sampleProducts = [
  {
    id: 1,
    name: "Modern E-commerce Template",
    description: "A fully responsive e-commerce template built with React and Tailwind CSS",
    price: 49,
    image: "/api/placeholder/800/600",
    rating: 4.8,
    reviews: 124,
    downloads: 1542,
    author: {
      name: "Sarah Chen",
      avatar: "/api/placeholder/100/100"
    }
  },
  // Add more sample products...
];

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 500],
    ratings: []
  });
  const [sortBy, setSortBy] = useState('popular');
  const [products] = useState(sampleProducts);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Here you would typically fetch filtered products from an API
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    // Here you would typically sort the products accordingly
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">All Products</h1>
        <ProductSort currentSort={sortBy} onSortChange={handleSortChange} />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <ProductFilters filters={filters} setFilters={handleFilterChange} />
        </div>

        <div className="flex-1">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader className="h-8 w-8 animate-spin text-blue-600" />
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;