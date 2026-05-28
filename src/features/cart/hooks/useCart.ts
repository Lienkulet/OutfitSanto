'use client';

import { useContext } from 'react';
import { CartContext } from '../store/CartContext';
import type { CartItem } from '../types';

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');

  const { state, dispatch } = ctx;

  function addItem(item: Omit<CartItem, 'quantity'>) {
    dispatch({ type: 'ADD_ITEM', payload: item });
    dispatch({ type: 'OPEN_CART' });
  }

  function removeItem(slug: string, size: string) {
    dispatch({ type: 'REMOVE_ITEM', payload: { slug, size } });
  }

  function updateQuantity(slug: string, size: string, quantity: number) {
    if (quantity < 1) {
      removeItem(slug, size);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { slug, size, quantity } });
    }
  }

  function openCart() {
    dispatch({ type: 'OPEN_CART' });
  }

  function closeCart() {
    dispatch({ type: 'CLOSE_CART' });
  }

  function clearCart() {
    dispatch({ type: 'CLEAR_CART' });
  }

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);

  return {
    items: state.items,
    isOpen: state.isOpen,
    totalItems,
    addItem,
    removeItem,
    updateQuantity,
    openCart,
    closeCart,
    clearCart,
  };
}
