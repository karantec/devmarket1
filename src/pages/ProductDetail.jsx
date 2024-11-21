import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Sample data for demonstration purposes
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
    category: "templates",
    tags: ["react", "tailwind", "e-commerce"],
    author: {
      name: "Sarah Chen",
      avatar: "/api/placeholder/100/100"
    }
  },
  {
    id: 2,
    name: "Dashboard UI Kit",
    description: "Professional dashboard components and layouts",
    price: 79,
    image: "/api/placeholder/800/600",
    rating: 4.9,
    reviews: 89,
    downloads: 876,
    category: "ui-kits",
    tags: ["dashboard", "components", "admin"],
    author: {
      name: "Mike Johnson",
      avatar: "/api/placeholder/100/100"
    }
  },
  {
    id: 3,
    name: "Landing Page Bundle",
    description: "Collection of high-converting landing page templates",
    price: 129,
    image: "/api/placeholder/800/600",
    rating: 4.7,
    reviews: 156,
    downloads: 2341,
    category: "templates",
    tags: ["landing-page", "marketing", "conversion"],
    author: {
      name: "Emma Wilson",
      avatar: "/api/placeholder/100/100"
    }
  }
];

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate fetching product details
    const productDetails = sampleProducts.find(p => p.id === parseInt(id));
    setProduct(productDetails);
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover rounded-md shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <p className="text-gray-500 mb-4">
            <strong>Rating:</strong> {product.rating} ({product.reviews} reviews)
          </p>
          <p className="text-gray-500">
            <strong>Downloads:</strong> {product.downloads}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
