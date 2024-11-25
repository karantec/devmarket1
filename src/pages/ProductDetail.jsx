import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Updated import

// Sample data for demonstration purposes
const sampleProducts = [
  {
    id: 1,
    name: "Modern E-commerce Template",
    description: "A fully responsive e-commerce template built with React and Tailwind CSS. Perfect for launching an online store quickly and efficiently.",
    price: 49,
    image: "/api/placeholder/800/600",
    rating: 4.8,
    reviews: 124,
    downloads: 1542,
    category: "templates",
    tags: ["React", "Tailwind", "E-commerce"],
    author: {
      name: "Sarah Chen",
      avatar: "/api/placeholder/100/100"
    }
  },
  {
    id: 2,
    name: "Dashboard UI Kit",
    description: "Professional dashboard components and layouts, perfect for creating custom admin panels and dashboards.",
    price: 79,
    image: "/api/placeholder/800/600",
    rating: 4.9,
    reviews: 89,
    downloads: 876,
    category: "ui-kits",
    tags: ["Dashboard", "Components", "Admin"],
    author: {
      name: "Mike Johnson",
      avatar: "/api/placeholder/100/100"
    }
  },
  {
    id: 3,
    name: "Landing Page Bundle",
    description: "A collection of high-converting landing page templates built to enhance your marketing efforts and conversion rates.",
    price: 129,
    image: "/api/placeholder/800/600",
    rating: 4.7,
    reviews: 156,
    downloads: 2341,
    category: "templates",
    tags: ["Landing Page", "Marketing", "Conversion"],
    author: {
      name: "Emma Wilson",
      avatar: "/api/placeholder/100/100"
    }
  }
];

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]); // State to manage cart items (local example)
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  useEffect(() => {
    // Simulate fetching product details
    const productDetails = sampleProducts.find(p => p.id === parseInt(id));
    setProduct(productDetails);
  }, [id]);

  const handleAddToCart = () => {
    setCart([...cart, product]);
    // After adding to cart, redirect to the cart page
    navigate('/cart');
  };

  const handleBuyNow = () => {
    console.log("Buy Now clicked for product:", product.name);
    // Placeholder - Redirect to checkout or handle buy process here
  };

  const handlePreview = () => {
    console.log("Preview clicked for product:", product.name);
    // Placeholder - Open a preview modal or navigate to preview page here
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Product Container */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Product Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-xl shadow-lg border border-gray-300 object-cover max-w-md"
          />
        </div>
        
        {/* Product Details Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Price, Rating, and Downloads */}
          <div className="mb-6">
            <p className="text-2xl font-semibold text-gray-800 mb-2">${product.price}</p>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Rating:</span> ⭐ {product.rating} ({product.reviews} reviews)
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Downloads:</span> {product.downloads}
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <button 
              onClick={handleAddToCart}
              className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900 transition duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow}
              className="w-full lg:w-auto bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:from-green-700 hover:to-green-900 transition duration-300 transform hover:scale-105"
            >
              Buy Now
            </button>
            <button 
              onClick={handlePreview}
              className="w-full lg:w-auto bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:from-gray-700 hover:to-gray-900 transition duration-300 transform hover:scale-105"
            >
              Preview
            </button>
          </div>

          {/* Author Section */}
          <div className="flex items-center gap-4 mt-8">
            <img
              src={product.author.avatar}
              alt={product.author.name}
              className="w-16 h-16 rounded-full border border-gray-300 shadow-md"
            />
            <div>
              <p className="text-lg font-medium text-gray-800">Created by: {product.author.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tags</h2>
        <div className="flex flex-wrap gap-3">
          {product.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 text-gray-700 py-2 px-4 rounded-full text-sm font-medium shadow-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Additional Product Information Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Highlights</h2>
        <ul className="list-disc list-inside text-gray-700 leading-loose ml-6">
          <li>Built using the latest web technologies for optimal performance.</li>
          <li>Responsive and highly customizable components.</li>
          <li>Well-documented and easy to use.</li>
          <li>Includes lifetime updates with the purchase.</li>
          <li>Ideal for designers, developers, and business owners.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
