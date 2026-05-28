'use client';

import HeartIcon from '@/components/icons/HeartIcon';

interface ProductActionsProps {
  onAddToCart: () => void;
  disabled?: boolean;
}

export default function ProductActions({ onAddToCart, disabled }: ProductActionsProps) {
  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={onAddToCart}
        disabled={disabled}
        className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden border border-(--magenta) bg-(--magenta) py-4 font-cinzel text-[10.5px] font-semibold uppercase tracking-[0.32em] text-(--text) transition-all duration-500 hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span className="pointer-events-none absolute inset-0.75 border border-(--border-light) transition-colors duration-500 group-hover:border-(--magenta-dim) group-disabled:border-transparent" />
        <span className="relative z-10">
          {disabled ? 'Select a Size' : 'Add to Cart'}
        </span>
      </button>

      <button className="flex w-full cursor-pointer items-center justify-center gap-2.5 border border-[oklch(1_0_0/0.14)] py-3.5 font-cinzel text-[10.5px] font-semibold uppercase tracking-[0.28em] text-(--text-muted) transition-all duration-300 hover:border-(--magenta-dim) hover:text-(--text)">
        <HeartIcon />
        Save to Wishlist
      </button>
    </div>
  );
}
