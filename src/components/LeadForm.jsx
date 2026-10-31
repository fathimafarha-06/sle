import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  UserRound,
} from 'lucide-react';
import { buildWhatsAppLink, COMPANY, CONTACT, EMIRATES, SERVICE_OPTIONS } from '../data/site.js';
import { fadeUp, viewportOnce } from '../lib/motion.js';

const EMPTY = {
  name: '',
  phone: '',
  emirate: '',
  service: '',
  message: '',
};

/** Basic UAE/international phone sanity check. */
const isPhoneValid = (v) => /^[+\d][\d\s()-]{6,18}$/.test(v.trim());

export default function LeadForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSent(false);
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your full name.';
    if (!isPhoneValid(form.phone)) next.phone = 'Please enter a valid phone number.';
    if (!form.emirate) next.emirate = 'Select your emirate / location.';
    if (!form.service) next.service = 'Select the service you need.';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const stamp = new Date().toLocaleString('en-AE', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const text =
      `*NEW SERVICE REQUEST* — ${COMPANY.name} ${COMPANY.legalSuffix}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${form.name.trim()}\n` +
      `📞 *Phone:* ${form.phone.trim()}\n` +
      `📍 *Emirate / Location:* ${form.emirate}\n` +
      `🛠 *Service Required:* ${form.service}\n` +
      (form.message.trim() ? `📝 *Message:* ${form.message.trim()}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🕒 Submitted: ${stamp}\n` +
      `🔗 Sent from the official website`;

    // Open WhatsApp with the fully pre-filled inquiry.
    window.open(buildWhatsAppLink(text), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const fieldBase =
    'w-full rounded-xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:bg-white/[0.07]';

  const border = (field) =>
    errors[field]
      ? 'border-red-500/70 focus:border-red-400 focus:shadow-[0_0_0_3px_rgb(239_68_68_/0.15)]'
      : 'border-white/12 focus:border-sky-glow/70 focus:shadow-[0_0_0_3px_rgb(56_189_248_/0.15)]';

  const contactCards = useMemo(
    () => [
      {
        icon: Phone,
        label: '24/7 Emergency Line',
        value: CONTACT.phoneDisplay ?? CONTACT.phone,
        href: CONTACT.phoneHref,
        highlight: true,
      },
      { icon: MessageCircle, label: 'WhatsApp Dispatch', value: CONTACT.whatsappDisplay, href: buildWhatsAppLink('Hello Step Less Elevators, I need lift service assistance.') },
      { icon: Mail, label: 'Email Us', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
      { icon: MapPin, label: 'Coverage', value: CONTACT.coverage, href: null },
    ],
    []
  );

  return (
    <section id="contact" className="relative scroll-mt-28 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-glow/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-[380px] w-[620px] -translate-x-1/2 rounded-full bg-royal-700/20 blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
            <MessageCircle className="h-3.5 w-3.5" />
            Instant WhatsApp Response
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Book a Service in <span className="text-gradient-blue">30 Seconds</span>
          </h2>
          <p className="mt-4 text-slate-400 sm:text-lg">
            Fill the form and hit send — your request opens directly in WhatsApp, fully pre-filled.
            Our dispatch desk replies fast, day or night.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ---------- Contact info cards ---------- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {contactCards.map(({ icon: Icon, label, value, href, highlight }) => {
              const inner = (
                <>
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${
                      highlight
                        ? 'bg-gradient-to-br from-red-600 to-red-500 shadow-[0_12px_30px_-10px_rgb(220_38_38_/0.9)]'
                        : 'bg-gradient-to-br from-royal-600/80 to-ink-700 ring-1 ring-white/10'
                    }`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      {label}
                    </span>
                    <span className="block break-words text-sm font-semibold text-white">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass card-hover-lift flex items-center gap-4 rounded-2xl p-5"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="glass flex items-center gap-4 rounded-2xl p-5">
                  {inner}
                </div>
              );
            })}

            <div className="glass flex items-start gap-4 rounded-2xl p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-royal-600/80 to-ink-700 ring-1 ring-white/10">
                <Clock3 className="h-5 w-5 text-sky-glow" />
              </span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Emergency Dispatch
                </span>
                <span className="block text-sm font-semibold text-white">
                  24 hours · 7 days · All year
                </span>
                <span className="mt-1 block text-xs text-slate-400">
                  Normal AMC visits scheduled Sat–Thu, with weekend call-outs on request.
                </span>
              </span>
            </div>
          </motion.div>

          {/* ---------- WhatsApp form ---------- */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="glass-strong rounded-[28px] p-6 sm:p-9"
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <UserRound className="h-3.5 w-3.5 text-sky-glow" /> Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Khalid Al Marri"
                    value={form.name}
                    onChange={update('name')}
                    className={`${fieldBase} ${border('name')}`}
                    aria-invalid={!!errors.name}
                  />
                  <FieldError msg={errors.name} />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <Phone className="h-3.5 w-3.5 text-sky-glow" /> Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+971 50 123 4567"
                    value={form.phone}
                    onChange={update('phone')}
                    className={`${fieldBase} ${border('phone')}`}
                    aria-invalid={!!errors.phone}
                  />
                  <FieldError msg={errors.phone} />
                </div>

                {/* Emirate */}
                <div>
                  <label htmlFor="emirate" className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-sky-glow" /> Emirate / Location *
                  </label>
                  <select
                    id="emirate"
                    name="emirate"
                    value={form.emirate}
                    onChange={update('emirate')}
                    className={`${fieldBase} ${border('emirate')} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%2394a3b8%22 stroke-width=%222%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M19 9l-7 7-7-7%22/></svg>')] bg-[length:18px_18px] bg-[right_1rem_center] bg-no-repeat pr-11 ${
                      form.emirate ? '' : 'text-slate-500'
                    }`}
                    aria-invalid={!!errors.emirate}
                  >
                    <option value="" className="bg-ink-800">Select your emirate…</option>
                    {EMIRATES.map((e) => (
                      <option key={e} value={e} className="bg-ink-800">{e}</option>
                    ))}
                  </select>
                  <FieldError msg={errors.emirate} />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <Send className="h-3.5 w-3.5 text-sky-glow" /> Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={update('service')}
                    className={`${fieldBase} ${border('service')} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%2394a3b8%22 stroke-width=%222%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M19 9l-7 7-7-7%22/></svg>')] bg-[length:18px_18px] bg-[right_1rem_center] bg-no-repeat pr-11 ${
                      form.service ? '' : 'text-slate-500'
                    }`}
                    aria-invalid={!!errors.service}
                  >
                    <option value="" className="bg-ink-800">Choose a service…</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s} className="bg-ink-800">{s}</option>
                    ))}
                  </select>
                  <FieldError msg={errors.service} />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Message / Building Details <span className="text-slate-600">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your building, number of lifts/escalators, fault symptoms or preferred visit time…"
                    value={form.message}
                    onChange={update('message')}
                    className={`${fieldBase} ${border('message')} resize-none`}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-shine mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_18px_45px_-16px_rgb(16_185_129_/0.85)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_22px_60px_-16px_rgb(52_211_153_/0.9)] active:scale-[0.99]"
              >
                <MessageCircle className="h-5 w-5" />
                Send Request via WhatsApp
                <Send className="h-4 w-4" />
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-300"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  WhatsApp opened with your details — press send to reach our team!
                </motion.p>
              )}

              <p className="mt-4 flex items-start gap-2 text-[11px] leading-relaxed text-slate-500">
                <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-glow/70" />
                Your details are only used to respond to this enquiry — never shared or sold.
                For life-threatening entrapment emergencies, call our hotline directly.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-400">
      <AlertCircle className="h-3 w-3" />
      {msg}
    </p>
  );
}
