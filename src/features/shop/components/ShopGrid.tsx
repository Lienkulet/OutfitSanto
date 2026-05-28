'use client';

import { motion } from 'framer-motion';
import ProductCard from '@/components/cards/ProductCard';
import EmptyState from '@/components/ui/EmptyState';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';
import { InterfaceProduct } from '@/data/products';
import { fadeUp, staggerContainer } from '@/lib/motion';

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
      <motion.div
        className="my-10 grid grid-cols-2 gap-5 bg-[oklch(0.04_0.025_305)] p-0.5 lg:grid-cols-3"
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div key={product.slug} variants={fadeUp}>
            <ProductCard
              slug={product.slug}
              name={product.name}
              sub={product.sub}
              price={product.price}
              badge={product.badge}
              img={product.img}
            />
          </motion.div>
        ))}
      </motion.div>

      {hasMore && (
        <motion.div
          className="py-18 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button onClick={onLoadMore} filled className="px-12 py-4 text-[11px]">
            Load More
          </Button>
        </motion.div>
      )}
    </Container>
  );
}
