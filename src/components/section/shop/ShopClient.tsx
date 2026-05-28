'use client';

import { InterfaceProduct } from '@/data/products';
import { useShopFilters } from '@/features/shop/hooks/useShopFilters';
import ShopFilterBar from '@/features/shop/components/ShopFilterBar';
import ShopGrid from '@/features/shop/components/ShopGrid';

interface ShopClientProps {
  products: InterfaceProduct[];
}

export default function ShopClient({ products }: ShopClientProps) {
  const { visible, filtered, hasMore, activeFilter, sort, applyFilter, setSort, loadMore } =
    useShopFilters(products);

  return (
    <>
      <ShopFilterBar
        activeFilter={activeFilter}
        sort={sort}
        count={filtered.length}
        onFilter={applyFilter}
        onSort={setSort}
      />
      <ShopGrid products={visible} hasMore={hasMore} onLoadMore={loadMore} />
    </>
  );
}
