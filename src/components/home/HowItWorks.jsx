import React from 'react';

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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md mb-4">
                {step.icon}
              </div>
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;