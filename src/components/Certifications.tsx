import { Award, ShieldCheck, FileText, Download, ArrowRight } from 'lucide-react';
import { Eyebrow, Reveal, SectionHeading } from '@/components/ui/Primitives';

const CERTS = [
  { icon: Award, title: 'TUV-SUD Quality Audited', subtitle: 'Manufacturing process audit' },
  { icon: ShieldCheck, title: 'UL / ASTM Standards', subtitle: 'Applicable product standards compliance' },
];

export function Certifications() {
  return (
    <section id="about" className="relative overflow-hidden bg-obsidian py-20 lg:py-28">
      <div className="eng-grid absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow dark>Certification & Documentation</Eyebrow>
          <SectionHeading dark className="mt-5">
            Standards Are Not Decoration. They're the Foundation.
          </SectionHeading>
        </Reveal>

        {/* Certificate placeholders */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CERTS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 120}>
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-safety-red/10 ring-1 ring-safety-red/20">
                    <cert.icon className="h-7 w-7 text-safety-red" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{cert.title}</h3>
                    <p className="mt-1 text-sm text-white/50">{cert.subtitle}</p>
                    <div className="mt-4 inline-flex items-center gap-2 rounded border border-white/15 px-3 py-1.5 text-xs font-medium text-white/60">
                      <FileText className="h-3.5 w-3.5" />
                      Certificate copies available on request
                    </div>
                  </div>
                </div>
                {/* Corner bracket */}
                <div className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r border-t border-signal-amber/0 transition-colors duration-300 group-hover:border-signal-amber/40" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTAs */}
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-obsidian transition-all duration-200 hover:bg-gray-100 active:scale-95"
            >
              View Documentation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5 active:scale-95"
            >
              <Download className="h-4 w-4" />
              Download Catalog
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}