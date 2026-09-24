import { WHY_PROSHIELD } from '@/data/site';
import { Eyebrow, Reveal, SectionHeading } from '@/components/ui/Primitives';

export function WhyProshield() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>04 / Why Proshield</Eyebrow>
          <SectionHeading className="mt-5">Built Around the Requirements That Matter.</SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_PROSHIELD.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="group h-full bg-white p-6 transition-colors duration-300 hover:bg-ind-gray lg:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-obsidian transition-colors group-hover:bg-safety-red">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-obsidian">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
