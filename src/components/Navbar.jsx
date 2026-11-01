import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { Instagram, Linkedin } from './BrandIcons.jsx';
import { COMPANY, CONTACT, NAV_LINKS, SOCIAL } from '../data/site.js';
import BrandLogo from './BrandLogo.jsx';

/**
 * Sticky glassmorphism navbar with logo, quick nav, social icons
 * and a pulsing "Emergency Call" button. Includes animated mobile drawer.
 */
export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-[0_10px_40px_-16px_rgb(2_6_23_/0.9)]'
          : 'border-b border-transparent bg-ink-950/40 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#home" className="group flex min-w-0 items-center gap-3">
          <BrandLogo className="h-11 w-11 shrink-0 rounded-xl ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-105 group-hover:ring-sky-glow/50" />
          <span className="min-w-0">
            <span className="block truncate text-[15px] font-extrabold leading-tight tracking-tight text-white sm:text-base">
              Step Less <span className="text-gradient-blue">Elevators</span>
            </span>
            <span className="block truncate text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              &amp; Escalators {COMPANY.legalSuffix}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === link.href.slice(1)
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-royal-500 to-sky-glow transition-all duration-400 ${
                    active === link.href.slice(1) ? 'opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2.5">
          <div className="hidden items-center gap-2.5 xl:flex">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @steplesselevators"
              className="rounded-lg border border-white/10 p-2 text-slate-400 transition-all hover:border-sky-glow/40 hover:text-sky-glow"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Stepless Elevators"
              className="rounded-lg border border-white/10 p-2 text-slate-400 transition-all hover:border-sky-glow/40 hover:text-sky-glow"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <a
            href={CONTACT.phoneHref}
            className="btn-shine hidden animate-pulse-ring items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-4 py-2.5 text-xs font-bold text-white shadow-[0_10px_28px_-10px_rgb(220_38_38_/0.8)] transition-transform duration-300 hover:scale-105 sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            Emergency Call
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-lg border border-white/10 p-2.5 text-slate-200 transition-colors hover:border-sky-glow/40 hover:text-sky-glow lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 glass-strong lg:hidden"
          >
            <ul className="space-y-1 px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.35 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      active === link.href.slice(1)
                        ? 'bg-royal-700/30 text-white'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36 }}
                className="flex items-center gap-3 pt-3"
              >
                <a
                  href={CONTACT.phoneHref}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-4 py-3 text-sm font-bold text-white"
                >
                  <Phone className="h-4 w-4" />
                  Emergency Call
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-xl border border-white/10 p-3 text-slate-300"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-white/10 p-3 text-slate-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}