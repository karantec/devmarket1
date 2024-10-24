// src/context and hooks/CartContext.jsx
import React, { createContext, useReducer, useContext } from 'react';

export const CartContext = createContext();

const initialState = {
  items: [],
  total: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      if (existingItemIndex > -1) {
        const updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }
          return item;
        });

        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price
      };

    case 'REMOVE_FROM_CART':
      const updatedItems = state.items.filter(item => item.id !== action.payload.id);
      const removedItem = state.items.find(item => item.id === action.payload.id);
      return {
        ...state,
        items: updatedItems,
        total: state.total - (removedItem.price * removedItem.quantity)
      };

    case 'UPDATE_QUANTITY':
      const newItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity
          };
        }
        return item;
      });

      const newTotal = newItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      return {
        ...state,
        items: newItems,
        total: newTotal
      };

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// useCart hook in the same file
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  const { state, dispatch } = context;

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return {
    cart: state.items,
    total: state.total,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
};