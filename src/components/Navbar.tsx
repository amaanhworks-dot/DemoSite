import { useEffect, useState } from 'react';
import { Menu, X, ShieldCheck, MessageCircle } from 'lucide-react';
import { NAV_LINKS, SITE, waLink } from '@/data/site';
import { useScrolled } from '@/hooks/useScrolled';

export function Navbar() {
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 shadow-sm backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
            scrolled ? 'h-14' : 'h-20'
          }`}
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5" aria-label="Proshield Systems home">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-md transition-colors ${
                scrolled ? 'bg-obsidian' : 'bg-white/10 backdrop-blur-sm ring-1 ring-white/20'
              }`}
            >
              <ShieldCheck className="h-5 w-5 text-white" />
            </span>
            <span
              className={`font-display text-sm font-bold tracking-tight transition-colors sm:text-base ${
                scrolled ? 'text-obsidian' : 'text-white'
              }`}
            >
              PROSHIELD<span className="text-safety-red"> SYSTEMS</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-safety-red ${
                    scrolled ? 'text-graphite' : 'text-white/80'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={waLink('Hello Proshield Systems, I have a technical enquiry.')}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? 'text-graphite hover:text-emerald-600' : 'text-white/80 hover:text-white'
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="#quote"
              className="rounded-md bg-safety-red px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-deep-red hover:shadow-lg hover:shadow-safety-red/30 active:scale-95"
            >
              Request a Quote →
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#quote"
              className={`rounded-md px-3 py-2 text-xs font-semibold transition-colors ${
                scrolled ? 'bg-safety-red text-white' : 'bg-white/15 text-white backdrop-blur-sm ring-1 ring-white/20'
              }`}
            >
              Quote
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors ${
                scrolled ? 'text-obsidian hover:bg-ind-gray' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-obsidian/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[78%] max-w-xs bg-white shadow-2xl animate-fade-in">
            <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
              <span className="font-display text-sm font-bold text-obsidian">
                PROSHIELD<span className="text-safety-red"> SYSTEMS</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-md text-obsidian hover:bg-ind-gray"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="space-y-1 px-3 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-4 py-3.5 text-base font-medium text-graphite transition-colors hover:bg-ind-gray hover:text-obsidian"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-3 px-5 pb-8">
              <a
                href={waLink('Hello Proshield Systems, I have a technical enquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-md border border-emerald-600 px-5 py-3 text-sm font-semibold text-emerald-600 transition-colors hover:bg-emerald-50"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Engineering
              </a>
              <a
                href="#quote"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md bg-safety-red px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-deep-red"
              >
                Request Technical Quotation →
              </a>
              <p className="pt-2 text-center text-xs text-gray-400">{SITE.location}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
