import { ArrowUp, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Instagram, Linkedin, Facebook } from './BrandIcons.jsx';
import { COMPANY, CONTACT, NAV_LINKS, SERVICES, SOCIAL } from '../data/site.js';
import BrandLogo from './BrandLogo.jsx';

const YEAR = new Date().getFullYear();

/**
 * Professional bilingual footer — logo, quick links, services,
 * contacts, socials and legal strip.
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950/90">
      {/* top glow line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-glow/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/3 -z-10 h-[320px] w-[520px] rounded-full bg-royal-800/20 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
          {/* ---------- Brand ---------- */}
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo className="h-12 w-12 rounded-xl ring-1 ring-white/15" />
              <div>
                <p className="text-base font-extrabold leading-tight text-white">
                  Step Less <span className="text-gradient-blue">Elevators</span>
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  &amp; Escalators {COMPANY.legalSuffix}
                </p>
              </div>
            </div>

            <p
              dir="rtl"
              lang="ar"
              className="font-arabic mt-5 text-sm leading-relaxed text-slate-400"
            >
              {COMPANY.nameAr}
            </p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              Professional lift &amp; escalator repair, preventive maintenance (AMC),
              modernization and 24/7 emergency breakdown services across the UAE.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-sky-glow/25 bg-sky-glow/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-glow">
              <ShieldCheck className="h-3.5 w-3.5" />
              {COMPANY.tagline}
            </p>
          </div>

          {/* ---------- Quick links ---------- */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-3 bg-royal-400 transition-all duration-300 group-hover:w-5 group-hover:bg-sky-glow" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- Services ---------- */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Contact ---------- */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              {/* Dual Phone Numbers Display */}
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-glow" />
                  <div className="space-y-1">
                    <a href={CONTACT.phoneHref} className="block font-semibold text-white transition-colors hover:text-sky-glow">
                      {CONTACT.phone}
                    </a>
                    {CONTACT.phone2 && (
                      <a href={CONTACT.phone2Href} className="block font-semibold text-white transition-colors hover:text-sky-glow">
                        {CONTACT.phone2}
                      </a>
                    )}
                    <span className="text-xs text-slate-500">24/7 Emergency Dispatch</span>
                  </div>
                </div>
              </li>

              {/* Working Mailto Email Link */}
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-sky-glow" />
                  {CONTACT.email}
                </a>
              </li>

              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-glow" />
                <span>{CONTACT.coverage}</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${SOCIAL.instagramHandle}`}
                className="group grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-400 transition-all hover:scale-105 hover:border-sky-glow/50 hover:text-sky-glow"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn ${SOCIAL.linkedinHandle}`}
                className="group grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-400 transition-all hover:scale-105 hover:border-sky-glow/50 hover:text-sky-glow"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              {SOCIAL.facebook && (
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Facebook ${SOCIAL.facebookHandle}`}
                  className="group grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-400 transition-all hover:scale-105 hover:border-sky-glow/50 hover:text-sky-glow"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {YEAR} <span className="font-semibold text-slate-300">{COMPANY.name} {COMPANY.legalSuffix}</span>. All rights reserved.
          </p>
          <p dir="rtl" lang="ar" className="font-arabic text-xs text-slate-500">
            جميع الحقوق محفوظة · {new Date().getFullYear()}
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-400 transition-all hover:border-sky-glow/50 hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}