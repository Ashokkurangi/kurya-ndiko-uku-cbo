import { Button } from "@/components/Button";
import { Icon, type IconName } from "@/components/Icon";
import { Crumbs, PageFrame } from "@/components/PageShell";
import { contactHref, photos } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Donate",
  description:
    "Donate to Kurya Ndiko Uku CBO to help provide food, education, healthcare, clothing and transport for vulnerable children and families across 17 villages in Malawi.",
  path: "/donate",
  image: photos.servingPorridge,
});

const priorities: { title: string; icon: IconName; text: string }[] = [
  { title: "Children's nutrition", icon: "bowl", text: "Most of the funds we receive buy food for children and caregivers. We are currently only able to provide porridge, and hope to restore lunches." },
  { title: "Education", icon: "book", text: "Support for children's education, including university fees for one of our first nursery children." },
  { title: "Vulnerable children", icon: "shirt", text: "Food, clothing, shoes and education-related support for children who need it most." },
  { title: "Healthcare", icon: "medical", text: "Help towards restoring access to community healthcare." },
  { title: "Community transport", icon: "car", text: "Fuel so our vehicle can help children, families and people from the 17 villages when they need transport." },
];

// No donation method has been provided yet. Replace each placeholder with verified details.
const ways: { title: string; icon: IconName }[] = [
  { title: "Bank Transfer", icon: "school" },
  { title: "Mobile Money", icon: "people" },
  { title: "Online Donation", icon: "heart" },
];

// Layout: full-height split. Orange message panel on the left, giving
// priorities and ways to give on the right, then the university appeal.
export default function Donate() {
  return (
    <PageFrame>
      <div className="grid lg:grid-cols-[5fr_6fr]">
        <section className="bg-brand-orange px-6 py-14 text-[#3a2413] sm:px-10 lg:px-14 lg:py-24">
          <div className="lg:ml-auto lg:max-w-xl">
            <Crumbs title="Donate" />
            <h1 className="mt-6 font-display text-5xl sm:text-6xl">Donate</h1>
            <p className="mt-6 text-3xl font-bold leading-snug">Support Our Children</p>
            <p className="mt-5 text-lg leading-relaxed">
              Your support helps Kurya Ndiko Uku Community Based Organisation respond to the real needs of children, caregivers and families across 17 villages in Malawi.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              In recent years harvests have not been good, and we have had to reduce the meals we provide. Additional support can help us restore and expand our food programme.
            </p>
            <p className="mt-8 border-l-4 border-[#3a2413] pl-4 font-display text-2xl">Give What You Can. Help Where It Matters.</p>
          </div>
        </section>

        <section className="px-6 py-14 sm:px-10 lg:px-14 lg:py-24">
          <div className="lg:max-w-xl">
            <h2 className="font-display text-3xl text-brand-green">Where Your Support Goes</h2>
            <ul className="mt-6 space-y-5">
              {priorities.map((p) => (
                <li key={p.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green text-white"><Icon name={p.icon} className="h-5 w-5" /></span>
                  <div>
                    <p className="font-bold text-brand-green">{p.title}</p>
                    <p className="leading-relaxed">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-2xl text-brand-brown">Ways to Give</h2>
            <ul className="mt-4 divide-y divide-brand-brown/15 rounded-2xl bg-cream ring-1 ring-brand-brown/10">
              {ways.map((w) => (
                <li key={w.title} className="flex items-center gap-4 px-5 py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange-dark"><Icon name={w.icon} className="h-5 w-5" /></span>
                  <div>
                    <p className="font-bold text-brand-green">{w.title}</p>
                    <p className="italic text-brand-brown/80">[Details to be provided]</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={contactHref("donation")} variant="green">Contact Us to Donate</Button>
              <span className="text-brand-brown">Questions about giving? We&apos;re happy to help.</span>
            </div>
          </div>
        </section>
      </div>

      <section id="her-education" className="bg-sand px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-dark">Support Her Education</p>
          <h2 className="font-display text-3xl leading-tight text-brand-green sm:text-4xl">From Nursery School to University</h2>
          <p className="mt-6 text-lg leading-relaxed">
            One of our first nursery school children, who lost both of her parents when she was six years old, later became a caregiver within our organisation and has now been selected to attend one of the top universities in Malawi.
          </p>
          <p className="mt-4 text-lg font-semibold leading-relaxed text-brand-brown">We are seeking well-wishers who can help support her university fees.</p>
          <div className="mt-8"><Button href={contactHref("education")}>Support Her Education</Button></div>
        </div>
      </section>
    </PageFrame>
  );
}
