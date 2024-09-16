import React from 'react';
import products from '../data/products';

const Products = () => {
  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-secondary p-4 rounded-lg shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="mt-4">
            <h2 className="text-lg font-bold text-white">{product.name}</h2>
            <p className="text-gray-400">{product.description}</p>
            <p className="mt-2 text-accent text-lg font-semibold">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
