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
    category: "templates",
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
    category: "ui-kits",
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
    category: "templates",
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
  rating: { label: 'Highest Rated', key: 'rating' }
};

const Productivity = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    categories: searchParams.getAll('category') || [],
    priceRange: [
      parseInt(searchParams.get('minPrice') || '0'),
      parseInt(searchParams.get('maxPrice') || '500')
    ],
    ratings: searchParams.getAll('rating').map(Number) || [],
    search: searchParams.get('q') || ''
  });
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'popular');
  const [products, setProducts] = useState(sampleProducts);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  // Update URL when filters or sort change
  useEffect(() => {
    const newSearchParams = new URLSearchParams();

    if (filters.categories.length) {
      filters.categories.forEach(cat => newSearchParams.append('category', cat));
    }
    if (filters.priceRange[0] > 0) {
      newSearchParams.set('minPrice', filters.priceRange[0]);
    }
    if (filters.priceRange[1] < 500) {
      newSearchParams.set('maxPrice', filters.priceRange[1]);
    }
    if (filters.ratings.length) {
      filters.ratings.forEach(rating => newSearchParams.append('rating', rating));
    }
    if (filters.search) {
      newSearchParams.set('q', filters.search);
    }
    if (sortBy !== 'popular') {
      newSearchParams.set('sort', sortBy);
    }

    setSearchParams(newSearchParams);
  }, [filters, sortBy, setSearchParams]);

  // Apply filters and sorting
  useEffect(() => {
    const applyFilters = () => {
      setIsLoading(true);
      try {
        let result = [...products];

        // Apply category filter
        if (filters.categories.length) {
          result = result.filter(product => 
            filters.categories.includes(product.category)
          );
        }

        // Apply price range filter
        result = result.filter(product => 
          product.price >= filters.priceRange[0] && 
          product.price <= filters.priceRange[1]
        );

        // Apply rating filter
        if (filters.ratings.length) {
          result = result.filter(product =>
            filters.ratings.some(rating => Math.floor(product.rating) === rating)
          );
        }

        // Apply search filter
        if (filters.search) {
          const searchLower = filters.search.toLowerCase();
          result = result.filter(product =>
            product.name.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower) ||
            product.tags.some(tag => tag.toLowerCase().includes(searchLower))
          );
        }

        // Apply sorting
        const sortConfig = sortOptions[sortBy];
        if (sortConfig) {
          result.sort((a, b) => {
            if (sortBy === 'priceAsc') {
              return a[sortConfig.key] - b[sortConfig.key];
            }
            if (sortBy === 'priceDesc') {
              return b[sortConfig.key] - a[sortConfig.key];
            }
            return b[sortConfig.key] - a[sortConfig.key];
          });
        }

        setFilteredProducts(result);
      } catch (err) {
        setError('Error filtering products');
        console.error('Filter error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    applyFilters();
  }, [filters, sortBy, products]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  const handleSearchChange = (searchTerm) => {
    setFilters(prev => ({
      ...prev,
      search: searchTerm
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            {filters.search 
              ? `Search results for "${filters.search}"`
              : filters.categories.length 
                ? `${filters.categories.join(', ')} Products`
                : 'All Products'
            }
          </h1>
          <p className="text-gray-600 mt-2">
            {filteredProducts.length} 
            {filteredProducts.length === 1 ? ' product' : ' products'} found
          </p>
        </div>
        <ProductSort 
          options={sortOptions}
          currentSort={sortBy} 
          onSortChange={handleSortChange} 
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <ProductFilters 
            filters={filters} 
            onFilterChange={handleFilterChange}
            onSearchChange={handleSearchChange}
          />
        </aside>

        <main className="flex-1">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader className="h-8 w-8 animate-spin text-blue-600" />
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search terms
              </p>
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Productivity;