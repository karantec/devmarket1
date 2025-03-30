import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EcommerceGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [filters, setFilters] = useState({ category: '', name: '', minPrice: '', maxPrice: '' });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showLiveLink, setShowLiveLink] = useState(false);
  const [buyMode, setBuyMode] = useState(false);
  
  // Fixed: Renamed the function to avoid naming conflict with the state setter
  const handleShowLiveLink = (show, buy = false) => {
    setShowLiveLink(show);
    setBuyMode(buy);
  };

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

  const handleCompletePurchase = () => {
    // Add your purchase completion logic here
    setShowLiveLink(false);
    alert("Purchase completed successfully!");
    // You might want to navigate to a confirmation page or show a success message
  };

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
              <div key={product._id} onClick={() => setSelectedProduct(product)} className="cursor-pointer">
                <div className="border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center bg-white">
                  <img
                    src={product.images || 'https://via.placeholder.com/150'}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">{product.name}</h3>
                  <p className="text-lg font-bold text-center">Price: {product.price}</p>
                </div>
              </div>
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
      {selectedProduct && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-2xl"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the card
          >
            <h2 className="text-2xl font-bold mb-4 hover:text-blue-600 cursor-pointer">{selectedProduct.name}</h2>
            
            <img 
              src={selectedProduct.images || 'https://via.placeholder.com/150'} 
              alt={selectedProduct.name} 
              className="w-full h-60 object-cover mb-4 rounded cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleShowLiveLink(true)}
            />
            
            <div className="space-y-2 mb-4">
              <p className="cursor-pointer hover:text-blue-600">
                <span className="font-semibold">Category:</span> {selectedProduct.category}
              </p>
              <p className="cursor-pointer hover:text-blue-600">
                <span className="font-semibold">Price:</span> {selectedProduct.price}
              </p>
              <p className="cursor-pointer hover:text-blue-600">
                <span className="font-semibold">Description:</span> {selectedProduct.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleShowLiveLink(true)}
                className="py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition-colors"
              >
                View Product
              </button>
              
              <button 
                onClick={() => handleShowLiveLink(true, true)}
                className="py-2 bg-green-600 text-white text-center rounded hover:bg-green-700 transition-colors"
              >
                Buy Now
              </button>
            </div>
            
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Close
            </button>
            
            {/* Nested Modal for Live Link */}
            {showLiveLink && (
              <div 
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
                onClick={() => setShowLiveLink(false)}
              >
                <div 
                  className="bg-white p-4 rounded-lg shadow-xl w-3/4 h-3/4 flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{buyMode ? 'Complete Your Purchase' : 'Product Details'}</h3>
                    <button 
                      onClick={() => setShowLiveLink(false)}
                      className="text-gray-500 hover:text-gray-800"
                    >
                      <span className="text-2xl">&times;</span>
                    </button>
                  </div>
                  
                  <div className="flex-grow overflow-auto">
                    <iframe 
                      src={buyMode ? `${selectedProduct.liveLink}?buy=true` : selectedProduct.liveLink} 
                      className="w-full h-full border-0"
                      title={buyMode ? 'Buy Product' : 'Product Details'}
                    />
                  </div>
                  
                  {/* Always show the Complete Purchase button in the live link modal */}
                  <div className="mt-4 flex justify-end">
                    <button 
                      className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                      onClick={handleCompletePurchase}
                    >
                      Complete Purchase
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EcommerceGrid;