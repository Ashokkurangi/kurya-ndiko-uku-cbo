import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Crumbs, PageFrame } from "@/components/PageShell";
import { DONATE_HREF, helpCards } from "@/content/site";

export const metadata: Metadata = {
  title: "Get Involved | Kurya Ndiko Uku CBO",
  description: "Donate, support education, support the Breakfast Club or become a partner of Kurya Ndiko Uku CBO.",
};

// Donate goes to /donate; the other actions go to Contact until more pages exist.
const hrefs = [DONATE_HREF, "/contact-us", "/contact-us", "/contact-us"];
const actions = ["Give now", "Get in touch", "Get in touch", "Get in touch"];

// Layout: orange two-column header, 2x2 large action tiles, a quote strip.
export default function GetInvolved() {
  return (
    <PageFrame>
      <section className="bg-brand-orange px-4 py-14 text-white sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-end gap-8 lg:grid-cols-2">
          <div>
            <Crumbs title="Get Involved" />
            <h1 className="mt-5 font-display text-4xl sm:text-6xl">Be Part of the Journey</h1>
          </div>
          <p className="text-lg leading-relaxed">
            Our work is rooted in the belief that communities can make a difference when people come together. You do not have to make a huge contribution to become part of that change.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {helpCards.map((item, i) => (
            <Link key={item.title} href={hrefs[i]} className="group flex flex-col gap-4 sm:flex-row sm:gap-6 rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-green text-white">
                <Icon name={item.icon} className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-green">{item.title}</h2>
                <p className="mt-2 text-lg leading-relaxed">{item.text}</p>
                <p className="mt-4 font-bold uppercase tracking-wide text-brand-orange-dark">{actions[i]} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg leading-relaxed">A small donation can help provide food. A school supply can help a child learn. Support for education can help a child continue their journey. A partnership can help a community project grow. And sharing our story can help more people understand the needs of children in our community.</p>
          <p className="mt-8 font-display text-3xl text-brand-green sm:text-4xl">Together, Pachoko Pachoko, We Move Forward.</p>
          <div className="mt-8"><Button href={DONATE_HREF}>Donate Today</Button></div>
        </div>
      </section>
    </PageFrame>
  );
}
