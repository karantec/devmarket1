import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Layout, Terminal, FileCode, Package, Rocket } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Landing Pages',
      icon: Layout,
      description: 'Professional, conversion-optimized landing pages',
      count: 245,
      gradient: 'from-blue-500 to-blue-600',
      hoverGradient: 'from-blue-600 to-blue-700'
    },
    {
      id: 2,
      name: 'Software Solutions',
      icon: Code,
      description: 'Ready-to-deploy applications and tools',
      count: 189,
      gradient: 'from-purple-500 to-purple-600',
      hoverGradient: 'from-purple-600 to-purple-700'
    },
    {
      id: 3,
      name: 'Website Templates',
      icon: FileCode,
      description: 'Customizable templates built with modern technologies',
      count: 367,
      gradient: 'from-pink-500 to-pink-600',
      hoverGradient: 'from-pink-600 to-pink-700'
    },
    {
      id: 4,
      name: 'Components',
      icon: Package,
      description: 'Individual components to enhance existing websites',
      count: 523,
      gradient: 'from-indigo-500 to-indigo-600',
      hoverGradient: 'from-indigo-600 to-indigo-700'
    },
    {
      id: 5,
      name: 'Scripts & Tools',
      icon: Terminal,
      description: 'Automation scripts and development tools',
      count: 156,
      gradient: 'from-cyan-500 to-cyan-600',
      hoverGradient: 'from-cyan-600 to-cyan-700'
    },
    {
      id: 6,
      name: 'Starter Kits',
      icon: Rocket,
      description: 'Complete project setups to jumpstart development',
      count: 98,
      gradient: 'from-teal-500 to-teal-600',
      hoverGradient: 'from-teal-600 to-teal-700'
    },
  ];

  return (
    <div className="bg-gray-50 py-12"> {/* Reduced padding */}
      <div className="container mx-auto px-4 max-w-5xl"> {/* Added max-width constraint */}
        <div className="text-center max-w-2xl mx-auto mb-8"> {/* Reduced margin */}
          <h2 className="text-2xl font-bold mb-2">Browse Categories</h2> {/* Smaller heading */}
          <p className="text-gray-600 text-sm"> {/* Smaller text */}
            Explore our extensive collection of premium digital products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Reduced gap */}
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link 
                key={category.id}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg" // Smaller shadow and border radius
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="p-4"> {/* Reduced padding */}
                  <div className="flex items-start mb-3"> {/* Reduced margin */}
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient} group-hover:${category.hoverGradient} transition-all duration-300`}> {/* Smaller icon container */}
                      <IconComponent className="h-4 w-4 text-white" /> {/* Smaller icon */}
                    </div>
                    <div className="ml-3"> {/* Reduced margin */}
                      <h3 className="text-base font-semibold mb-1">{category.name}</h3> {/* Smaller title */}
                      <p className="text-gray-600 text-sm line-clamp-2">{category.description}</p> {/* Smaller text and line clamp */}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100"> {/* Added border for separation */}
                    <div className="text-xs font-medium text-gray-500"> {/* Smaller text */}
                      {category.count.toLocaleString()} products
                    </div>
                    <div className="text-xs font-medium text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
                      Explore →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;