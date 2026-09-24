import { useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import { TECH_DATA } from '@/data/site';
import { Eyebrow, Reveal, SectionHeading } from '@/components/ui/Primitives';

export function TechnicalData() {
  const [open, setOpen] = useState<string | null>(TECH_DATA[0]?.code ?? null);

  return (
    <section id="technical" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Technical Data / Procurement</Eyebrow>
          <SectionHeading className="mt-5">Everything Procurement Teams Need.</SectionHeading>
        </Reveal>

        {/* Desktop table */}
        <Reveal delay={100}>
          <div className="mt-10 hidden overflow-hidden rounded-xl border border-gray-200 md:block">
            <table className="w-full">
              <thead>
                <tr className="bg-obsidian text-left">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                    Code / Standard
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                    Type
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {TECH_DATA.map((row, i) => (
                  <tr
                    key={row.code}
                    className={`border-t border-gray-100 transition-colors hover:bg-ind-gray ${
                      i % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm font-medium text-obsidian">{row.code}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                          row.type === 'HSN'
                            ? 'bg-signal-amber/10 text-amber-700'
                            : 'bg-safety-red/10 text-safety-red'
                        }`}
                      >
                        {row.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-graphite">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile accordion */}
        <Reveal delay={100}>
          <div className="mt-8 space-y-2 md:hidden">
            {TECH_DATA.map((row) => {
              const isOpen = open === row.code;
              return (
                <div
                  key={row.code}
                  className="overflow-hidden rounded-lg border border-gray-200"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : row.code)}
                    className="flex w-full items-center justify-between gap-3 bg-white px-4 py-3.5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <span className="font-mono text-sm font-medium text-obsidian">{row.code}</span>
                      <span
                        className={`rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase ${
                          row.type === 'HSN'
                            ? 'bg-signal-amber/10 text-amber-700'
                            : 'bg-safety-red/10 text-safety-red'
                        }`}
                      >
                        {row.type}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 text-sm text-gray-500">{row.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
