import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Check, ChevronDown } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

const ProductDetails = ({ product = sampleProduct }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Tabs configuration
  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'reviews', label: 'Reviews' }
  ];

  // Handle add to cart
  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Adding to cart:', {
      product,
      quantity,
      selectedSize
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <span className="text-gray-400 dark:text-gray-600">/</span>
            </li>
            <li>
              <a href="/products" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <span className="text-gray-400 dark:text-gray-600">/</span>
            </li>
            <li>
              <span className="text-gray-900 dark:text-white font-medium">
                {product.name}
              </span>
            </li>
          </ol>
        </nav>

        {/* Product section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Image gallery */}
          <div className="flex flex-col">
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Image thumbnails */}
            <div className="mt-4 grid grid-cols-4 gap-4">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 
                    ${selectedImage === idx ? 'ring-2 ring-primary-500' : ''}`}
                >
                  <img
                    src={image}
                    alt={`Product ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h1>

            {/* Price and rating */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </p>
                {product.originalPrice && (
                  <p className="ml-3 text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </p>
                )}
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-5 h-5 ${
                        idx < product.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Product description */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 dark:text-gray-300 space-y-6">
                {product.description}
              </div>
            </div>

            {/* Size selector */}
            {product.sizes && (
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Size</h3>
                <div className="mt-4 grid grid-cols-4 gap-4">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase
                        ${
                          selectedSize === size
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                            : 'border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity selector */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Quantity</h3>
              <div className="mt-4 flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  -
                </button>
                <span className="text-gray-900 dark:text-white font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart and wishlist */}
            <div className="mt-8 flex flex-col space-y-4">
              <Button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </Button>
              <Button
                variant="secondary"
                className="w-full flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Add to Wishlist</span>
              </Button>
            </div>

            {/* Additional information */}
            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Features</h3>
              <div className="mt-4 space-y-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs section */}
        <div className="mt-16">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    ${activeTab === tab.id
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                    }
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab content */}
          <div className="mt-8">
            {activeTab === 'description' && (
              <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
                {product.longDescription}
              </div>
            )}
            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="flex justify-between">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{spec.name}</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{spec.value}</dd>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="space-y-8">
                {product.reviews.map((review, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">{review.author}</h4>
                      <div className="mt-1 flex items-center">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-4 h-4 ${
                              idx < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{review.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample product data structure
const sampleProduct = {
  id: 1,
  name: 'Premium Development Tool',
  price: 99.99,
  originalPrice: 129.99,
  rating: 4.5,
  reviewCount: 117,
  images: [
    '/api/placeholder/600/600',
    '/api/placeholder/600/600',
    '/api/placeholder/600/600',
    '/api/placeholder/600/600'
  ],
  description: 'A comprehensive development tool that streamlines your workflow and boosts productivity.',
  longDescription: `
    This premium development tool is designed to help developers work more efficiently.
    It includes features like automated testing, code optimization, and real-time collaboration.
    Perfect for both individual developers and teams working on large-scale projects.
  `,
  sizes: ['S', 'M', 'L', 'XL'],
  features: [
    'Automated testing and debugging',
    'Real-time collaboration',
    'Code optimization',
    'Advanced analytics',
    'Cross-platform compatibility'
  ],
  specifications: [
    { name: 'Version', value: '2.0.0' },
    { name: 'Release Date', value: '2024' },
    { name: 'Platform', value: 'Cross-platform' },
    { name: 'License', value: 'Commercial' }
  ],
  reviews: [
    {
      author: 'John Doe',
      avatar: '/api/placeholder/40/40',
      rating: 5,
      content: 'Excellent tool that has significantly improved our development workflow.'
    },
    {
      author: 'Jane Smith',
      avatar: '/api/placeholder/40/40',
      rating: 4,
      content: 'Great features and intuitive interface. Could use some performance improvements.'
    }
  ]
};

export default ProductDetails;