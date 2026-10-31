import { motion } from 'framer-motion';
import { Landmark, ShieldCheck, Star } from 'lucide-react';
import { CONTACT, TRUST_STATS } from '../data/site.js';
import { fadeUp, viewportOnce } from '../lib/motion.js';
import Counter from './Counter.jsx';

/**
 * Trust band — animated counters + compliance assurance strip.
 */
export default function TrustStats() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* gradient band */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-royal-950/60 to-ink-950"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-glow/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-sky-glow/50 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Counters */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {TRUST_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="glass card-hover-lift rounded-3xl p-6 text-center sm:p-8"
            >
              <p className="bg-gradient-to-r from-white via-royal-200 to-sky-glow bg-clip-text text-4xl font-extrabold text-transparent drop-shadow-[0_0_24px_rgb(56_189_248_/0.25)] sm:text-5xl">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-widest text-white">{stat.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom assurance strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-semibold uppercase tracking-widest text-slate-500 sm:text-sm"
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" /> Civil Defense Standards
          </span>
          <span className="flex items-center gap-2">
            <Star className="h-4 w-4 text-sky-glow" /> 5-Star Service Focus
          </span>
          <span className="flex items-center gap-2">
            <Landmark className="h-4 w-4 text-royal-400" /> {CONTACT.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}