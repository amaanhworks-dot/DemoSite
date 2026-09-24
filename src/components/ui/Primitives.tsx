import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type EyebrowProps = {
  children: ReactNode;
  dark?: boolean;
};

export function Eyebrow({ children, dark = false }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-3 text-xs font-semibold tracking-ultra-wide uppercase ${
        dark ? 'text-signal-amber' : 'text-safety-red'
      }`}
    >
      <span className={`h-px w-8 ${dark ? 'bg-signal-amber/60' : 'bg-safety-red/60'}`} />
      {children}
    </div>
  );
}

type SectionHeadingProps = {
  children: ReactNode;
  dark?: boolean;
  className?: string;
};

export function SectionHeading({ children, dark = false, className = '' }: SectionHeadingProps) {
  return (
    <h2
      className={`font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
        dark ? 'text-white' : 'text-obsidian'
      } ${className}`}
    >
      {children}
    </h2>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
