'use client';

import { motion } from 'framer-motion';
import { fadeUp, fadeIn, staggerContainer } from '@/lib/motion';

interface ProductInfoProps {
  name: string;
  sub: string;
  price: string;
  badge?: string;
}

export default function ProductInfo({ name, sub, price, badge }: ProductInfoProps) {
  return (
    <motion.div
      variants={staggerContainer(0.14, 0.1)}
      initial="hidden"
      animate="visible"
    >
      {/* Eyebrow row */}
      <motion.div variants={fadeIn} className="mb-4 flex items-center gap-3">
        <span className="font-cinzel text-[9.5px] font-semibold uppercase tracking-[0.38em] text-(--magenta)">
          {sub}
        </span>
        {badge && (
          <span className="bg-(--magenta) px-2 py-0.5 font-cinzel text-[7.5px] font-semibold uppercase tracking-[0.26em] text-(--text)">
            {badge}
          </span>
        )}
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={fadeUp}
        className="mb-5 font-cinzel-decorative text-[clamp(26px,3.6vw,48px)] font-bold leading-[1.08] tracking-[0.04em] text-(--text)"
      >
        {name}
      </motion.h1>

      {/* Price */}
      <motion.div
        variants={fadeIn}
        className="font-cinzel text-[22px] font-semibold tracking-[0.06em] text-(--magenta-bright)"
      >
        {price}
      </motion.div>
    </motion.div>
  );
}
