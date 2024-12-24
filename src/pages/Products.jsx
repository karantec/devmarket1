import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EcommerceGrid = () => {
  const [products, setProducts] = useState([]); // To store the fetched products
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage errors
  const [filter, setFilter] = useState({ category: '', name: '', minPrice: '', maxPrice: '' }); // Filter state
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [productsPerPage] = useState(8); // Products per page

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dev-market-backend.onrender.com/api/architecture/data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('API Response:', result); // Debug the API response

      if (result.data && Array.isArray(result.data)) {
        setProducts(result.data); // Use the `data` array from the response
      } else {
        setProducts([]); // Fallback in case of unexpected structure
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on selected filter options
  const filteredProducts = products.filter((product) => {
    const matchesCategory = filter.category ? product.category.toLowerCase().includes(filter.category.toLowerCase()) : true;
    const matchesName = filter.name ? product.name.toLowerCase().includes(filter.name.toLowerCase()) : true;
    const matchesPrice =
      filter.minPrice && filter.maxPrice
        ? product.price >= filter.minPrice && product.price <= filter.maxPrice
        : true;

    return matchesCategory && matchesName && matchesPrice;
  });

  // Get current products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="container mx-auto px-4 mt-10 mb-10 flex">
      {/* Filters Sidebar */}
      <div className="w-1/4 bg-gray-100 p-6 rounded-lg mr-6">
        <h2 className="text-xl font-semibold mb-6">Filters</h2>
        {/* Add filter components here */}
      </div>

      {/* Products Grid */}
      <div className="w-3/4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {/* Products Grid */}
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <Link to={`/product/${product._id}`} key={product._id}>
                <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center bg-white">
                  <img
                    src={product.Prodhumbnail}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 text-center mb-2">{product.category}</p>
                  <p className="text-lg font-bold text-center">Price: {product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          !loading && <p>No products available.</p>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-6 py-3 bg-gray-200 rounded-l-lg disabled:opacity-50 text-lg"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-6 py-3 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-none text-lg`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-6 py-3 bg-gray-200 rounded-r-lg disabled:opacity-50 text-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EcommerceGrid;
