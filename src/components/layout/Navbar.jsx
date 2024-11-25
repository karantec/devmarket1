import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-600 font-heading">
                DevMarket
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-between">
            {/* Search Bar */}
            <div className="max-w-xl w-full mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search digital products..."
                  className="input pl-10"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link
                to="/products"
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                Products
              </Link>
              <Link to="/sell" className="btn-primary">
                Start Selling
              </Link>
              {/* Link to Cart Page */}
              <Link to="/cart" className="p-2 text-gray-600 hover:text-primary-600 relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>
              <button className="p-2 text-gray-600 hover:text-primary-600">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-primary-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in">
            <div className="space-y-4">
              <div className="px-4">
                <input
                  type="text"
                  placeholder="Search digital products..."
                  className="input"
                />
              </div>
              <div className="space-y-2">
                <Link
                  to="/products"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Products
                </Link>
                <Link
                  to="/sell"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Start Selling
                </Link>
                <Link
                  to="/cart"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Cart
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
