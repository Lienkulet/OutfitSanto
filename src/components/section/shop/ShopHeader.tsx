'use client';

import { motion } from 'framer-motion';
import { fadeIn, fadeUp, staggerContainer } from '@/lib/motion';

export default function ShopHeader() {
  return (
    <motion.div
      className="flex items-end justify-between border-b border-[oklch(0.16_0.05_310)] px-6 pb-13 pt-18 md:px-15"
      variants={staggerContainer(0.15, 0.1)}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.div
          variants={fadeIn}
          className="mb-2.5 font-cinzel text-[10px] font-semibold uppercase tracking-[0.4em] text-(--magenta)"
        >
          SS 2026
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="font-cinzel-decorative text-[clamp(28px,4vw,56px)] font-bold leading-none tracking-[0.06em] text-(--text)"
        >
          The Collection
        </motion.h1>
      </div>
    </motion.div>
  );
}
