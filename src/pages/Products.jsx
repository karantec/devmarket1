import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilters from '../components/product/ProductFilters';
import ProductSort from '../components/product/ProductSort';
import { Loader } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';

// Sample products data with more realistic e-commerce fields
const sampleProducts = [
  {
    id: 1,
    name: "Modern E-commerce Template",
    description: "A fully responsive e-commerce template built with React and Tailwind CSS",
    price: 49,
    image: "/api/placeholder/800/600",
    rating: 4.8,
    reviews: 124,
    downloads: 1542,
    category: "Website Templates", 
    tags: ["react", "tailwind", "e-commerce"],
    author: {
      name: "Sarah Chen",
      avatar: "/api/placeholder/100/100"
    }
  },
  {
    id: 2,
    name: "Dashboard UI Kit",
    description: "Professional dashboard components and layouts",
    price: 79,
    image: "/api/placeholder/800/600",
    rating: 4.9,
    reviews: 89,
    downloads: 876,
    category: "Components", 
    tags: ["dashboard", "components", "admin"],
    author: {
      name: "Mike Johnson",
      avatar: "/api/placeholder/100/100"
    }
  },
  {
    id: 3,
    name: "Landing Page Bundle",
    description: "Collection of high-converting landing page templates",
    price: 129,
    image: "/api/placeholder/800/600",
    rating: 4.7,
    reviews: 156,
    downloads: 2341,
    category: "Landing Pages", 
    tags: ["landing-page", "marketing", "conversion"],
    author: {
      name: "Emma Wilson",
      avatar: "/api/placeholder/100/100"
    }
  }
];

const sortOptions = {
  popular: { label: 'Most Popular', key: 'downloads' },
  newest: { label: 'Newest First', key: 'createdAt' },
  priceAsc: { label: 'Price: Low to High', key: 'price' },
  priceDesc: { label: 'Price: High to Low', key: 'price' },
  rating: { label: 'Highest Rated', key: 'rating' },
};
const Productivity = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    categories: searchParams.getAll('category'),
    priceRange: [
      parseInt(searchParams.get('minPrice') || '0', 10),
      parseInt(searchParams.get('maxPrice') || '500', 10),
    ],
    minRating: parseFloat(searchParams.get('minRating') || '0'),
    search: searchParams.get('q') || '',
  });

  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'popular');
  const [products] = useState(sampleProducts); 
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const newSearchParams = new URLSearchParams();

    // Update URL params
    if (filters.categories.length) {
      filters.categories.forEach((cat) => newSearchParams.append('category', cat));
    }
    if (filters.priceRange[0] > 0) {
      newSearchParams.set('minPrice', filters.priceRange[0]);
    }
    if (filters.priceRange[1] < 500) {
      newSearchParams.set('maxPrice', filters.priceRange[1]);
    }
    if (filters.minRating > 0) {
      newSearchParams.set('minRating', filters.minRating);
    }
    if (filters.search) {
      newSearchParams.set('q', filters.search);
    }
    if (sortBy !== 'popular') {
      newSearchParams.set('sort', sortBy);
    }

    setSearchParams(newSearchParams);
  }, [filters, sortBy, setSearchParams]);

  useEffect(() => {
    const applyFilters = () => {
      let result = [...products];

      // Apply category filter
      if (filters.categories.length) {
        result = result.filter((product) => filters.categories.includes(product.category));
      }

      // Apply price range filter
      result = result.filter(
        (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );

      // Apply rating filter
      if (filters.minRating) {
        result = result.filter((product) => product.rating >= filters.minRating);
      }

      // Apply search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        result = result.filter(
          (product) =>
            product.name.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower) ||
            product.tags.some((tag) => tag.toLowerCase().includes(searchLower))
        );
      }

      setFilteredProducts(result);
    };

    applyFilters();
  }, [filters, products]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <ProductSort options={sortOptions} currentSort={sortBy} onSortChange={setSortBy} />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <ProductFilters filters={filters} setFilters={setFilters} />
        </aside>

        <main className="flex-1">
          {filteredProducts.length === 0 ? (
            <div>No products found</div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Productivity;