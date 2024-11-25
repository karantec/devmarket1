import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About DevMarket</h3>
            <p className="text-gray-600">
              Your premier marketplace for digital solutions, connecting developers with businesses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Buyers</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-600 hover:text-blue-600">Browse Products</Link></li>
              <li><Link to="/categories" className="text-gray-600 hover:text-blue-600">Categories</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-blue-600">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Sellers</h3>
            <ul className="space-y-2">
              <li><Link to="/sell" className="text-gray-600 hover:text-blue-600">Start Selling</Link></li>
              <li><Link to="/SellerGuide" className="text-gray-600 hover:text-blue-600">Seller Guide</Link></li>
              <li><Link to="/seller-tools" className="text-gray-600 hover:text-blue-600">Seller Tools</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:support@devmarket.com" className="text-gray-600 hover:text-blue-600">support@devmarket.com</a></li>
              <li><Link to="/Contact" className="text-gray-600 hover:text-blue-600">Contact Form</Link></li>
              <li><Link to="/FAQ" className="text-gray-600 hover:text-blue-600">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>© 2024 DevMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;