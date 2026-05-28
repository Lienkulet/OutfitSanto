'use client';

import { motion } from 'framer-motion';
import { scaleIn, fadeUp, fadeIn, staggerContainer } from '@/lib/motion';

const ManifestoSection = () => {
  return (
    <section className="relative overflow-hidden bg-(--bg) px-6 py-32.5 text-center md:px-15">
      {/* Watermark */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-black leading-none tracking-[0.12em] text-[oklch(0.11_0.035_310)] font-cinzel-decorative"
        style={{ fontSize: 'clamp(80px, 18vw, 240px)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleIn}
      >
        SANTO
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-200"
        variants={staggerContainer(0.18, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Cross ornament */}
        <motion.div variants={fadeIn} className="mb-13 flex items-center justify-center gap-3.5 opacity-45">
          <div className="h-px w-15 bg-(--magenta-dim)" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="7" y="0" width="2" height="16" fill="oklch(0.70 0.22 330)" />
            <rect x="0" y="7" width="16" height="2" fill="oklch(0.70 0.22 330)" />
            <rect x="6" y="6" width="4" height="4" fill="oklch(0.06 0.032 305)" />
            <rect x="7" y="7" width="2" height="2" fill="oklch(0.52 0.27 325)" />
          </svg>
          <div className="h-px w-15 bg-(--magenta-dim)" />
        </motion.div>

        {/* Manifesto quote */}
        <motion.p
          variants={fadeUp}
          className="mb-11 font-cormorant text-[clamp(22px,3.6vw,50px)] font-light italic leading-[1.45] tracking-[0.02em] text-(--text)"
        >
          Dressed in darkness. Built for the streets.
          <br />
          <em className="text-(--magenta-bright)">Born sacred.</em>
        </motion.p>

        {/* Byline */}
        <motion.div
          variants={fadeIn}
          className="font-cinzel text-[10.5px] uppercase tracking-[0.35em] text-(--text-muted)"
        >
          — Outfit Santo
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ManifestoSection;
