'use client';

interface SizeSelectorProps {
  sizes: string[];
  value: string | null;
  onChange: (size: string) => void;
}

export default function SizeSelector({ sizes, value, onChange }: SizeSelectorProps) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="font-cinzel text-[9.5px] font-semibold uppercase tracking-[0.3em] text-(--text)">
          Size
        </span>
        <button className="cursor-pointer font-cormorant text-[11px] italic text-(--text-muted) underline underline-offset-2 transition-colors duration-200 hover:text-(--text)">
          Size Guide
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => {
          const isActive = value === size;
          return (
            <button
              key={size}
              onClick={() => onChange(size)}
              className="relative h-10 min-w-10 cursor-pointer px-3 font-cinzel text-[10.5px] font-semibold uppercase tracking-[0.18em] transition-all duration-200"
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
