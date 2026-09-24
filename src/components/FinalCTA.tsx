import { ArrowRight, MessageCircle } from 'lucide-react';
import { waLink } from '@/data/site';
import { Reveal } from '@/components/ui/Primitives';

export function FinalCTA() {
  return (
    <section id="quote" className="relative overflow-hidden bg-obsidian py-20 lg:py-28">
      {/* Background texture */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/36346048/pexels-photo-36346048.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="h-full w-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian" />
      </div>
      <div className="eng-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Have a Project Requirement?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Send your requirement directly to our engineering team.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-safety-red px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-deep-red hover:shadow-xl hover:shadow-safety-red/30 active:scale-95 sm:text-base"
            >
              Request Technical Quotation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink('Hello Proshield Systems, I need technical assistance for a project requirement.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-600/10 px-6 py-3.5 text-sm font-semibold text-emerald-400 transition-all duration-200 hover:border-emerald-500/60 hover:bg-emerald-600/20 active:scale-95 sm:text-base"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Engineering
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-xs font-medium uppercase tracking-ultra-wide text-white/30">
            Bulk Orders • Project Supply • Technical Assistance • PAN-India Dispatch
          </p>
        </Reveal>
      </div>
    </section>
  );
}
