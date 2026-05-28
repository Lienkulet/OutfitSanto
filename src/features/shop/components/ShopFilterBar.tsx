'use client';

import Button from '@/components/ui/Button';
import SortDropdown from '@/components/section/shop/SortDropdown';
import { FILTERS, SORT_OPTIONS } from '@/features/shop/hooks/useShopFilters';
import { Category } from '@/data/products';

interface ShopFilterBarProps {
  activeFilter: 'all' | Category;
  sort: string;
  count: number;
  onFilter: (value: 'all' | Category) => void;
  onSort: (value: string) => void;
}

export default function ShopFilterBar({
  activeFilter,
  sort,
  count,
  onFilter,
  onSort,
}: ShopFilterBarProps) {
  return (
    <div
      className="
        sticky top-[79px] z-40
        border-b border-[oklch(0.16_0.05_310)]
        bg-[oklch(0.055_0.028_305/0.97)]
        backdrop-blur-sm
      "
    >
      <div className="flex h-15 items-center justify-between gap-6 px-6 md:px-15">
        <div className="flex shrink-0 gap-0.5">
          {FILTERS.map(({ label, value }) => (
            <Button
              key={value}
              active={activeFilter === value}
              onClick={() => onFilter(value)}
              className="px-5 py-2 text-[10px] tracking-[0.28em]"
            >
              {label}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <span className="hidden text-[11px] italic text-(--text-muted) font-cormorant sm:block">
            {count} pieces
          </span>
          <SortDropdown options={SORT_OPTIONS} value={sort} onChange={onSort} />
        </div>
      </div>
    </div>
  );
}
