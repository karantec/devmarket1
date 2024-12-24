import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null); // Product state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch product details by ID
  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://dev-market-backend.onrender.com/api/architecture/data/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setProduct(result.data);
    } catch (err) {
      console.error('Error fetching product details:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  return (
    <div className="container mx-auto px-4 mt-10 mb-10">
      {loading && <p>Loading product details...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {product && (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <img
            src={product.Prodhumbnail}
            alt={product.name}
            className="w-full h-64 object-cover rounded mb-6"
          />
          <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
          <p className="text-xl font-bold mb-4">Price: {product.price}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
