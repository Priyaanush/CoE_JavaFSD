import React, { createContext, useContext, useReducer } from 'react';

// Create context
const CartContext = createContext(undefined);

// Initial state
const initialState = {
  items: [],
  totalPrice: 0,
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedItems;

      if (existingItemIndex >= 0) {
        // Item already exists, update quantity
        updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      // Calculate new total price
      const newTotalPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        items: updatedItems,
        totalPrice: newTotalPrice,
      };
    }

    case 'REMOVE_FROM_CART': {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      // Calculate new total price
      const newTotalPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        items: updatedItems,
        totalPrice: newTotalPrice,
      };
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      // Calculate new total price
      const newTotalPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return {
        items: updatedItems,
        totalPrice: newTotalPrice,
      };
    }

    default:
      return state;
  }
};

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Helper functions
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  return (
    <CartContext.Provider
      value={{ state, dispatch, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 