import React from 'react';
import { Star, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechStart',
      content: 'Dev Market helped us launch our MVP in record time. The quality of products and support is outstanding.',
      avatar: '/api/placeholder/40/40',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Independent Developer',
      content: 'As a seller, I love how Dev Market makes it easy to reach customers and manage my digital products.',
      avatar: '/api/placeholder/40/40',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      role: 'Marketing Director',
      content: 'The templates we purchased saved us weeks of development time. Highly recommended for any business.',
      avatar: '/api/placeholder/40/40',
      rating: 5
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 mr-2" />
            <span className="text-xs font-medium text-blue-600">Testimonials</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;