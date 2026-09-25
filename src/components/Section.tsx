import type { ReactNode } from "react";

export function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {/* Same container as the header and footer so all content shares one left/right edge. */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function Heading({ eyebrow, children, center, light }: { eyebrow?: string; children: ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : ""}>
      {eyebrow && <p className={`text-sm font-bold uppercase tracking-widest ${light ? "text-brand-orange" : "text-brand-orange-dark"}`}>{eyebrow}</p>}
      <h2 className={`font-display text-3xl leading-tight sm:text-4xl ${light ? "text-white" : "text-brand-green"}`}>{children}</h2>
    </div>
  );
}

export function Highlight({ title, children, light }: { title: string; children?: ReactNode; light?: boolean }) {
  return (
    <blockquote className={`border-l-4 border-brand-orange py-1 pl-5 ${light ? "text-white" : "text-brand-brown"}`}>
      <p className="font-display text-2xl">{title}</p>
      {children && <div className="mt-2 space-y-2">{children}</div>}
    </blockquote>
  );
}
