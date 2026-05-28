'use client';

import { createContext, useReducer, useEffect, ReactNode } from 'react';
import { CartState, CartAction, CartItem } from '../types';
import { cartReducer, initialState } from './cartReducer';

const STORAGE_KEY = 'outfitsanto_cart';

type CartContextValue = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Restore from localStorage after hydration (client only — avoids SSR mismatch)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { items?: CartItem[] };
      if (Array.isArray(parsed.items) && parsed.items.length > 0) {
        dispatch({ type: 'RESTORE_CART', payload: parsed.items });
      }
    } catch {
      // corrupted storage — ignore
    }
  }, []);

  // Persist items on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
  }, [state.items]);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}
