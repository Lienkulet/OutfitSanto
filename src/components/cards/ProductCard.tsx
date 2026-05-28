'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { useCart } from '@/features/cart/hooks/useCart';

interface ProductCardProps {
  name: string;
  sub: string;
  slug?: string;
  price: string;
  badge?: string;
  img: string;
  sizes?: string[];
}

export default function ProductCard({ name, sub, slug, price, badge, img, sizes }: ProductCardProps) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleQuickAdd(size: string) {
    addItem({ slug: slug ?? name, name, img, price, size });
    setAdded(true);
    setPickerOpen(false);
    setTimeout(() => setAdded(false), 1800);
  }

  const overlayVisible = pickerOpen || added;

  return (
    <div className="group cursor-pointer">
      <div className="relative mb-4.5 aspect-3/4 overflow-hidden bg-[oklch(0.09_0.024_305)]">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {badge && (
          <div className="absolute left-3 top-3 bg-(--magenta) px-2.5 py-1 font-cinzel text-[8px] font-semibold uppercase tracking-[0.25em] text-(--text)">
            {badge}
          </div>
        )}

        {/* Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-[oklch(0.04_0.03_305/0.72)] transition-opacity duration-300 ${
            overlayVisible ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          {added ? (
            <p className="font-cinzel text-[9.5px] uppercase tracking-[0.32em] text-(--magenta-bright)">
              Added ✓
            </p>
          ) : pickerOpen ? (
            <div className="flex flex-col items-center gap-3 px-4">
              <p className="font-cinzel text-[8.5px] uppercase tracking-[0.35em] text-(--text-muted)">
                Select Size
              </p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleQuickAdd(size)}
                    className="h-8 min-w-8 border border-[oklch(0.93_0.012_50/0.45)] px-2.5 font-cinzel text-[9px] font-semibold uppercase tracking-[0.14em] text-(--text) transition-colors duration-200 hover:border-(--magenta) hover:bg-[oklch(0.52_0.27_325/0.15)]"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setPickerOpen(false)}
                className="font-cinzel text-[8px] uppercase tracking-[0.25em] text-(--text-muted) hover:text-(--text)"
              >
                Cancel
              </button>
            </div>
          ) : sizes && sizes.length > 0 ? (
            <button
              onClick={() => setPickerOpen(true)}
              className="border border-[oklch(0.93_0.012_50/0.55)] px-6.5 py-3 font-cinzel text-[9.5px] font-semibold uppercase tracking-[0.28em] text-(--text) transition-all duration-200 hover:border-(--magenta) hover:text-(--magenta-bright)"
            >
              Quick Add
            </button>
          ) : slug ? (
            <Button href={`/products/${slug}`}>View Product</Button>
          ) : null}
        </div>
      </div>

      <div className="mb-1.5 font-cinzel text-[11.5px] font-semibold uppercase tracking-[0.18em] text-(--text)">
        {name}
      </div>
      <div className="mb-1.75 font-cormorant text-[13px] italic text-(--text-muted)">{sub}</div>
      <div className="font-cinzel text-[13px] font-semibold tracking-[0.06em] text-(--magenta-bright)">
        {price}
      </div>
    </div>
  );
}
