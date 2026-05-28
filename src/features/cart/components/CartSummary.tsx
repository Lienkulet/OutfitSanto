'use client';

import { useCart } from '../hooks/useCart';
import { formatTotal } from '../utils/price';
import Button from '@/components/ui/Button';

export default function CartSummary() {
  const { items, clearCart } = useCart();
  const total = formatTotal(items);

  return (
    <div className="border-t border-[oklch(0.16_0.05_310)] px-6 py-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-cinzel text-[10px] uppercase tracking-[0.3em] text-(--text-muted)">
          Subtotal
        </span>
        <span className="font-cormorant text-[20px] font-semibold text-(--text)">{total}</span>
      </div>

      <p className="mb-5 text-center font-cormorant text-[12px] italic text-(--text-muted)">
        Shipping & taxes calculated at checkout
      </p>

      <Button filled className="w-full justify-center">
        Proceed to Checkout
      </Button>

      <button
        onClick={clearCart}
        className="mt-3 w-full font-cinzel text-[9px] uppercase tracking-[0.28em] text-(--text-muted) transition-colors hover:text-(--magenta)"
      >
        Clear Cart
      </button>
    </div>
  );
}
