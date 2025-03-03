import React from 'react';
import ProductCard from '../components/ProductCard';

const products= [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.'
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Track your fitness goals, receive notifications, and more with this advanced smartwatch.'
  },
  {
    id: 3,
    name: 'Ultra HD 4K Monitor',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Experience crystal clear visuals with this 27-inch 4K Ultra HD monitor.'
  },
  {
    id: 4,
    name: 'Ergonomic Office Chair',
    price: 249.99,
    image: 'https://images-cdn.ubuy.co.in/633bc22597235258d52d0584-office-chair-felixking-ergonomic-desk.jpg&auto=format&fit=crop&w=1000&q=80',
    description: 'Stay comfortable during long work sessions with this premium ergonomic office chair.'
  },
  {
    id: 5,
    name: 'Mechanical Gaming Keyboard',
    price: 129.99,
    image: 'https://www.lapcare.com/cdn/shop/files/1_4dcd8967-3c0b-475d-8d95-8b3cdc1f8c70.webp?v=1712836055&width=2048&auto=format&fit=crop&w=1000&q=80',
    description: 'Enhance your gaming experience with this responsive mechanical keyboard with RGB lighting.'
  },
  {
    id: 6,
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Precision and comfort with this high-DPI wireless gaming mouse.'
  },
  {
    id: 7,
    name: 'Portable Bluetooth Speaker',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Enjoy your music anywhere with this waterproof portable Bluetooth speaker.'
  },
  {
    id: 8,
    name: 'External SSD 1TB',
    price: 159.99,
    image: 'https://media-assets.hyperinvento.com/companies/3a5f1158-d966-4bf9-8fbb-11e3b361b94b/products/360a49b0-dbe6-40cd-b535-2f4f57bbf7db/featureds/images/b75b1779b5cc4799b1220bcab43ccde0-product-featured-lg.jpg',
    description: 'Fast and reliable external solid-state drive with 1TB of storage capacity.'
  }
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h1>
      <p className="text-gray-600 mb-8">Discover our latest tech products and accessories</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;