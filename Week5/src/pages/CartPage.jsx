import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import Cart from '../components/Cart';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { state } = useCart();
  const { items, totalPrice } = state;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft size={16} className="mr-2" />
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Shopping Cart</h1>
      
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flow-root">
              {items.map((item) => (
                <Cart 
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft size={16} className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
        
        <div className="mt-8 lg:mt-0 lg:col-span-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <p className="text-sm text-gray-600">Subtotal</p>
                <p className="text-sm font-medium text-gray-900">₹{totalPrice.toFixed(2)}</p>
              </div>
              
              <div className="flex justify-between mb-2">
                <p className="text-sm text-gray-600">Shipping</p>
                <p className="text-sm font-medium text-gray-900">Free</p>
              </div>
              
              <div className="flex justify-between mb-2">
                <p className="text-sm text-gray-600">Tax</p>
                <p className="text-sm font-medium text-gray-900">₹{(totalPrice * 0.1).toFixed(2)}</p>
              </div>
              
              <div className="flex justify-between border-t border-gray-200 pt-4 mt-4">
                <p className="text-base font-medium text-gray-900">Total</p>
                <p className="text-base font-bold text-gray-900">
                  ₹{(totalPrice + (totalPrice * 0.1)).toFixed(2)}
                </p>
              </div>
            </div>
            
            <button 
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;