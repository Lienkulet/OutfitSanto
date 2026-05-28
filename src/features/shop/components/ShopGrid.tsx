import ProductCard from '@/components/cards/ProductCard';
import EmptyState from '@/components/ui/EmptyState';
import Button from '@/components/ui/Button';
import { InterfaceProduct } from '@/data/products';
import Container from '@/components/layout/Container';

interface ShopGridProps {
  products: InterfaceProduct[];
  hasMore: boolean;
  onLoadMore: () => void;
}

export default function ShopGrid({ products, hasMore, onLoadMore }: ShopGridProps) {
  if (products.length === 0) {
    return <EmptyState message="No pieces in this category yet." />;
  }

  return (
    <Container>
      <div className="my-10 grid grid-cols-2 gap-5 bg-[oklch(0.04_0.025_305)] p-0.5 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            slug={product.slug}
            name={product.name}
            sub={product.sub}
            price={product.price}
            badge={product.badge}
            img={product.img}
          />
        ))}
      </div>

      {hasMore && (
        <div className="py-18 text-center">
          <Button onClick={onLoadMore} filled className="px-12 py-4 text-[11px]">
            Load More
          </Button>
        </div>
      )}
    </Container>
  );
}
