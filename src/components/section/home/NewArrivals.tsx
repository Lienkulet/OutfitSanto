'use client';

import { motion } from 'framer-motion';
import ProductCard from '@/components/cards/ProductCard';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { products } from '@/data/products';
import { fadeUp, staggerContainer } from '@/lib/motion';

const NewArrivalsSection = () => {
  const newProducts = products.filter((p) => p.badge === 'New').slice(0, 3);

  return (
    <section className="bg-[oklch(0.08_0.024_305)] px-6 py-25 md:px-15">
      {/* Header */}
      <motion.div
        className="mb-15 text-center"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.div variants={fadeUp} className="mb-3.5">
          <SectionEyebrow label="Just Dropped" />
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-cinzel-decorative text-[clamp(24px,3.2vw,44px)] font-bold tracking-[0.08em] text-(--text)"
        >
          New Arrivals
        </motion.h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="mx-auto grid max-w-330 grid-cols-2 gap-3.5 lg:grid-cols-3 lg:gap-7"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {newProducts.map((product) => (
          <motion.div key={product.slug} variants={fadeUp}>
            <ProductCard
              slug={product.slug}
              name={product.name}
              sub={product.sub}
              price={product.price}
              badge={product.badge}
              img={product.img}
              sizes={product.sizes}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default NewArrivalsSection;
