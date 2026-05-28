import type { Variants } from 'framer-motion';

// Cinematic easing — feels luxurious, not bouncy
export const ease = [0.76, 0, 0.24, 1] as const;
export const easeSoft = [0.4, 0, 0.2, 1] as const;

// Fade up — primary reveal for body text, cards, sections
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease },
  },
};

// Fade in — subtle opacity only, for decorative elements
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeSoft },
  },
};

// Slide up — stronger travel for hero elements
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.88, ease },
  },
};

// Scale in — for watermarks, decorative large text
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease },
  },
};

// Stagger container — wrap a list of `fadeUp` children
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});
