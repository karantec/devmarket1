import React from 'react';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Premium geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rotate-45 rounded-3xl blur-2xl" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500/10 rotate-12 rounded-3xl blur-2xl" />
        </div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Premium indicator */}
          <div className="flex justify-center">
            <div className="inline-flex items-center px-3 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-400 mr-2" />
              <span className="text-xs font-medium text-blue-100">Premium Marketplace</span>
            </div>
          </div>

          <h1 className="text-center">
            <span className="block text-4xl md:text-5xl font-bold text-white mb-2">
              Discover Premium
            </span>
            <span className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
          
          <p className="text-lg text-blue-200/80 text-center mt-4 mb-8 font-light">
            Curated collection of premium-grade digital assets and solutions
          </p>

          {/* Enhanced search bar */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search premium assets..."
                className="w-full px-5 py-4 bg-white/10 border border-white/10 backdrop-blur-md rounded-xl text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition duration-300"
              />
              <button className="absolute right-2 p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg group-hover:from-blue-600 group-hover:to-indigo-600 transition duration-300">
                <Search className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <Link 
              to="/products" 
              className="group px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition duration-300"
            >
              <span className="flex items-center text-sm font-medium text-white">
                Explore Collection
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link 
              to="/sell" 
              className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition duration-300"
            >
              <span className="text-sm font-medium text-white">Start Selling</span>
            </Link>
          </div>

          {/* Compact stats */}
          <div className="mt-12 flex justify-center gap-12">
            {[
              { value: '10k+', label: 'Products' },
              { value: '50k+', label: 'Customers' },
              { value: '1M+', label: 'Downloads' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-blue-200/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;