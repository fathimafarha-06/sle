import { useEffect, useRef, useState } from 'react';
import { Gauge, ShieldCheck, Zap } from 'lucide-react';

const FLOOR_COUNT = 8;
const TRAVEL_MS = 4200;
const PAUSE_MS = 1600;

/**
 * Decorative auto-running elevator shaft for the hero.
 * The car glides between floors with a live floor indicator.
 */
export default function ElevatorVisual() {
  const [floor, setFloor] = useState(1);
  const [direction, setDirection] = useState(1);
  const dirRef = useRef(1);

  useEffect(() => {
    let t;
    const step = () => {
      setFloor((f) => {
        let next = f + dirRef.current;
        if (next >= FLOOR_COUNT) {
          next = FLOOR_COUNT - 1;
          dirRef.current = -1;
          setDirection(-1);
        } else if (next <= 2) {
          next = 2;
          dirRef.current = 1;
          setDirection(1);
        }
        return next;
      });
      t = setTimeout(step, TRAVEL_MS + PAUSE_MS);
    };
    t = setTimeout(step, PAUSE_MS);
    return () => clearTimeout(t);
  }, []);

  // percentage from the top for the car at a given floor (8 = top, 1 = bottom)
  const carTop = `calc(${((FLOOR_COUNT - floor) / FLOOR_COUNT) * 100}% + 4px)`;

  return (
    <div className="glass-strong relative rounded-[28px] p-5 shadow-[0_40px_120px_-40px_rgb(37_71_232_/0.7)] sm:p-6">
      {/* Glow behind panel */}
      <div
        aria-hidden="true"
        className="animate-glow-breathe pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-royal-600/30 via-transparent to-sky-glow/20 blur-2xl"
      />

      {/* Header strip */}
      <div className="mb-4 flex items-center justify-between">
        <span className="flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          System Online
        </span>
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
          <Zap className="h-3 w-3 text-sky-glow" />
          Live Demo
        </div>
      </div>

      <div className="flex gap-4">
        {/* Shaft */}
        <div className="relative h-[330px] flex-1 overflow-hidden rounded-2xl border border-white/10 bg-ink-950/70">
          {/* guide rail */}
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

          {/* floor lines + labels */}
          {Array.from({ length: FLOOR_COUNT }, (_, i) => {
            const f = FLOOR_COUNT - i;
            return (
              <div
                key={f}
                className="absolute inset-x-0 flex items-center"
                style={{ top: `${(i / FLOOR_COUNT) * 100}%`, height: `${100 / FLOOR_COUNT}%` }}
              >
                <span className="w-8 pl-3 text-[9px] font-bold text-slate-500">{f}</span>
                <span className="absolute inset-x-8 bottom-0 h-px bg-white/10" />
              </div>
            );
          })}

          {/* the car */}
          <div
            className="absolute inset-x-10 transition-all ease-glide"
            style={{ top: carTop, height: `${100 / FLOOR_COUNT}%`, transitionDuration: `${TRAVEL_MS}ms` }}
          >
            <div className="animate-elevator-hum relative h-full rounded-xl border border-sky-glow/40 bg-gradient-to-b from-royal-800/90 to-ink-800/95 shadow-[0_0_35px_-6px_rgb(56_189_248_/0.65)]">
              {/* doors */}
              <div className="absolute inset-1.5 flex overflow-hidden rounded-lg">
                <div className="h-full w-1/2 border-r border-white/15 bg-gradient-to-r from-white/15 to-white/5" />
                <div className="h-full w-1/2 bg-gradient-to-l from-white/15 to-white/5" />
              </div>
              {/* motion arrow */}
              <div className="absolute inset-0 grid place-items-center">
                <span
                  className={`text-[10px] font-black text-sky-glow drop-shadow-[0_0_8px_rgb(56_189_248_/0.9)] ${
                    direction > 0 ? '' : 'rotate-180'
                  }`}
                >
                  ▲
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Side panel: indicator + stats */}
        <div className="flex w-28 flex-col justify-between gap-3 sm:w-32">
          <div className="rounded-2xl border border-white/10 bg-ink-950/70 p-3 text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Floor</p>
            <p className="font-mono text-4xl font-black text-sky-glow drop-shadow-[0_0_14px_rgb(56_189_248_/0.8)]">
              {floor}
            </p>
            <p className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-royal-300">
              {direction > 0 ? 'Going Up' : 'Going Down'}
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
              <Gauge className="mb-1 h-4 w-4 text-sky-glow" />
              <p className="text-sm font-extrabold text-white">0.8s</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-400">Avg. fault detect</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
              <ShieldCheck className="mb-1 h-4 w-4 text-emerald-400" />
              <p className="text-sm font-extrabold text-white">100%</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-400">Safety checks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom brand strip */}
      <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
        Repairs · AMC · Modernization · 24/7 Rescue
      </p>
    </div>
  );
}
