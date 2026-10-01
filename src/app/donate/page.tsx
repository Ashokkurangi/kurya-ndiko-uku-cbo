import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Icon, type IconName } from "@/components/Icon";
import { Crumbs, PageFrame } from "@/components/PageShell";
import { PAYCHANGU_DONATE_HREF } from "@/content/site";

export const metadata: Metadata = {
  title: "Donate | Kurya Ndiko Uku CBO",
  description: "Support education, nutrition and community programs for children in Northern Malawi with a donation to Kurya Ndiko Uku CBO.",
};

const impact = [
  "A small donation can help provide food.",
  "A school supply can help a child learn.",
  "Support for education can help a child continue their journey.",
  "A partnership can help a community project grow.",
];

// Bank Transfer details are verified. Other methods await confirmed details.
const bankDetails: { label: string; value: string; wide?: boolean }[] = [
  { label: "Account Name", value: "Mbatose" },
  { label: "Account Number", value: "9100006419906" },
  { label: "SWIFT Code", value: "SBICMWMX" },
  { label: "Bank", value: "Standard Bank" },
  { label: "Branch", value: "Mzimba Branch" },
  { label: "Branch Address", value: "A Long M'mbwelwa Road, P.O. BOX 104, Mzuzu, Malawi", wide: true },
  { label: "Facility for Funding", value: "Bana Mbatose Nursery School", wide: true },
];

// Mobile Money and Online Donation are hidden until verified details are available.
const ways: { title: string; icon: IconName; placeholder?: boolean }[] = [
  { title: "Bank Transfer", icon: "bank" },
];

// Layout: full-height split. Orange message panel on the left, giving
// details and ways to give on the right.
export default function Donate() {
  return (
    <PageFrame>
      <div className="grid lg:grid-cols-[5fr_6fr]">
        <section className="bg-brand-orange px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-24">
          <div className="lg:ml-auto lg:max-w-xl">
            <Crumbs title="Donate" />
            <h1 className="mt-6 font-display text-5xl sm:text-6xl">Donate</h1>
            <p className="mt-6 text-3xl font-bold leading-snug">Help Us Give Children a Brighter Start</p>
            <p className="mt-5 text-lg leading-relaxed">
              Your support can help us continue providing education, nutrition and community support for children in Northern Malawi.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Whether you choose to support a breakfast, educational resources, early years learning or a wider community initiative, your contribution can become part of a child&apos;s journey.
            </p>
            <p className="mt-8 border-l-4 border-white pl-4 font-display text-2xl">Give What You Can. Help Where It Matters.</p>
          </div>
        </section>

        <section className="px-6 py-14 sm:px-10 lg:px-14 lg:py-24">
          <div className="lg:max-w-xl">
            <h2 className="font-display text-3xl text-brand-green">Small Contributions Can Create Meaningful Change</h2>
            <p className="mt-4 text-lg leading-relaxed">You do not have to make a huge contribution to become part of that change.</p>
            <ul className="mt-5 space-y-3">
              {impact.map((line) => (
                <li key={line} className="flex items-start gap-3 text-lg">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-white"><Icon name="check" className="h-4 w-4" /></span>
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-2xl bg-brand-green p-6 text-white shadow-sm sm:p-8">
              <h2 className="font-display text-2xl">Donate Online</h2>
              <p className="mt-2 text-white/90">Make a secure online donation to support our children and community programs.</p>
              <div className="mt-5">
                <Button href={PAYCHANGU_DONATE_HREF} variant="outline" external>Donate Now</Button>
              </div>
            </div>

            <h2 className="mt-10 font-display text-2xl text-brand-brown">Ways to Give</h2>
            <ul className="mt-4 divide-y divide-brand-brown/15 rounded-2xl bg-cream ring-1 ring-brand-brown/10">
              {ways.map((w) => (
                <li key={w.title} className="flex items-start gap-4 px-5 py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange-dark"><Icon name={w.icon} className="h-5 w-5" /></span>
                  <div className="w-full">
                    <p className="font-bold text-brand-green">{w.title}</p>
                    {w.placeholder ? (
                      <p className="italic text-brand-brown/70">[Details to be provided]</p>
                    ) : (
                      <dl className="mt-3 grid gap-x-6 gap-y-2 rounded-xl bg-white p-4 shadow-sm ring-1 ring-brand-brown/10 sm:grid-cols-2">
                        {bankDetails.map((d) => (
                          <div key={d.label} className={d.wide ? "sm:col-span-2" : ""}>
                            <dt className="text-xs font-bold uppercase tracking-wider text-brand-brown/60">{d.label}</dt>
                            <dd className="break-words font-semibold text-brand-brown">{d.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact-us" variant="green">Contact Us</Button>
              <span className="text-brand-brown">Questions about giving? We&apos;re happy to help.</span>
            </div>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
