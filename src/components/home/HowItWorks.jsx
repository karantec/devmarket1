import React from 'react';
import { Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Browse Products',
      description: 'Explore our curated collection of digital products from verified sellers',
      icon: '🔍'
    },
    {
      title: 'Secure Purchase',
      description: 'Buy with confidence using our secure checkout process',
      icon: '🛒'
    },
    {
      title: 'Instant Access',
      description: 'Get immediate access to your purchased products with full documentation',
      icon: '⚡'
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 mr-2" />
            <span className="text-xs font-medium text-blue-600">How It Works</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
                  <span className="font-medium">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;