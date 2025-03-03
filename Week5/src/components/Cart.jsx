import React from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = ({ id, name, price, image, quantity }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleIncreaseQuantity = () => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="text-base font-medium text-gray-800">{name}</h3>
        <p className="mt-1 text-sm text-gray-600">₹{price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button 
            onClick={handleDecreaseQuantity}
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
          >
            <Minus size={16} />
          </button>
          
          <span className="px-3 py-1 text-gray-800">{quantity}</span>
          
          <button 
            onClick={handleIncreaseQuantity}
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <button 
          onClick={() => removeFromCart(id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          <Trash2 size={20} />
        </button>
      </div>
      
      <div className="ml-6 text-right">
        <p className="text-base font-medium text-gray-800">
          ₹{(price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
