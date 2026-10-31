import { motion } from 'framer-motion';
import {
  Boxes,
  ClipboardCheck,
  HardHat,
  Headset,
  ShieldAlert,
  Timer,
  Wrench,
} from 'lucide-react';
import { WHY_US } from '../data/site.js';
import { fadeUp, viewportOnce } from '../lib/motion.js';
import TiltCard from './TiltCard.jsx';

const ICONS = { Timer, HardHat, ClipboardCheck, ShieldAlert, Boxes, Headset };

/**
 * Why Us — differentiators with tilt cards and a side feature panel.
 */
export default function WhyUs() {
  return (
    <section id="why-us" className="relative scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* ---------- Sticky side panel ---------- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-royal-400/30 bg-royal-600/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-royal-300">
              <Wrench className="h-3.5 w-3.5" />
              Why Step Less
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Six Reasons Buildings
              <span className="block text-gradient-blue">Choose Us &amp; Stay.</span>
            </h2>
            <p className="mt-5 text-slate-400 sm:text-lg">
              Maintenance is a promise you renew every month. Here is exactly how we keep
              earning it — from our first site survey to every emergency call-out after.
            </p>

            <a
              href="#contact"
              className="btn-shine mt-8 inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-royal-600 to-royal-500 px-7 py-4 text-sm font-bold text-white shadow-[0_18px_45px_-16px_rgb(37_71_232_/0.9)] transition-transform duration-300 hover:scale-[1.03]"
            >
              Request a Free Site Survey
            </a>
          </motion.div>

          {/* ---------- Feature grid ---------- */}
          <div className="grid gap-5 sm:grid-cols-2">
            {WHY_US.map((item, i) => {
              const Icon = ICONS[item.icon] ?? Wrench;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  <TiltCard className="h-full" intensity={8}>
                    <div className="glass group flex h-full flex-col rounded-3xl p-6">
                      <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal-600/70 to-ink-700 ring-1 ring-white/10 transition-shadow duration-500 group-hover:shadow-[0_0_30px_-8px_rgb(56_189_248_/0.9)]">
                        <Icon className="h-6 w-6 text-sky-glow" />
                      </span>
                      <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
