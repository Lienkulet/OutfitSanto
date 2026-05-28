'use client';

import { useEffect } from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';
import CartEmpty from './CartEmpty';
import CartSummary from './CartSummary';
import Divider from '@/components/ui/Divider';

export default function CartDrawer() {
  const { items, isOpen, closeCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-200 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-200 flex w-full max-w-[440px] flex-col bg-(--bg) shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <div>
            <p className="font-cinzel text-[9px] uppercase tracking-[0.42em] text-(--magenta)">
              Your
            </p>
            <h2 className="font-cinzel-decorative text-[20px] font-bold leading-none tracking-[0.04em] text-(--text)">
              Cart
            </h2>
          </div>

          <button
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center text-(--text-muted) transition-colors hover:text-(--text)"
            aria-label="Close cart"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          </button>
        </div>

        <Divider />

        {/* Items */}
        {items.length === 0 ? (
          <CartEmpty />
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              {items.map((item, idx) => (
                <div key={`${item.slug}-${item.size}`}>
                  <CartItem item={item} />
                  {idx < items.length - 1 && <Divider />}
                </div>
              ))}
            </div>

            <CartSummary />
          </>
        )}
      </div>
    </>
  );
}
