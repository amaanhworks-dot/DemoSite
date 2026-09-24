import { ShieldCheck, MapPin, MessageCircle, Mail } from 'lucide-react';
import { NAV_LINKS, SITE, waLink } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-deep">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
                <ShieldCheck className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-base font-bold text-white">
                PROSHIELD<span className="text-safety-red"> SYSTEMS</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              {SITE.tagline}. Engineered fire protection solutions for demanding industrial, commercial
              aur infrastructure applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#quote" className="text-sm text-white/60 transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-signal-amber" />
                {SITE.location}
              </li>
              <li>
                <a
                  href={waLink('Hello Proshield Systems, I have an enquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-emerald-400"
                >
                  <MessageCircle className="h-4 w-4 text-signal-amber" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email.trim()}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-signal-amber" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © Proshield Systems. All Rights Reserved.
          </p>
          <p className="font-mono text-xs text-white/30">{SITE.gstPlaceholder}</p>
        </div>
      </div>
    </footer>
  );
}