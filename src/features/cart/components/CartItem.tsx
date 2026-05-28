'use client';

import Image from 'next/image';
import type { CartItem as CartItemType } from '../types';
import { useCart } from '../hooks/useCart';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="flex gap-4 py-5">
      <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-[oklch(0.12_0.04_305)]">
        <Image src={item.img} alt={item.name} fill className="object-cover" sizes="80px" />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-cinzel text-[11px] font-semibold uppercase tracking-[0.18em] text-(--text)">
              {item.name}
            </p>
            <p className="mt-0.5 font-cinzel text-[10px] tracking-[0.14em] text-(--text-muted)">
              {item.size}
            </p>
          </div>
          <p className="font-cormorant text-[15px] font-semibold text-(--text)">
            {item.price}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0 border border-[oklch(0.22_0.05_310)]">
            <button
              onClick={() => updateQuantity(item.slug, item.size, item.quantity - 1)}
              className="flex h-7 w-7 items-center justify-center text-(--text-muted) transition-colors hover:text-(--text)"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-6 text-center font-cinzel text-[11px] text-(--text)">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.slug, item.size, item.quantity + 1)}
              className="flex h-7 w-7 items-center justify-center text-(--text-muted) transition-colors hover:text-(--text)"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeItem(item.slug, item.size)}
            className="font-cinzel text-[9px] uppercase tracking-[0.22em] text-(--text-muted) transition-colors hover:text-(--magenta)"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
