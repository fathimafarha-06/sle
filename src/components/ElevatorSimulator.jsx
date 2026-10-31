import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Cog,
  PackageCheck,
  ShieldCheck,
  Siren,
  TrendingUp,
  Wrench,
} from 'lucide-react';
import { SIMULATOR_FLOORS } from '../data/site.js';
import { fadeUp, viewportOnce } from '../lib/motion.js';

const ICONS = { TrendingUp, PackageCheck, ShieldCheck, Siren };
const TRAVEL_PER_FLOOR = 620; // ms
const DOOR_MS = 620; // doors open delay after arrival
const CLOSE_MS = 500; // doors close before departing

/**
 * Interactive "Elevator Floor Simulator".
 * Pick a floor → the car glides there, doors open and the matching
 * service is revealed. A memorable, on-brand explainer widget.
 */
export default function ElevatorSimulator() {
  const [current, setCurrent] = useState(1); // where the car physically is
  const [target, setTarget] = useState(1); // where the car is heading
  const [status, setStatus] = useState('idle'); // idle | closing | moving | opening
  const [selected, setSelected] = useState(1);

  const timers = useRef([]);
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  useEffect(() => clearTimers, []);

  const distance = Math.abs(target - current);

  const travelTo = (floor) => {
    if (floor === current && status === 'idle') {
      setSelected(floor);
      return;
    }
    clearTimers();
    setSelected(floor);
    setTarget(floor);

    if (floor === current) {
      // Already there → just re-open doors for the reveal.
      setStatus('opening');
      timers.current.push(setTimeout(() => setStatus('idle'), DOOR_MS));
      return;
    }

    const travelMs = Math.max(TRAVEL_PER_FLOOR * distance, 700);
    setStatus('closing');
    timers.current.push(
      setTimeout(() => {
        setStatus('moving');
        timers.current.push(
          setTimeout(() => {
            setCurrent(floor);
            setStatus('opening');
            timers.current.push(setTimeout(() => setStatus('idle'), DOOR_MS));
          }, travelMs)
        );
      }, CLOSE_MS)
    );
  };

  const moving = status === 'moving' || status === 'closing';
  const arriving = status === 'opening';
  const doorsOpen = status === 'idle' && !moving;

  const activeService = useMemo(
    () => SIMULATOR_FLOORS.find((f) => f.floor === selected),
    [selected]
  );
  const ActiveIcon = ICONS[activeService.icon] ?? ShieldCheck;

  const progressPct = ((current - 1) / (SIMULATOR_FLOORS.length - 1)) * 100;

  return (
    <section id="simulator" className="relative scroll-mt-28 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-glow/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-royal-400/30 bg-royal-600/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-royal-300">
            <Cog className="h-3.5 w-3.5" />
            Interactive Experience
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            The <span className="text-gradient-blue">Elevator Floor Simulator</span>
          </h2>
          <p className="mt-4 text-slate-400 sm:text-lg">
            Press a floor button — watch the car travel, the doors open, and discover the
            service waiting on that level. Every floor is one of our core capabilities.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-14">
          {/* ------------------ SHAFT + BUTTONS ------------------ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="glass-strong mx-auto w-full max-w-[430px] rounded-[28px] p-5 shadow-[0_40px_120px_-45px_rgb(37_71_232_/0.8)] sm:p-6"
          >
            {/* Digital indicator */}
            <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-ink-950/80 px-4 py-3">
              <span
                className={`font-mono text-3xl font-black tabular-nums transition-colors duration-300 ${
                  arriving ? 'text-emerald-400 drop-shadow-[0_0_12px_rgb(52_211_153_/0.8)]' : 'text-sky-glow drop-shadow-[0_0_12px_rgb(56_189_248_/0.7)]'
                }`}
              >
                {moving ? target : current}
              </span>
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em]">
                {moving ? (
                  <>
                    <span className={`text-sky-glow ${target > current ? '' : 'rotate-180'}`}>▲</span>
                    <span className="text-sky-glow">Moving</span>
                  </>
                ) : arriving ? (
                  <span className="animate-pulse text-emerald-400">● Doors Opening</span>
                ) : (
                  <span className="text-slate-400">● Doors Open</span>
                )}
              </span>
            </div>

            <div className="flex gap-4">
              {/* Shaft */}
              <div className="relative h-[360px] flex-1 overflow-hidden rounded-2xl border border-white/10 bg-ink-950/70">
                {/* progress rail */}
                <div className="absolute right-2 top-3 bottom-3 w-1 rounded-full bg-white/10">
                  <div
                    className="w-full rounded-full bg-gradient-to-t from-royal-500 to-sky-glow transition-all duration-700 ease-glide"
                    style={{ height: `${progressPct}%`, marginTop: `${100 - progressPct}%` }}
                  />
                </div>

                {/* floor slabs */}
                {SIMULATOR_FLOORS.map((f, i) => {
                  const isActive = f.floor === selected;
                  return (
                    <div
                      key={f.id}
                      className="absolute inset-x-0 flex items-center"
                      style={{ top: `${(i / SIMULATOR_FLOORS.length) * 100}%`, height: `${100 / SIMULATOR_FLOORS.length}%` }}
                    >
                      <span
                        className={`w-9 pl-3 text-[10px] font-black transition-colors duration-300 ${
                          isActive ? 'text-sky-glow' : 'text-slate-500'
                        }`}
                      >
                        {f.floor}
                      </span>
                      <span className="absolute inset-x-9 bottom-0 h-px bg-white/10" />
                      {/* arrival light */}
                      <span
                        className={`absolute bottom-0 left-9 h-0.5 rounded-full transition-all duration-500 ${
                          isActive && doorsOpen
                            ? 'w-16 bg-sky-glow shadow-[0_0_14px_2px_rgb(56_189_248_/0.9)]'
                            : 'w-0 bg-transparent'
                        }`}
                      />
                    </div>
                  );
                })}

                {/* car */}
                <div
                  className="absolute inset-x-12 transition-all ease-glide"
                  style={{
                    top: `calc(${((SIMULATOR_FLOORS.length - current) / SIMULATOR_FLOORS.length) * 100}% + 5px)`,
                    height: `${100 / SIMULATOR_FLOORS.length}%`,
                    transitionDuration: moving ? `${Math.max(TRAVEL_PER_FLOOR * distance, 700)}ms` : `${DOOR_MS}ms`,
                  }}
                >
                  <div
                    className={`relative h-full rounded-xl border bg-gradient-to-b from-royal-800/95 to-ink-800/95 transition-shadow duration-500 ${
                      arriving
                        ? 'border-emerald-400/60 shadow-[0_0_40px_-6px_rgb(52_211_153_/0.75)]'
                        : 'border-sky-glow/40 shadow-[0_0_35px_-8px_rgb(56_189_248_/0.6)]'
                    }`}
                  >
                    {/* interior light */}
                    <span
                      className={`absolute inset-x-1 top-1 h-1 rounded-full transition-all duration-500 ${
                        doorsOpen ? 'bg-white/70' : 'bg-white/20'
                      }`}
                    />
                    {/* sliding doors */}
                    <div className="absolute inset-1.5 flex overflow-hidden rounded-lg">
                      <div
                        className="h-full w-1/2 border-r border-white/15 bg-gradient-to-r from-white/18 to-white/5 transition-transform duration-500 ease-glide"
                        style={{ transform: doorsOpen ? 'translateX(-88%)' : 'translateX(0)' }}
                      />
                      <div
                        className="h-full w-1/2 bg-gradient-to-l from-white/18 to-white/5 transition-transform duration-500 ease-glide"
                        style={{ transform: doorsOpen ? 'translateX(88%)' : 'translateX(0)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Call buttons */}
              <div className="flex w-24 flex-col justify-between sm:w-28">
                {SIMULATOR_FLOORS.map((f) => {
                  const Icon = ICONS[f.icon] ?? Cog;
                  const isActive = f.floor === selected;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => travelTo(f.floor)}
                      aria-pressed={isActive}
                      aria-label={`Go to floor ${f.floor} — ${f.title}`}
                      className={`group relative flex flex-col items-center gap-1 rounded-2xl border px-2 py-2.5 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? 'border-sky-glow/70 bg-sky-glow/15 text-white shadow-[0_0_25px_-6px_rgb(56_189_248_/0.9)]'
                          : 'border-white/12 bg-white/5 text-slate-400 hover:border-royal-400/50 hover:bg-royal-500/10 hover:text-white'
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? 'text-sky-glow' : ''}`} />
                      <span className="font-mono text-sm font-black">{f.floor}</span>
                      <span className="w-full truncate text-center text-[8px] tracking-normal">{f.short}</span>
                      {isActive && (
                        <motion.span
                          layoutId="sim-active-dot"
                          className="absolute -left-1 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-sky-glow to-royal-500"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              {moving ? 'Car in transit — hold on' : 'Select a floor to explore'}
            </p>
          </motion.div>

          {/* ------------------ SERVICE REVEAL ------------------ */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex items-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 26, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="glass w-full rounded-[26px] p-7 sm:p-9"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-royal-600 to-ink-700 shadow-[0_14px_34px_-12px_rgb(37_71_232_/0.9)]">
                    <ActiveIcon className="h-7 w-7 text-sky-glow" />
                  </span>
                  <div>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.24em] text-royal-300">
                      Floor {activeService.floor}
                    </p>
                    <h3 className="text-2xl font-extrabold text-white sm:text-3xl">{activeService.title}</h3>
                    <p className="mt-2 text-slate-300">{activeService.tagline}</p>
                  </div>
                </div>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {activeService.points.map((point) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-3 text-sm text-slate-300"
                    >
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-glow" />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="btn-shine group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-royal-600 to-royal-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_38px_-14px_rgb(37_71_232_/0.9)] transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Request {activeService.short}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5">
                      <Wrench className="h-3 w-3 text-sky-glow" /> All brands
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5">
                      <Boxes className="h-3 w-3 text-sky-glow" /> UAE-wide
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
