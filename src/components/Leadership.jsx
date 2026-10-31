import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Building2,
  Quote,
  ShieldCheck,
  TrendingUp,
  UserRound,
} from 'lucide-react';
import { COMPANY, CONTACT } from '../data/site.js';
import { fadeUp, viewportOnce } from '../lib/motion.js';

/**
 * About / Leadership — Managing Director Ahamed Musammil.
 * Official founder photo with an executive glass identity card.
 */
export default function Leadership() {
  const [imgFailed, setImgFailed] = useState(false);

  const badges = [
    { icon: Award, text: 'Managing Director' },
    { icon: ShieldCheck, text: 'UAE Safety Compliance' },
    { icon: TrendingUp, text: 'Innovate • Build • Grow' },
  ];

  return (
    <section id="about" className="relative scroll-mt-28 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-royal-700/15 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* ---------- Founder portrait ---------- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div className="glass-strong relative overflow-hidden rounded-[30px] p-3 shadow-[0_45px_120px_-45px_rgb(37_71_232_/0.85)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-ink-800">
                {imgFailed ? (
                  <div className="grid h-full w-full place-items-center bg-gradient-to-br from-royal-900 via-ink-800 to-ink-900">
                    <div className="text-center">
                      <UserRound className="mx-auto h-20 w-20 text-royal-300/70" />
                      <p className="mt-4 px-6 text-sm font-semibold text-royal-200">
                        Ahamed Musammil
                        <span className="block text-xs font-normal text-slate-400">Managing Director</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={COMPANY.founder}
                    alt="Ahamed Musammil — Managing Director, Step Less Elevators & Escalators L.L.C"
                    loading="lazy"
                    decoding="async"
                    onError={() => setImgFailed(true)}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
                  />
                )}
                {/* cinematic overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-royal-600/15 to-transparent mix-blend-overlay" />

                {/* floating identity plate */}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-ink-950/70 p-4 backdrop-blur-xl">
                  <p className="text-lg font-extrabold leading-tight text-white">Ahamed Musammil</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-glow">
                    Managing Director &amp; Founder
                  </p>
                </div>
              </div>
            </div>

            {/* accent frame corner */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-tr-[28px] border-r-2 border-t-2 border-sky-glow/50"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -left-3 h-20 w-20 rounded-bl-[28px] border-b-2 border-l-2 border-royal-400/50"
            />
          </motion.div>

          {/* ---------- Leadership copy ---------- */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-royal-400/30 bg-royal-600/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-royal-300">
              <Building2 className="h-3.5 w-3.5" />
              About &amp; Leadership
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Led by Experience.
              <span className="block text-gradient-blue">Built on Trust.</span>
            </h2>

            <p className="mt-6 text-slate-300 sm:text-lg">
              Founded and led by <strong className="font-semibold text-white">Ahamed Musammil, Managing Director</strong>,
              Step Less Elevators &amp; Escalators L.L.C — O.P.C. has grown into a trusted name in
              professional lift and escalator care across the United Arab Emirates.
            </p>

            <p className="mt-4 text-slate-400">
              With extensive hands-on industry experience, Ahamed leads a team of certified engineers
              committed to engineering excellence, honest workmanship and uncompromising safety.
              From Dubai's high-rises to Abu Dhabi's commercial towers and Sharjah's residential
              communities, our clients rely on one promise:{" "}
              <em className="not-italic font-semibold text-white">
                every lift we touch is safer than we found it.
              </em>
            </p>

            {/* MD quote */}
            <blockquote className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Quote className="mb-3 h-6 w-6 text-sky-glow" />
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                “People's lives travel in our lifts every single day. That responsibility is
                why we invest in certified talent, genuine parts and rapid response — so building
                owners never have to worry, and passengers never feel a thing.”
              </p>
              <footer className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-sky-glow">
                Ahamed Musammil — {COMPANY.tagline}
              </footer>
            </blockquote>

            {/* Badge row */}
            <ul className="mt-8 flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-sky-glow/40 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5 text-sky-glow" />
                  {text}
                </li>
              ))}
            </ul>

            <p className="mt-7 text-xs uppercase tracking-[0.2em] text-slate-500">
              Serving {CONTACT.coverage}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
