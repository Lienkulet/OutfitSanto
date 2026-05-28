'use client';

import { motion } from 'framer-motion';
import { scaleIn, fadeUp, fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-30 text-center md:px-15">
      {/* Watermark */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-cinzel-decorative font-black leading-none tracking-widest"
        style={{ fontSize: 'clamp(80px, 22vw, 320px)', color: 'oklch(0.10 0.036 310)' }}
        initial="hidden"
        animate="visible"
        variants={scaleIn}
      >
        SANTO
      </motion.span>

      <motion.div
        className="relative z-10 flex flex-col items-center"
        variants={staggerContainer(0.18, 0.3)}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeIn}
          className="mb-10 font-cinzel text-[10px] font-semibold uppercase tracking-[0.44em] text-(--magenta)"
        >
          Est. 2022 — Buenos Aires
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="max-w-4xl font-cormorant text-[clamp(28px,5.5vw,76px)] font-light italic leading-[1.35] tracking-[0.02em] text-(--text)"
          style={{ textWrap: 'pretty' } as React.CSSProperties}
        >
          We don&apos;t follow fashion.<br />
          We dress{' '}
          <em className="not-italic text-(--magenta-bright)">the sacred</em>
          <br />
          and the streets.
        </motion.h1>

        {/* Vertical rule */}
        <motion.div
          variants={fadeIn}
          className="mt-13 w-px"
          style={{ height: 80, background: 'linear-gradient(to bottom, oklch(0.36 0.20 320), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
