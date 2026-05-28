'use client';

import { motion } from 'framer-motion';
import CollectionCard from '@/components/cards/CollectionCard';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import { fadeUp, staggerContainer } from '@/lib/motion';

const collections = [
  { season: 'SS 2026', name: 'The Sacred', ph: 'editorial shot\nfull look', img: '/products/hoodie2.png' },
  { season: 'Limited', name: 'Street Psalms', ph: 'editorial shot\nstreetwear', img: '/products/tshirt2.jpeg' },
  { season: 'Capsule', name: 'Nocturne', ph: 'editorial shot\ncapsule', img: '/products/pants.png' },
];

const CollectionsSection = () => {
  return (
    <section className="bg-[oklch(0.055_0.030_305)] px-6 py-25 md:px-15">
      {/* Header */}
      <motion.div
        className="mb-15 text-center"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.div variants={fadeUp} className="mb-3.5">
          <SectionEyebrow label="Shop By Collection" />
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-cinzel-decorative text-[clamp(24px,3.2vw,44px)] font-bold tracking-[0.08em] text-(--text)"
        >
          The Collections
        </motion.h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="mx-auto grid max-w-330 grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr_1fr]"
        variants={staggerContainer(0.14)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {collections.map((collection) => (
          <motion.div key={collection.name} variants={fadeUp}>
            <CollectionCard
              season={collection.season}
              name={collection.name}
              ph={collection.ph}
              img={collection.img}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CollectionsSection;
