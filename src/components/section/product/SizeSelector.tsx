'use client';

import { useState } from 'react';

interface SizeSelectorProps {
  sizes: string[];
}

export default function SizeSelector({ sizes }: SizeSelectorProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span
          className="
            text-[9.5px]
            font-semibold
            uppercase
            tracking-[0.3em]
            text-(--text)
            font-cinzel
          "
        >
          Size
        </span>
        <button
          className="
            text-[11px]
            italic
            text-(--text-muted)
            underline
            underline-offset-2
            font-cormorant
            cursor-pointer
            hover:text-(--text)
            transition-colors
            duration-200
          "
        >
          Size Guide
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => {
          const isActive = selected === size;
          return (
            <button
              key={size}
              onClick={() => setSelected(size)}
              className="
                relative
                h-10
                min-w-10
                px-3
                text-[10.5px]
                font-semibold
                uppercase
                tracking-[0.18em]
                transition-all
                duration-200
                font-cinzel
                cursor-pointer
              "
              style={{
                color: isActive ? 'var(--text)' : 'oklch(0.58 0.018 50)',
                border: isActive
                  ? '1px solid oklch(0.52 0.27 325)'
                  : '1px solid oklch(1 0 0 / 0.14)',
                background: isActive ? 'oklch(0.52 0.27 325 / 0.10)' : 'transparent',
              }}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
