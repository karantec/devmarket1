import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EcommerceGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [filters, setFilters] = useState({ category: '', name: '', minPrice: '', maxPrice: '' });

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://devmarketbackend-1.onrender.com/product/Product');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (Array.isArray(result)) {
        setProducts(result);
      } else {
        setProducts([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = filters.category ? product.category.toLowerCase().includes(filters.category.toLowerCase()) : true;
    const matchesName = filters.name ? product.name.toLowerCase().includes(filters.name.toLowerCase()) : true;
    const matchesPrice =
      (filters.minPrice === '' || product.price >= Number(filters.minPrice)) &&
      (filters.maxPrice === '' || product.price <= Number(filters.maxPrice));

    return matchesCategory && matchesName && matchesPrice;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="container mx-auto px-4 mt-10 mb-10 flex">
      <div className="w-1/4 bg-gray-100 p-6 rounded-lg mr-6">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <input type="text" name="name" placeholder="Search by name" className="w-full p-2 mb-4 border" onChange={handleFilterChange} />
        <input type="text" name="category" placeholder="Search by category" className="w-full p-2 mb-4 border" onChange={handleFilterChange} />
        <input type="number" name="minPrice" placeholder="Min Price" className="w-full p-2 mb-4 border" onChange={handleFilterChange} />
        <input type="number" name="maxPrice" placeholder="Max Price" className="w-full p-2 mb-4 border" onChange={handleFilterChange} />
      </div>
      <div className="w-3/4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <Link to={`/product/${product._id}`} key={product._id}>
                <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center bg-white">
                  <img
                    src={product.images || 'https://via.placeholder.com/150'}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">{product.name}</h3>
                  <p className="text-lg font-bold text-center">Price: {product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          !loading && <p>No products available.</p>
        )}
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
