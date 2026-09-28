import Link from "next/link";
import { programmes, type Programme } from "@/content/site";
import { Icon } from "./Icon";
import { card, iconBox } from "./ui";

/** Compact card grid; each card links to the full programme on the Education & Programs page. */
export function ProgrammeCards({ items = programmes }: { items?: Programme[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <li key={p.id}>
          <Link href={`/education-programs#${p.id}`} className={`${card} group flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange`}>
            <div className={iconBox}><Icon name={p.icon} className="h-7 w-7" /></div>
            <h3 className="text-xl font-bold text-brand-green">{p.title}</h3>
            <p className="mt-2 flex-1 leading-relaxed">{p.summary}</p>
            <p className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-orange-dark">
              Learn more <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Full programme write-up, numbered, with an optional point list and "current situation" note. */
export function ProgrammeDetail({ programme, index }: { programme: Programme; index: number }) {
  return (
    <article id={programme.id} className="border-b border-brand-green/20 py-10 first:pt-0 last:border-0">
      <div className="flex gap-5 sm:gap-6">
        <span className="font-display text-4xl text-brand-orange sm:text-5xl" aria-hidden="true">{index + 1}</span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <Icon name={programme.icon} className="h-7 w-7 shrink-0 text-brand-green" />
            <h2 className="text-2xl font-bold text-brand-green">{programme.title}</h2>
          </div>
          <p className="mt-2 text-lg font-semibold text-brand-brown">{programme.summary}</p>
          <div className="mt-4 space-y-3 text-lg leading-relaxed">
            {programme.details.map((d) => <p key={d}>{d}</p>)}
          </div>
          {programme.points && (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {programme.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          )}
          {programme.note && (
            <p className="mt-6 rounded-2xl border-l-4 border-brand-orange bg-cream p-5 leading-relaxed">{programme.note}</p>
          )}
        </div>
      </div>
    </article>
  );
}
