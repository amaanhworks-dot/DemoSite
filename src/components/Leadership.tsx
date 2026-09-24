import { Eyebrow, Reveal, SectionHeading } from '@/components/ui/Primitives';

export function Leadership() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Facility image */}
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-graphite">
                <img
                  src="/facility.jpg"
                  alt="Proshield Systems manufacturing facility"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Name plate */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-obsidian px-6 py-3 text-center shadow-xl">
                <div className="font-display text-base font-bold text-white">Delhi Facility</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-signal-amber">
                  Manufacturing & Dispatch
                </div>
              </div>
            </div>
          </Reveal>

          {/* Statement */}
          <div className="lg:col-span-3">
            <Reveal>
              <Eyebrow>Our Approach</Eyebrow>
              <SectionHeading className="mt-5">Manufacturing With a Long-Term View.</SectionHeading>
            </Reveal>

            <Reveal delay={100}>
              <blockquote className="mt-8 border-l-2 border-safety-red pl-6">
                <p className="font-display text-xl font-semibold leading-relaxed text-obsidian sm:text-2xl">
                  "Fully automatic looms, CNC high-speed punching, aur global best practices — audited by TUV-SUD."
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-gray-500">
                Proshield Systems operates with a commitment to engineering precision, manufacturing
                discipline aur long-term relationships with procurement and project teams across India.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}