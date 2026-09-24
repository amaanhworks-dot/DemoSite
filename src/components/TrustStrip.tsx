import { ShieldCheck, Award, Factory, Headphones, BadgeCheck } from 'lucide-react';
import { TRUST_ITEMS } from '@/data/site';

const ICONS = [Award, BadgeCheck, Factory, ShieldCheck, Headphones];

export function TrustStrip() {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-0">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={item}
                className={`flex items-center gap-2.5 ${
                  i > 0 ? 'sm:border-l sm:border-gray-100 sm:pl-6' : ''
                }`}
              >
                <Icon className="h-4 w-4 text-safety-red" />
                <span className="text-xs font-medium text-graphite sm:text-sm">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
