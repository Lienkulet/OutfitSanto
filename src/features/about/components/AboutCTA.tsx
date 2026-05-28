'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function AboutCTA() {
  return (
    <section className="border-t border-[oklch(0.16_0.05_310)] bg-[oklch(0.055_0.030_305)] px-6 py-[120px] text-center md:px-15">
      <motion.div
        variants={staggerContainer(0.18)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="flex flex-col items-center gap-10"
      >
        <motion.p
          variants={fadeUp}
          className="mx-auto max-w-160 font-cormorant text-[clamp(24px,4vw,52px)] font-light italic leading-[1.4] text-(--text)"
        >
          You&apos;ve read the story.<br />
          Now{' '}
          <em className="not-italic text-(--magenta-bright)">wear it.</em>
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button href="/shop" filled>Shop the Collection</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
