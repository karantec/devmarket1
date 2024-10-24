// src/components/home/Categories.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Layout, Terminal, FileCode, Package, Rocket } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Landing Pages',
    icon: Layout,
    description: 'Professional, conversion-optimized landing pages',
    count: 245,
  },
  {
    id: 2,
    name: 'Software Solutions',
    icon: Code,
    description: 'Ready-to-deploy applications and tools',
    count: 189,
  },
  {
    id: 3,
    name: 'Website Templates',
    icon: FileCode,
    description: 'Customizable templates built with modern technologies',
    count: 367,
  },
  {
    id: 4,
    name: 'Components',
    icon: Package,
    description: 'Individual components to enhance existing websites',
    count: 523,
  },
  {
    id: 5,
    name: 'Scripts & Tools',
    icon: Terminal,
    description: 'Automation scripts and development tools',
    count: 156,
  },
  {
    id: 6,
    name: 'Starter Kits',
    icon: Rocket,
    description: 'Complete project setups to jumpstart development',
    count: 98,
  },
];

const Categories = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link 
                key={category.id}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{category.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-sm text-gray-500">{category.count} products</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;