import { MessageCircle } from 'lucide-react';
import { waLink } from '@/data/site';
import { useScrolled } from '@/hooks/useScrolled';

/**
 * Mobile: permanent bottom conversion bar.
 * Desktop: floating WhatsApp button (bottom-right).
 */
export function StickyCTA() {
  const scrolled = useScrolled(600);

  return (
    <>
      {/* Mobile bottom bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
        style={{ paddingBottom: 'var(--safe-area-bottom)' }}
      >
        <div className="flex items-center justify-between gap-3 border-t border-gray-200 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-obsidian">Need Technical Assistance?</p>
          </div>
          <a
            href={waLink('Hello Proshield Systems, I need technical assistance.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1.5 rounded-md bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white transition-all active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Engineering
          </a>
        </div>
      </div>

      {/* Desktop floating WhatsApp */}
      <a
        href={waLink('Hello Proshield Systems, I have an enquiry.')}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/40 lg:flex ${
          scrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </>
  );
}
