'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { fadeUp, fadeIn, staggerContainer } from '@/lib/motion';

const NewsletterSection = () => {
  return (
    <section className="relative border-t border-[oklch(0.16_0.05_310)] px-6 py-20 text-center md:px-15">
      <motion.div
        variants={staggerContainer(0.16)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.h3
          variants={fadeUp}
          className="mb-3 font-cinzel-decorative text-[clamp(20px,2.8vw,36px)] font-bold tracking-[0.08em] text-(--text)"
        >
          Join the Congregation
        </motion.h3>

        <motion.p
          variants={fadeUp}
          className="mb-10 font-cormorant text-[18px] font-light italic tracking-[0.04em] text-(--text-muted)"
        >
          Early access. Exclusive drops. Sacred discounts.
        </motion.p>

        <motion.form
          variants={fadeIn}
          className="mx-auto flex max-w-115 flex-col md:flex-row"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 border border-b-0 border-[oklch(0.18_0.055_310)] bg-[oklch(0.06_0.03_305)] px-5 py-3.5 font-cormorant text-[15px] italic text-(--text) outline-none placeholder:text-(--text-muted) md:border-b md:border-r-0"
          />
          <Button
            type="submit"
            className="px-7 py-3.5 font-cinzel text-[10px] font-semibold uppercase tracking-[0.28em] text-(--text) transition-all"
            filled
          >
            Subscribe
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
