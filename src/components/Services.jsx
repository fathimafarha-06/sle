import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Cog,
  Siren,
  ShieldCheck,
  TrendingUp,
  Wrench,
} from 'lucide-react';
import { SERVICES } from '../data/site.js';
import { fadeUp, viewportOnce } from '../lib/motion.js';
import TiltCard from './TiltCard.jsx';

const ICONS = {
  Siren,
  Wrench,
  ShieldCheck,
  TrendingUp,
  Cog,
  BadgeCheck,
  Boxes,
};

/**
 * Core services grid — glass cards with 3D tilt, glow edges and tags.
 */
export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-royal-400/30 bg-royal-600/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-royal-300">
            <Cog className="h-3.5 w-3.5" />
            What We Do
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Complete <span className="text-gradient-blue">Lift &amp; Escalator Care</span>
          </h2>
          <p className="mt-4 text-slate-400 sm:text-lg">
            From a single emergency call-out to a full modernization program — one accountable
            partner for every stage of your vertical transport lifecycle.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Wrench;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <TiltCard className="h-full">
                  <div className="glass group relative flex h-full flex-col rounded-3xl p-7">
                    <span className="pointer-events-none absolute right-6 top-6 text-[10px] font-black tracking-widest text-white/5">
                      0{i + 1}
                    </span>

                    <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-royal-600/80 to-ink-700 ring-1 ring-white/10 transition-shadow duration-500 group-hover:shadow-[0_0_35px_-8px_rgb(56_189_248_/0.9)]">
                      <Icon className="h-7 w-7 text-sky-glow" />
                    </span>

                    <h3 className="mb-2 text-lg font-bold text-white">{service.title}</h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">{service.desc}</p>

                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-sky-glow/25 bg-sky-glow/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-glow">
                        {service.tag}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-glow" />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
