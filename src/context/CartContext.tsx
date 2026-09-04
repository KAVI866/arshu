import React, { createContext, useState, useContext, useEffect } from 'react';
import { cartApi } from '../services/api/cart.api';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';

interface CartItem {
  id: number;
  productId: number;
  quantity: number;
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    stock: number;
    discountedPrice?: number;
  };
}

interface Cart {
  id: number;
  items: CartItem[];
  totalItems: number;
  subtotal: number;
}

interface CartContextType {
  cart: Cart | null;
  loading: boolean;
  addToCart: (productId: number, quantity?: number) => Promise<void>;
  updateQuantity: (itemId: number, quantity: number) => Promise<void>;
  removeFromCart: (itemId: number) => Promise<void>;
  clearCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      refreshCart();
    } else {
      setCart(null);
    }
  }, [user]);

  const refreshCart = async () => {
    try {
      setLoading(true);
      const response = await cartApi.getCart();
      setCart(response.data);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId: number, quantity: number = 1) => {
    try {
      setLoading(true);
      const response = await cartApi.addToCart({ productId, quantity });
      setCart(response.data);
      toast.success('Item added to cart');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to add to cart');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (itemId: number, quantity: number) => {
    try {
      setLoading(true);
      const response = await cartApi.updateCartItem(itemId, { quantity });
      setCart(response.data);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to update cart');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (itemId: number) => {
    try {
      setLoading(true);
      const response = await cartApi.removeFromCart(itemId);
      setCart(response.data);
      toast.success('Item removed from cart');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to remove item');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    try {
      setLoading(true);
      await cartApi.clearCart();
      setCart(null);
      toast.success('Cart cleared');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to clear cart');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};