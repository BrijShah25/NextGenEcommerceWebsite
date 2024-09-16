import React from 'react';
import { useLocation } from 'react-router-dom';
import products from '../data/products'; // Adjust the path to where your data is located

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') || '';

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold">{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
