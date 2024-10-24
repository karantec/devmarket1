import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    fill="currentColor"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;