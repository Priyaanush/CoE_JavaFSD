import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-red-500 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
        <p className="text-white text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-white font-bold">₹{product.price.toFixed(2)}</span>
          
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md flex items-center transition-colors"
          >
            <ShoppingCart size={16} className="mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
