/**
 * ============================================================
 * STEP LESS ELEVATORS & ESCALATORS L.L.C — O.P.C.
 * Centralised site configuration (single source of truth).
 * Update CONTACT.whatsapp for the live client number.
 * ============================================================
 */

export const COMPANY = {
  name: 'Step Less Elevators & Escalators',
  legalSuffix: 'L.L.C - O.P.C.',
  nameAr: 'ستيب ليس للمصاعد والسلالم المتحركة – ذ.م.م - ش.ش. و',
  tagline: 'Innovate • Build • Grow',
  logo: '/logo.jpg',
  founder: '/founder.jpg',
};

export const CONTACT = {
  /**
   * ⚠️ CLIENT TODO: replace with the official UAE mobile number.
   * Format: country code without "+" → "971XXXXXXXXX"
   */
  whatsapp: '971567231106',
  whatsappDisplay: '+971 56 723 1106',
  phone: '+971 50 000 0000',
  phoneHref: 'tel:+971500000000',
  email: 'info@steplesselevators.com',
  location: 'Abu Dhabi • UAE Wide Service',
  coverage:'Abu Dhabi • UAE Wide Service' ,
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/steplesselevators',
  instagramHandle: '@steplesselevators',
  linkedin: 'https://www.linkedin.com/company/stepless-elevators',
  linkedinHandle: 'Stepless Elevators',
  facebook: 'https://www.facebook.com/your-facebook-page-link',
  facebookHandle: 'Stepless Elevators',
};

/** Build a wa.me deep link with a pre-filled professional inquiry. */
export function buildWhatsAppLink(message) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Elevator Simulator', href: '#simulator' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

/** Floors powering the interactive Elevator Floor Simulator. */
export const SIMULATOR_FLOORS = [
  {
    floor: 4,
    id: 'modernization',
    title: 'Full Modernization',
    short: 'Modernization',
    icon: 'TrendingUp',
    tagline: 'Reinvent ageing lifts — like new, at a fraction of replacement cost.',
    points: [
      'Complete controller & drive replacement',
      'New cabin interiors, lighting & fixtures',
      'Energy-efficient gearless traction systems',
      'Compliance uplift to current UAE codes',
    ],
  },
  {
    floor: 3,
    id: 'parts',
    title: 'Genuine Spare Parts',
    short: 'Spare Parts',
    icon: 'PackageCheck',
    tagline: 'OEM-grade components, stocked and delivered fast.',
    points: [
      'Door operators, controllers, drives & displays',
      'Certified safety gears, buffers & ropes',
      'Fast-moving parts held in local stock',
      'Warranty-backed supply & fitment',
    ],
  },
  {
    floor: 2,
    id: 'amc',
    title: 'Preventive AMC',
    short: 'Preventive AMC',
    icon: 'ShieldCheck',
    tagline: 'Comprehensive Annual Maintenance Contracts that prevent breakdowns.',
    points: [
      'Scheduled preventive maintenance visits',
      'Lubrication, calibration & safety testing',
      'Detailed digital service reports',
      'Priority call-outs & transparent pricing',
    ],
  },
  {
    floor: 1,
    id: 'emergency',
    title: 'Emergency Repairs',
    short: 'Emergency Repairs',
    icon: 'Siren',
    tagline: '24/7 breakdown response — engineers dispatched in under 30 minutes.',
    points: [
      'Round-the-clock emergency dispatch UAE-wide',
      'Trapped-passenger rescue protocol',
      'Fault diagnostics & same-day rectification',
      'Escalator & lift coverage, all brands',
    ],
  },
];

export const SERVICES = [
  {
    icon: 'Siren',
    title: '24/7 Emergency Breakdown',
    desc: 'Rapid-response rescue teams on standby around the clock, every day of the year, anywhere in the UAE.',
    tag: 'Under 30 min',
  },
  {
    icon: 'Wrench',
    title: 'Lift & Escalator Repair',
    desc: 'Accurate fault-finding and permanent repairs for passenger lifts, service lifts and escalators of every make.',
    tag: 'All brands',
  },
  {
    icon: 'ShieldCheck',
    title: 'Preventive Maintenance (AMC)',
    desc: 'Planned maintenance contracts that cut breakdowns, extend asset life and keep your building fully compliant.',
    tag: 'Cost-saving',
  },
  {
    icon: 'TrendingUp',
    title: 'Modernization & Upgrades',
    desc: 'Controller, drive and cabin upgrades that transform ageing equipment into safe, efficient, modern systems.',
    tag: 'Like new',
  },
  {
    icon: 'Cog',
    title: 'Installation Supervision',
    desc: 'New lift and escalator installation oversight, snagging and handover support for developers and contractors.',
    tag: 'Turnkey',
  },
  {
    icon: 'BadgeCheck',
    title: 'Civil Defense Compliance',
    desc: 'Inspection-ready maintenance aligned with UAE Civil Defense standards and municipal safety requirements.',
    tag: 'Certified',
  },
];

export const TRUST_STATS = [
  { value: 30, prefix: '<', suffix: ' min', label: 'Emergency Response', desc: 'Average dispatch time across the UAE' },
  { value: 100, suffix: '%', label: 'Safety Record', desc: 'UAE Civil Defense aligned protocols' },
  { value: 15, suffix: '+', label: 'Certified Technicians', desc: 'Factory-trained lift & escalator engineers' },
  { value: 24, suffix: '/7', label: 'Emergency Dispatch', desc: 'Breakdown hotline never sleeps' },
];

export const WHY_US = [
  {
    icon: 'Timer',
    title: 'Rapid UAE-Wide Response',
    desc: 'Strategically positioned service teams reach your site fast — most breakdowns answered within 30 minutes.',
  },
  {
    icon: 'HardHat',
    title: 'Certified Engineering Team',
    desc: 'Factory-trained technicians with deep expertise across every major lift and escalator brand.',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Transparent AMC Plans',
    desc: 'Clear scopes, honest pricing and detailed digital reports after every single visit.',
  },
  {
    icon: 'ShieldAlert',
    title: 'Safety-First Culture',
    desc: 'Every job follows strict UAE Civil Defense standards — because lives travel in your lifts daily.',
  },
  {
    icon: 'Boxes',
    title: 'Genuine Spare Parts',
    desc: 'OEM-grade components stocked locally for fastest possible repair turnaround times.',
  },
  {
    icon: 'Headset',
    title: 'Dedicated Support',
    desc: 'A single point of contact who knows your building, your equipment and your history.',
  },
];

export const EMIRATES = [
'Abu Dhabi • UAE Wide Service' ,
];

export const SERVICE_OPTIONS = [
  '24/7 Emergency Breakdown',
  'Preventive Maintenance (AMC)',
  'Lift / Escalator Repair',
  'Modernization & Upgrades',
  'Spare Parts Supply',
  'Installation Supervision',
  'Annual Contract (New Site)',
  'Other Enquiry',
];
