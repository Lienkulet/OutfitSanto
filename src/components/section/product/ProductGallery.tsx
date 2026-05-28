'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductGalleryProps {
  name: string;
  images: string[];
}

export default function ProductGallery({ name, images }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse gap-3 md:flex-row md:gap-4">
      {/* Thumbnails */}
      <div className="flex flex-row gap-2 md:flex-col md:gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative aspect-3/4 w-16 shrink-0 overflow-hidden md:w-18 cursor-pointer"
            style={{
              outline: i === active ? '1px solid oklch(0.52 0.27 325)' : '1px solid oklch(1 0 0 / 0.10)',
              outlineOffset: '0px',
            }}
          >
            <Image
              src={src}
              alt={`${name} view ${i + 1}`}
              fill
              className="object-cover transition-opacity duration-200"
              style={{ opacity: i === active ? 1 : 0.45 }}
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 overflow-hidden bg-[oklch(0.09_0.024_305)] aspect-3/4">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={name}
            fill
            priority={i === 0}
            className="object-cover transition-opacity duration-500"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
      </div>
    </div>
  );
}
