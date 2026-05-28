'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...(fadeUp.visible as object),
          transition: {
            duration: 0.72,
            ease: [0.76, 0, 0.24, 1],
            delay: delay / 1000,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
