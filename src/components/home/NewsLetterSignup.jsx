import React from 'react';
import { Sparkles } from 'lucide-react';

const NewsletterSignup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter signup logic here
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 mr-2" />
            <span className="text-xs font-medium text-blue-600">Newsletter</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Get the latest updates about new products, features, and special offers
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;