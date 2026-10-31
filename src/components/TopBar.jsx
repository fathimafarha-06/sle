import { PhoneCall, MapPin } from 'lucide-react';
import { Instagram, Linkedin } from './BrandIcons.jsx';
import { CONTACT, SOCIAL } from '../data/site.js';

/**
 * Top utility bar — emergency dispatch badge + direct social links.
 * Collapses gracefully on mobile (secondary text hidden below md).
 */
export default function TopBar() {
  return (
    <div className="relative z-50 border-b border-white/10 bg-ink-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Emergency dispatch badge */}
        <a
          href={CONTACT.phoneHref}
          className="group flex min-w-0 items-center gap-2 text-[11px] font-semibold tracking-wide text-slate-300 transition-colors hover:text-white sm:text-xs"
        >
          <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-red-500/30" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_10px_2px_rgb(239_68_68_/0.7)]" />
          </span>
          <PhoneCall className="h-3.5 w-3.5 shrink-0 text-red-400 transition-transform group-hover:scale-110" />
          <span className="truncate">
            <span className="text-red-400">24/7 Emergency Dispatch:</span> UAE Wide
            <span className="hidden text-slate-500 lg:inline"> · {CONTACT.whatsappDisplay}</span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-4">
          <span className="hidden items-center gap-1.5 text-[11px] text-slate-500 xl:flex">
            <MapPin className="h-3 w-3 text-sky-glow/80" />
            Serving all 7 Emirates
          </span>

          <span className="h-3 w-px bg-white/15" />

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${SOCIAL.instagramHandle}`}
              className="text-slate-400 transition-all hover:scale-115 hover:text-sky-glow"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn ${SOCIAL.linkedinHandle}`}
              className="text-slate-400 transition-all hover:scale-115 hover:text-sky-glow"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
