import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Download } from 'lucide-react';


const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Modern E-commerce Template",
      description: "A fully responsive e-commerce template built with React and Tailwind CSS",
      price: 49,
      image: "/api/placeholder/400/300",
      rating: 4.8,
      reviews: 124,
      downloads: 1542,
      author: {
        name: "Sarah Chen",
        avatar: "/api/placeholder/32/32"
      },
      badges: ['Featured', 'Best Seller']
    },
    {
      id: 2,
      name: "Admin Dashboard Pro",
      description: "Complete admin panel solution with dark mode and analytics",
      price: 79,
      image: "/api/placeholder/400/300",
      rating: 4.9,
      reviews: 89,
      downloads: 892,
      author: {
        name: "Mike Johnson",
        avatar: "/api/placeholder/32/32"
      },
      badges: ['New', 'Premium']
    },
    {
      id: 3,
      name: "Authentication Starter Kit",
      description: "Secure authentication system with social login support",
      price: 39,
      image: "/api/placeholder/400/300",
      rating: 4.7,
      reviews: 67,
      downloads: 723,
      author: {
        name: "David Wilson",
        avatar: "/api/placeholder/32/32"
      },
      badges: ['Popular']
    }
  ];


  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600 text-sm">
              Hand-picked premium digital products for your next project
            </p>
          </div>
          <Link
            to="/products"
            className="group flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm"
          >
            <span className="font-medium">View all</span>
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white rounded-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-gray-200"
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
               
                <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
                  {product.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`px-2 py-0.5 text-xs font-medium text-white rounded-full ${
                        badge === 'Featured' ? 'bg-blue-600' :
                        badge === 'Best Seller' ? 'bg-green-600' :
                        badge === 'New' ? 'bg-purple-600' :
                        badge === 'Premium' ? 'bg-yellow-600' :
                        'bg-gray-600'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
               
                <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md shadow-sm">
                  <span className="font-bold text-sm text-gray-900">${product.price}</span>
                </div>
              </div>


              <div className="p-4">
                <h3 className="text-base font-semibold mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>


                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="ml-1 text-xs font-medium">{product.rating}</span>
                      <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Download className="h-3 w-3" />
                      <span className="ml-1 text-xs">{product.downloads.toLocaleString()}</span>
                    </div>
                  </div>
                 
                  <div className="flex items-center">
                    <img
                      src={product.author.avatar}
                      alt={product.author.name}
                      className="h-6 w-6 rounded-full border-2 border-white shadow-sm"
                    />
                    <div className="ml-2">
                      <p className="text-xs font-medium text-gray-900">{product.author.name}</p>
                      <p className="text-xs text-gray-500">Author</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>


        <div className="mt-8 text-center">
          <Link
            to="/products"
            className="inline-flex items-center px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Explore All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};


export default FeaturedProducts;