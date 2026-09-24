import { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PRODUCT_CATEGORIES, waLink, type Product } from '@/data/site';
import { Eyebrow, Reveal, SectionHeading } from '@/components/ui/Primitives';

export function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const category = PRODUCT_CATEGORIES[activeTab];

  return (
    <section id="products" className="bg-ind-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal>
          <Eyebrow>02 / Product Catalog</Eyebrow>
          <SectionHeading className="mt-5">
            Protection Systems, Engineered for Performance.
          </SectionHeading>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-graphite">
            Passive fire protection aur retardant solutions ka poora range — commercial aur industrial
            projects ke liye. Standards clearly listed, bulk rates on request.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={100}>
          <div className="mt-10 -mx-4 overflow-x-auto px-4 no-scrollbar sm:mx-0 sm:px-0">
            <div className="flex min-w-max gap-2 border-b border-gray-200 sm:min-w-0 sm:gap-1">
              {PRODUCT_CATEGORIES.map((cat, i) => {
                const Icon = cat.icon;
                const active = i === activeTab;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3.5 text-sm font-semibold transition-all duration-200 sm:px-5 ${
                      active
                        ? 'border-safety-red text-obsidian'
                        : 'border-transparent text-gray-400 hover:text-graphite'
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${active ? 'text-safety-red' : ''}`} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Product cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.products.map((product, i) => (
            <ProductCard key={product.name} product={product} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-graphite/30 hover:shadow-xl hover:shadow-gray-200/60">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-obsidian">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
          <span className="absolute left-3 top-3 rounded bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-obsidian backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-bold text-obsidian">{product.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">{product.description}</p>

          {/* Standards */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.standards.map((std) => (
              <span
                key={std}
                className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 font-mono text-[10px] font-medium text-graphite"
              >
                {std}
              </span>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-4 flex items-baseline justify-between border-t border-gray-100 pt-4">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                Bulk Pricing
              </div>
              <div className="font-display text-base font-bold text-obsidian">{product.price}</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-4 flex gap-2">
            <a
              href="#quote"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-gray-200 px-3 py-2.5 text-xs font-semibold text-graphite transition-colors hover:border-obsidian hover:bg-obsidian hover:text-white"
            >
              View Details
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={waLink(`Hello Proshield Systems, I need a bulk quotation for ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-[1.5] items-center justify-center gap-1.5 rounded-md bg-emerald-600 px-3 py-2.5 text-xs font-semibold text-white transition-all hover:bg-emerald-700 active:scale-95"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Get Bulk WhatsApp Quote
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}