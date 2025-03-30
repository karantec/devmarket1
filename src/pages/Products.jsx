import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EcommerceGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="container mx-auto px-4 mt-10 mb-10 flex">
      <div className="w-3/4 mx-auto">
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
