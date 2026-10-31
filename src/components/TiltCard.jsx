import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Glassmorphism card with interactive 3D tilt + cursor-tracking glow.
 * Pure Framer Motion springs — GPU friendly, zero lag.
 */
export default function TiltCard({ children, className = '', intensity = 10, ...props }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity]);

  // Cursor position for the radial highlight
  const glowOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0, 1]);
  const glowBackground = useTransform(
    [mouseXSpring, mouseYSpring],
    ([mx, my]) =>
      `radial-gradient(260px circle at ${(mx + 0.5) * 100}% ${(my + 0.5) * 100}%, rgb(56 189 248 / 0.16), transparent 65%)`
  );

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: 'preserve-3d',
        perspective: 900,
      }}
      className={`card-hover-lift relative ${className}`}
      {...props}
    >
      {/* cursor-following highlight */}
      <motion.span
        aria-hidden="true"
        style={{
          background: glowBackground,
          opacity: glowOpacity,
        }}
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
      />
      <div className="relative z-10 h-full" style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  );
}
