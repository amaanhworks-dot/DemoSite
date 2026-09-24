import { ArrowRight } from 'lucide-react';
import { STATS, waLink } from '@/data/site';
import { Eyebrow, Reveal, SectionHeading } from '@/components/ui/Primitives';

export function Manufacturing() {
  return (
    <section id="manufacturing" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-obsidian sm:aspect-[5/4] lg:aspect-[4/5]">
                <img
                  src="https://lloydinsulations.com/wp-content/uploads/2022/05/Passive-fire-protection2.jpg"
                  alt="Passive fire protection systems manufacturing"
                  className="h-full w-full object-cover opacity-90"
                  loading="lazy"
                />
              </div>
              {/* Floating annotation card */}
              <div className="absolute -bottom-5 -right-3 hidden rounded-lg bg-obsidian px-5 py-4 shadow-xl sm:block lg:-right-6">
                <div className="font-mono text-[10px] tracking-wider text-signal-amber">FACILITY.01</div>
                <div className="mt-1 text-sm font-semibold text-white">Delhi, India</div>
              </div>
              {/* Corner brackets */}
              <div className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 border-safety-red" />
              <div className="pointer-events-none absolute -bottom-3 -left-3 h-8 w-8 border-b-2 border-l-2 border-safety-red" />
            </div>
          </Reveal>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>01 / Manufacturing Capability</Eyebrow>
              <SectionHeading className="mt-5">
                Engineered at the Source. Controlled at Every Stage.
              </SectionHeading>
            </Reveal>

            <Reveal delay={100}>
              <blockquote className="mt-6 border-l-2 border-safety-red pl-5">
                <p className="text-base leading-relaxed text-graphite italic sm:text-lg">
                  "Fully automatic looms, CNC high-speed punching, aur global best practices — audited by TUV-SUD."
                </p>
              </blockquote>
            </Reveal>

            {/* Stats grid */}
            <Reveal delay={200}>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-gray-100">
                {STATS.map((stat) => (
                  <div key={stat.label} className="bg-white p-5 sm:p-6">
                    <div className="font-display text-3xl font-extrabold tracking-tight text-obsidian sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500 sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <a
                href={waLink('Hello Proshield Systems, I would like to talk to your engineering team.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-obsidian transition-colors hover:text-safety-red"
              >
                Talk to Engineering
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
