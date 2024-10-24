// src/hooks/useCart.js
import { useContext } from 'react';
import { CartContext } from '../context and hooks/CartContext';

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    
    const { state, dispatch } = context;
    
    const addToCart = (product) => {
        dispatch({ 
            type: 'ADD_TO_CART', 
            payload: {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image
            }
        });
    };
  
    const removeFromCart = (productId) => {
        dispatch({ 
            type: 'REMOVE_FROM_CART', 
            payload: { id: productId }
        });
    };
  
    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }
        
        dispatch({ 
            type: 'UPDATE_QUANTITY', 
            payload: { id: productId, quantity }
        });
    };
  
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };
  
    const cartTotal = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
  
    return {
        cart: state.items,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount: state.items.length
    };
};

export default useCart;