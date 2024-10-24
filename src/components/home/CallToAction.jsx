import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 mr-2" />
            <span className="text-xs font-medium text-blue-600">Get Started</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of developers and businesses saving time and resources with Dev Market
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sell"
              className="group inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <span className="font-medium">Start Selling</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              <span className="font-medium">Browse Products</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;