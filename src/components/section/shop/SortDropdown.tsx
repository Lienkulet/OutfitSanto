'use client';

import { useState, useRef, useEffect } from 'react';
import Button from '@/components/ui/Button';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon';

interface SortOption {
  label: string;
  value: string;
}

interface SortDropdownProps {
  options: SortOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({ options, value, onChange }: SortDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = options.find((o) => o.value === value)?.label ?? options[0].label;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative shrink-0">
      <Button
        active={open}
        onClick={() => setOpen((v) => !v)}
        className="px-4 py-2 text-[10px] tracking-[0.2em]"
      >
        <div className="flex items-center gap-2.5">
          {current}
          <ChevronDownIcon
            size={10}
            className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
          />
        </div>
      </Button>

      {/* Dropdown panel */}
      <div
        className="absolute right-0 top-full z-50 mt-1 min-w-full overflow-hidden transition-all duration-200"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-6px)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <div
          className="
            border
            border-[oklch(0.52_0.27_325/0.35)]
            bg-[oklch(0.07_0.028_305/0.98)]
            backdrop-blur-sm
          "
        >
          {options.map((option) => {
            const isActive = option.value === value;
            return (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-6
                  border-none
                  bg-transparent
                  px-5
                  py-3
                  text-left
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  transition-colors
                  duration-150
                  cursor-pointer
                  font-cinzel
                  whitespace-nowrap
                "
                style={{ color: isActive ? 'var(--text)' : 'oklch(0.58 0.018 50)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = 'oklch(0.52 0.27 325 / 0.07)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = 'transparent')
                }
              >
                {option.label}
                {isActive && (
                  <span
                    className="size-1 shrink-0 rounded-full"
                    style={{ background: 'var(--magenta)' }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
