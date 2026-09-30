import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Icon, type IconName } from "@/components/Icon";
import { Crumbs, PageFrame } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact Us | Kurya Ndiko Uku CBO",
  description: "Get in touch with Kurya Ndiko Uku CBO, a Community Based Organisation in Mzimba, Northern Malawi.",
};

const details: { title: string; icon: IconName; value: string; placeholder?: boolean }[] = [
  { title: "Location", icon: "pin", value: "Mzimba, Northern Malawi" },
  { title: "Postal Address", icon: "building", value: "P.O. BOX 78, Mzimba, Malawi" },
  { title: "Email", icon: "mail", value: "lexahharrison@gmail.com" },
  { title: "Phone", icon: "phone", value: "+265 999 312 954 / +265 888 055 740" },
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
                <Fragment key={d.title}>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-brand-orange">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-brand-orange">{d.title}</p>
                      <p className={d.placeholder ? "italic text-white/70" : ""}>{d.value}</p>
                    </div>
                  </li>
                  {d.title === "Location" && (
                    <li className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                        <Image
                          src="/images/Wikipedia-logo-v2-en-25-alt.svg.webp"
                          alt="Wikipedia"
                          width={26}
                          height={30}
                          className="h-6 w-auto object-contain"
                        />
                      </span>
                      <a
                        href="https://en.wikipedia.org/wiki/Mzimba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:text-white"
                      >
                        Learn more about Mzimba
                        <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    </li>
                  )}
                </Fragment>
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
