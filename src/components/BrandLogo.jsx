import { useState } from 'react';
import { ArrowUpFromLine } from 'lucide-react';
import { COMPANY } from '../data/site.js';

/**
 * Official brand logo with a vector fallback, so the layout never breaks
 * while /public/logo.jpg is being replaced by the client's final asset. */
 
export default function BrandLogo({ className = '' }) {
  const [failed, setFailed] = useState(false);  




  if (failed) {
    return (
      <span
        role="img"
        aria-label={`${COMPANY.name} logo`}
        className={`grid place-items-center bg-gradient-to-br from-royal-600 via-royal-700 to-ink-800 ${className}`}
      >
        <ArrowUpFromLine className="h-[55%] w-[55%] text-white drop-shadow-[0_2px_8px_rgb(56_189_248_/0.6)]" />
      </span>
    );
  }

  return (
    <img
      src={COMPANY.logo}
      alt={`${COMPANY.name} ${COMPANY.legalSuffix} — official logo`}
      width={44}
      height={44}
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
