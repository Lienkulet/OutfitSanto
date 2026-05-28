import { useState, useMemo } from 'react';
import { InterfaceProduct, Category } from '@/data/products';

export const FILTERS: { label: string; value: 'all' | Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Hoodies', value: 'hoodie' },
  { label: 'Tees', value: 'tee' },
  { label: 'Jackets', value: 'jacket' },
  { label: 'Bottoms', value: 'bottom' },
];

export const SORT_OPTIONS = [
  { label: 'Sort: Newest', value: 'newest' },
  { label: 'Sort: Price High', value: 'price-asc' },
  { label: 'Sort: Price Low', value: 'price-desc' },
];

const PAGE_SIZE = 12;

export function useShopFilters(products: InterfaceProduct[]) {
  const [activeFilter, setActiveFilter] = useState<'all' | Category>('all');
  const [sort, setSort] = useState('newest');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    let list =
      activeFilter === 'all'
        ? products
        : products.filter((p) => p.category === activeFilter);

    if (sort === 'price-asc') {
      list = [...list].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sort === 'price-desc') {
      list = [...list].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    return list;
  }, [products, activeFilter, sort]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function applyFilter(value: 'all' | Category) {
    setActiveFilter(value);
    setVisibleCount(PAGE_SIZE);
  }

  function loadMore() {
    setVisibleCount((n) => n + PAGE_SIZE / 2);
  }

  return {
    filtered,
    visible,
    hasMore,
    activeFilter,
    sort,
    applyFilter,
    setSort,
    loadMore,
  };
}
