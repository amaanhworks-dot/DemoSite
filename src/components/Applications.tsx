import { APPLICATIONS } from '@/data/site';
import { Eyebrow, Reveal, SectionHeading } from '@/components/ui/Primitives';

export function Applications() {
  return (
    <section className="bg-ind-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>03 / Applications</Eyebrow>
          <SectionHeading className="mt-5">Where Proshield Systems Perform.</SectionHeading>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-graphite">
            Engineered for deployment across critical infrastructure and industrial environments.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((app, i) => (
            <Reveal key={app.title} delay={(i % 3) * 100}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-obsidian">
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-full w-full object-cover opacity-75 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <app.icon className="h-6 w-6 text-signal-amber" />
                  <h3 className="mt-2 font-display text-lg font-bold text-white">{app.title}</h3>
                </div>
                {/* Corner accent */}
                <div className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-safety-red opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
