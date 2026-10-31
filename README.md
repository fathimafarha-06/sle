# Step Less Elevators & Escalators L.L.C — O.P.C.

**ستيب ليس للمصاعد والسلالم المتحركة – ذ.م.م - ش.ش. و**

Premium, production-ready corporate landing page for a UAE-based lift & escalator
repair, maintenance (AMC), modernization and 24/7 emergency services company.

> Innovate • Build • Grow — led by **Ahamed Musammil, Managing Director**.

---

## ✨ Highlights

- **High-impact animated hero** — kinetic headline, dual CTAs, living elevator-shaft visual
- **Interactive "Elevator Floor Simulator"** — click a floor, the car glides, doors open,
  and the matching service (Emergency Repairs / Preventive AMC / Spare Parts / Modernization) is revealed
- **Meet the Leadership** — official founder photo with executive glass identity plate & MD quote
- **Direct WhatsApp lead generation** — form validates, then opens `wa.me/...` with a fully
  pre-filled professional service inquiry
- **Animated trust stats** — count-up counters + UAE coverage marquee
- **3D tilt service cards** — cursor-tracking glow, glassmorphism, blue glow hovers
- **Bilingual branding** — English + Arabic (RTL) in the footer
- **Sticky glass navbar** with pulsing emergency call button + scroll-spy underline
- **Floating WhatsApp FAB** that appears after the hero

## 🛠 Tech Stack

| Layer      | Choice                                                          |
| ---------- | --------------------------------------------------------------- |
| Framework  | React 19 (Vite 8)                                                |
| Styling    | Tailwind CSS v4 (`@theme` design tokens + custom keyframes)      |
| Motion     | Framer Motion (springs, reveals, tilt) + CSS keyframe animations |
| Icons      | Lucide React + custom brand SVGs (Instagram / LinkedIn / WA)     |
| Fonts      | Plus Jakarta Sans (UI) + Tajawal (Arabic)                        |

## 🚀 Getting Started

```bash
npm install
npm run dev       # start dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## 📁 Project Structure

```
public/
  logo.jpg            ← official brand logo (replace placeholder)
  founder.jpg         ← official MD portrait (replace placeholder)
  favicon.svg
src/
  data/site.js        ← ⚠️ ALL business config lives here (single source of truth)
  lib/motion.js       ← shared Framer Motion variants
  components/
    TopBar.jsx            24/7 emergency bar + social links
    Navbar.jsx            sticky glass navbar + mobile drawer
    Hero.jsx              animated hero + CTAs
    ElevatorVisual.jsx    decorative auto-running lift (hero)
    ElevatorSimulator.jsx ⭐ interactive floor simulator
    Services.jsx          tilt service cards
    TrustStats.jsx        animated counters + marquee
    Leadership.jsx        founder / MD section
    WhyUs.jsx             differentiators grid
    LeadForm.jsx          ⭐ WhatsApp lead form
    Footer.jsx            bilingual footer
    FloatingWhatsApp.jsx  floating WA button
    TiltCard.jsx          reusable 3D tilt wrapper
    Counter.jsx           count-up hook component
    BrandLogo.jsx         logo with vector fallback
    BrandIcons.jsx        Instagram / LinkedIn / WhatsApp SVGs
```

## ⚠️ Before Going Live — 2-minute checklist

All editable business data is centralised in **`src/data/site.js`**:

1. **WhatsApp number** — set `CONTACT.whatsapp` (e.g. `'971501234567'`, no `+`, no spaces).
   This drives the lead form deep link, floating button and contact card.
2. **Phone / email** — update `CONTACT.phone`, `CONTACT.phoneHref`, `CONTACT.email`,
   `CONTACT.whatsappDisplay`.
3. **Assets** — drop the real files into `public/` (must keep these names):
   - `public/logo.jpg`
   - `public/founder.jpg`

   > Both images degrade gracefully if missing (vector fallback / initials plate), so the
   > layout never breaks.
4. **Social links** — verify `SOCIAL.instagram` and `SOCIAL.linkedin` in `src/data/site.js`
   (and the `sameAs` block in `index.html`).
5. **Domain & SEO** — update the canonical URL, `og:` tags and the `LocalBusiness`
   JSON-LD block in `index.html`.

## 📱 Responsiveness & Performance

- Fully responsive: mobile → tablet → large desktop (fluid grids, `sm:`/`lg:` breakpoints)
- `prefers-reduced-motion` respected — animations collapse gracefully
- Images lazy-loaded with `decoding="async"`; fonts preconnected
- Production bundle ≈ **137 KB gzipped** JS + **11.7 KB** CSS
- Scroll-spy nav, GPU-friendly springs (no layout-thrashing JS animations)

---

© {year} Step Less Elevators & Escalators L.L.C — O.P.C. All rights reserved.
