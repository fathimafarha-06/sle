import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { CONTACT } from '../data/site.js';
import { staggerContainer, staggerItem } from '../lib/motion.js';
import ElevatorVisual from './ElevatorVisual.jsx';

const WORDS = ['Elevating', 'Safety', '&', 'Reliability'];

/**
 * High-impact hero — kinetic headline, dual animated CTAs,
 * trust chips and a living elevator-shaft visual.
 */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-14 pb-24 sm:pt-20 lg:pt-24">
      {/* Drifting blueprint grid */}
      <div aria-hidden="true" className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" />
      {/* Giant watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-[-4%] select-none text-[22vw] font-extrabold leading-none text-white/[0.025] lg:text-[16vw]"
      >
        LIFT
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        {/* ---------- Copy ---------- */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={staggerItem} className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-sky-glow/25 bg-sky-glow/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-glow">
            <Sparkles className="h-3.5 w-3.5" />
            UAE's Trusted Lift &amp; Escalator Experts
          </motion.div>

          <h1 className="text-[2.6rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]">
            {WORDS.map((word, i) => (
              <motion.span
                key={word + i}
                custom={i}
                variants={staggerItem}
                className={`inline-block ${word === 'Safety' ? 'text-gradient-brand' : ''}`}
              >
                {word}&nbsp;
              </motion.span>
            ))}
            <motion.span
              custom={WORDS.length}
              variants={staggerItem}
              className="block bg-gradient-to-r from-royal-400 via-sky-glow to-royal-300 bg-clip-text text-transparent"
            >
              Across the UAE.
            </motion.span>
          </h1>

          <motion.p variants={staggerItem} className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Expert <strong className="font-semibold text-white">lift &amp; escalator repair</strong>, preventive
            <strong className="font-semibold text-white"> AMC maintenance</strong>, full
            <strong className="font-semibold text-white"> modernization</strong> and rapid
            <strong className="font-semibold text-white"> 24/7 emergency rescue</strong> — delivered by certified
            engineers who keep the UAE moving, safely.
          </motion.p>

          {/* Dual animated CTAs */}
          <motion.div variants={staggerItem} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="btn-shine group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-royal-600 to-royal-500 px-7 py-4 text-sm font-bold text-white shadow-[0_18px_45px_-16px_rgb(37_71_232_/0.9)] transition-all duration-400 hover:scale-[1.03] hover:shadow-[0_22px_60px_-16px_rgb(56_189_248_/0.7)]"
            >
              <ShieldCheck className="h-5 w-5" />
              Book Emergency Service
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-400 hover:scale-[1.03] hover:border-sky-glow/50 hover:bg-sky-glow/10"
            >
              <Clock3 className="h-5 w-5 text-sky-glow" />
              Explore AMC Plans
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </motion.div>

          {/* Trust chips */}
          <motion.ul variants={staggerItem} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-400 sm:text-sm">
            <li className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Response in &lt; 30 minutes
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-sky-glow" />
              Civil Defense aligned
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-glow" />
              {CONTACT.coverage}
            </li>
          </motion.ul>
        </motion.div>

        {/* ---------- Living elevator visual ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[430px]"
        >
          <ElevatorVisual />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#simulator"
        aria-label="Scroll to Elevator Simulator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 transition-colors hover:text-sky-glow lg:flex"
      >
        Discover
        <ChevronDown className="animate-scroll-hint h-4 w-4" />
      </motion.a>
    </section>
  );
}