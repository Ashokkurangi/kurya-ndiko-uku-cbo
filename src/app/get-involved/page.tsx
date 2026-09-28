import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Crumbs, PageFrame } from "@/components/PageShell";
import { DONATE_HREF, contactHref, photos, waysToHelp } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Get Involved",
  description:
    "Ways to support Kurya Ndiko Uku CBO in Malawi: donate, support children's nutrition, education, healthcare, vulnerable children and community transport, become a well-wisher or volunteer.",
  path: "/get-involved",
  image: photos.porridgeBoy,
});

// Layout: orange two-column header, a grid of action tiles, a closing quote strip.
export default function GetInvolved() {
  return (
    <PageFrame>
      <section className="bg-brand-orange px-4 py-14 text-[#3a2413] sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-end gap-8 lg:grid-cols-2">
          <div>
            <Crumbs title="Get Involved" />
            <h1 className="mt-5 font-display text-4xl sm:text-6xl">Get Involved</h1>
            <p className="mt-3 font-display text-2xl">Be part of the journey.</p>
          </div>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>We are a community-based organisation, and every bit of support helps the children and families we work with.</p>
            <div className="flex flex-wrap gap-4">
              <Button href={DONATE_HREF} variant="green">Donate Now</Button>
              <Button href={contactHref("well-wisher")} variant="white">Become a Well-Wisher</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <h2 className="sr-only">Ways to support us</h2>
        <ul className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {waysToHelp.map((item) => (
            <li key={item.id} id={item.id}>
              <Link href={item.href} className="group flex h-full flex-col gap-4 rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange motion-reduce:hover:translate-y-0 sm:flex-row sm:gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-green text-white">
                  <Icon name={item.icon} className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-green">{item.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed">{item.text}</p>
                  <p className="mt-4 flex items-center gap-2 font-bold uppercase tracking-wide text-brand-orange-dark">
                    {item.action} <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-cream px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg leading-relaxed">You do not have to make a huge contribution to become part of this work. Sharing our story can also help more people understand the needs of children in our community.</p>
          <p className="mt-8 font-display text-3xl text-brand-green sm:text-4xl">Together, Pachoko Pachoko, We Move Forward.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={DONATE_HREF}>Support Our Children</Button>
            <Button href="/contact-us" variant="green">Contact Us</Button>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
