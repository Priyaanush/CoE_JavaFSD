import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Home } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { state } = useCart();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-black text-red-500 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold flex items-center">
            <span className="text-red-500 mr-2">Gadget</span>
            <span>Hub</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center hover:text-red-300 transition-colors">
              <Home size={20} className="mr-1" />
              <span>Home</span>
            </Link>
            
            <Link to="/cart" className="flex items-center hover:text-red-300 transition-colors relative">
              <ShoppingCart size={20} className="mr-1" />
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
