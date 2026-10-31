/**
 * Shared Framer Motion variants + reusable motion primitives.
 * Centralised so every section animates with one consistent motion language.
 */

/** Viewport-once reveal, gentle rise + fade. */
export const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.09,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/** Slight scale-in for cards and badges. */
export const popIn = {
  hidden: { opacity: 0, scale: 0.92, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/** Slide in from the side (direction: 1 = right, -1 = left). */
export const slideX = {
  hidden: (dir = 1) => ({ opacity: 0, x: 60 * dir }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Standard viewport config used by all sections. */
export const viewportOnce = { once: true, amount: 0.18 };

/** Stagger container for word/line reveals. */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
