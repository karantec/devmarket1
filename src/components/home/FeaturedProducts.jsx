// src/components/home/FeaturedProducts.jsx
import React from 'react';
import ProductCard from '../product/ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample featured products data
const featuredProducts = [
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
    {
      id: 2,
      name: "Admin Dashboard Pro",
      description: "Complete admin panel solution with dark mode and analytics",
      price: 79,
      image: "/api/placeholder/800/600",
      rating: 4.9,
      reviews: 89,
      downloads: 892,
      author: {
        name: "Mike Johnson",
        avatar: "/api/placeholder/100/100"
      }
    },
    {
      id: 3,
      name: "Authentication Starter Kit",
      description: "Secure authentication system with social login support",
      price: 39,
      image: "/api/placeholder/800/600",
      rating: 4.7,
      reviews: 67,
      downloads: 723,
      author: {
        name: "David Wilson",
        avatar: "/api/placeholder/100/100"
      }
    }
  ];
  
  const FeaturedProducts = () => {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link 
              to="/products" 
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              View all
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturedProducts;