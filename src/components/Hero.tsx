import { ShieldCheck, Award, Factory, ArrowRight, ChevronDown } from 'lucide-react';
import { waLink } from '@/data/site';
import { useReveal } from '@/hooks/useReveal';

const TRUST_BADGES = [
  { icon: Award, label: 'TUV-SUD Audited Processes' },
  { icon: ShieldCheck, label: 'UL / ASTM Standards' },
  { icon: Factory, label: 'Delhi Se PAN-India Dispatch' },
];

export function Hero() {
  const { ref, visible } = useReveal();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-obsidian">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2760286/pexels-photo-2760286.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="h-full w-full object-cover opacity-50"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/40 to-transparent" />
      </div>

      {/* Engineering grid overlay */}
      <div className="eng-grid absolute inset-0 opacity-60" />

      {/* Technical annotation lines */}
      <div className="pointer-events-none absolute left-8 top-28 hidden flex-col gap-2 md:flex">
        <div className="flex items-center gap-3 text-white/30">
          <span className="font-mono text-[10px] tracking-wider">SPEC.001</span>
          <span className="h-px w-16 bg-white/20" />
        </div>
        <div className="flex items-center gap-3 text-white/30">
          <span className="font-mono text-[10px] tracking-wider">FRL-120/120/120</span>
          <span className="h-px w-12 bg-white/20" />
        </div>
      </div>
      <div className="pointer-events-none absolute right-8 top-1/2 hidden flex-col items-end gap-2 md:flex">
        <div className="flex items-center gap-3 text-white/30">
          <span className="h-px w-16 bg-white/20" />
          <span className="font-mono text-[10px] tracking-wider">ASTM E814</span>
        </div>
        <div className="flex items-center gap-3 text-white/30">
          <span className="h-px w-12 bg-white/20" />
          <span className="font-mono text-[10px] tracking-wider">UL 1479</span>
        </div>
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28"
      >
        <div
          className={`max-w-3xl transition-all duration-1000 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-ultra-wide uppercase text-signal-amber">
            <span className="h-px w-8 bg-signal-amber/60" />
            Fire Protection • Fire Retardant • Industrial Safety
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Passive Fire Protection & Retardant Systems — Manufactured in Delhi.
          </h1>

          {/* Supporting text */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Firestop, intumescent coatings aur barrier systems — engineered for industrial, commercial
            aur infrastructure projects. Direct factory supply, PAN-India dispatch.
          </p>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-xs font-medium text-white/60 sm:text-sm"
              >
                <badge.icon className="h-4 w-4 text-signal-amber" />
                {badge.label}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-safety-red px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-deep-red hover:shadow-xl hover:shadow-safety-red/30 active:scale-95 sm:text-base"
            >
              Request Technical Quotation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5 active:scale-95 sm:text-base"
            >
              Explore Products
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade into trust strip */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}