'use client';

import { useCart } from '../hooks/useCart';

export default function CartTrigger() {
  const { totalItems, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      className="font-cinzel text-[10.5px] tracking-[0.22em] transition-colors duration-300"
      style={{ color: 'var(--text-muted)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--magenta-bright)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--text-muted)';
      }}
      aria-label={`Open cart, ${totalItems} items`}
    >
      Cart&nbsp;({totalItems})
    </button>
  );
}
