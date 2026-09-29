import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon, type IconName } from "@/components/Icon";
import { Crumbs, PageFrame } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact Us | Kurya Ndiko Uku CBO",
  description: "Get in touch with Kurya Ndiko Uku CBO, a Community Based Organisation in Mzimba, Northern Malawi.",
};

// Only the location and postal address were provided. Replace each remaining placeholder with verified details.
const details: { title: string; icon: IconName; value: string; placeholder?: boolean; sub?: string }[] = [
  {
    title: "Location",
    icon: "pin",
    value: "Mzimba, Northern Malawi",
    sub: "Kurya Ndiko Uku CBO is based in Mzimba, Malawi, in the northern region of the country.",
  },
  { title: "Email", icon: "heart", value: "[Email address to be provided]", placeholder: true },
  { title: "Phone", icon: "people", value: "[Phone number to be provided]", placeholder: true },
  { title: "Postal Address", icon: "school", value: "P.O. BOX 104, Mzuzu, Malawi" },
];

// Layout: compact white header, then a green details sidebar beside a
// message form.
export default function ContactUs() {
  return (
    <PageFrame>
      <section className="border-b border-brand-orange/40 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4">
          <h1 className="font-display text-4xl text-brand-green sm:text-5xl">Contact Us</h1>
          <Crumbs title="Contact Us" className="text-brand-brown" />
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[380px_1fr]">
          <aside className="rounded-3xl bg-brand-green p-8 text-white shadow-lg">
            <h2 className="font-display text-2xl">Our Details</h2>
            <ul className="mt-6 space-y-6">
              {details.map((d) => (
                <li key={d.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-brand-orange">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-brand-orange">{d.title}</p>
                    <p className={d.placeholder ? "italic text-white/70" : ""}>{d.value}</p>
                    {d.sub && (
                      <>
                        <p className="mt-2 text-sm leading-relaxed text-white/80">{d.sub}</p>
                        <a
                          href="https://en.wikipedia.org/wiki/Mzimba"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-2 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand-orange hover:text-white"
                        >
                          Learn more about Mzimba
                          <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </a>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <div className="rounded-3xl bg-cream p-8 md:p-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-dark">Get in Touch</p>
            <h2 className="font-display text-3xl text-brand-green sm:text-4xl">We Would Love to Hear From You</h2>
            <p className="mt-4 text-lg leading-relaxed">Whether you would like to donate, support education, help the Breakfast Club or become a partner, we would be glad to hear from you.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
