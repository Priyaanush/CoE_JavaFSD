import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products'; // Assuming your products data is here

const Home = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">Featured Products</h2>
        <p className="text-lg text-gray-300 mb-8">Discover our latest tech products and accessories.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
