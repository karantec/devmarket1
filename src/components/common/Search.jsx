// components/common/Search.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, X, Loader } from 'lucide-react';
import debounce from 'lodash/debounce';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Categories for filtering
  const categories = ['All', 'Templates', 'Plugins', 'Themes', 'Tools'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounced search function
  const debouncedSearch = debounce(async (term, category) => {
    if (!term) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      // Replace this with your actual API call
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(term)}&category=${encodeURIComponent(category)}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, 300);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowResults(true);
    debouncedSearch(value, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (searchTerm) {
      debouncedSearch(searchTerm, category);
    }
  };

  const handleResultClick = (result) => {
    setShowResults(false);
    setSearchTerm('');
    navigate(`/product/${result.id}`);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-2xl" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <SearchIcon 
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for products..."
          className="w-full pl-12 pr-10 py-3 border border-gray-200 rounded-xl 
                     bg-white dark:bg-gray-800 dark:border-gray-700
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     placeholder-gray-400 text-gray-900 dark:text-white"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
                       hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 mt-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 py-1 text-sm rounded-full transition-colors
                      ${selectedCategory === category
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                      }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Results */}
      {showResults && (searchTerm || isLoading) && (
        <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-xl 
                        shadow-lg border border-gray-200 dark:border-gray-700 
                        max-h-96 overflow-y-auto z-50">
          {isLoading ? (
            <div className="flex items-center justify-center p-4">
              <Loader className="h-6 w-6 animate-spin text-primary-500" />
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 
                             dark:hover:bg-gray-700 flex items-center gap-3"
                >
                  {/* Product Image */}
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 
                                 dark:text-white truncate">
                      {result.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {result.category} • ${result.price}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              No results found for "{searchTerm}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;