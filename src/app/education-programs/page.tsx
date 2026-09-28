import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { Crumbs, PageFrame } from "@/components/PageShell";
import { Heading } from "@/components/Section";
import { educationBlocks, whatWeDo } from "@/content/site";

export const metadata: Metadata = {
  title: "Education & Programs | Kurya Ndiko Uku CBO",
  description: "Early years education, breakfast and nutrition, community development and international partnerships in Northern Malawi.",
};

// Layout: solid green centred header, a sticky-intro + numbered programme list,
// and a dark education/nutrition panel with a photo and icon list.
export default function EducationPrograms() {
  return (
    <PageFrame>
      <section className="bg-brand-green px-4 py-14 text-center text-white sm:px-6 md:py-20">
        <Crumbs title="Education & Programs" className="flex justify-center" />
        <h1 className="mt-5 font-display text-4xl sm:text-5xl">Education &amp; Programs</h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-white/90">We believe that education and nutrition go hand in hand.</p>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Heading eyebrow="What We Do">Supporting Children Through Education, Food &amp; Community</Heading>
            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>A hungry child may struggle to concentrate in class. A child without access to early education may start their school journey already facing disadvantages.</p>
              <p>That is why our work focuses on practical support that addresses children&apos;s immediate needs while helping create opportunities for their future.</p>
            </div>
          </div>
          <ol>
            {whatWeDo.map((item, i) => (
              <li key={item.title} className="flex gap-6 border-b border-brand-green/20 py-8 first:pt-0">
                <span className="font-display text-5xl text-brand-orange">{i + 1}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <Icon name={item.icon} className="h-6 w-6 text-brand-green" />
                    <h2 className="text-2xl font-bold text-brand-green">{item.title}</h2>
                  </div>
                  <p className="mt-2 text-lg leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-brand-brown px-4 py-16 text-white sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image src="/images/4.png" alt="Children sharing a meal at a long table in the dining hall, decorated with flags from supporters around the world" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[50%_65%]" />
          </div>
          <div>
            <Heading eyebrow="Education & Nutrition" light>When Children Are Fed, They Can Focus on Learning</Heading>
            <div className="mt-6 space-y-3 text-lg leading-relaxed text-white/90">
              <p>Education can open doors to opportunities that may otherwise remain out of reach.</p>
              <p>But education becomes harder when children are hungry.</p>
              <p>Our approach connects education and nutrition because both are important to a child&apos;s development.</p>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {educationBlocks.map((b) => (
                <li key={b.title} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 font-semibold">
                  <Icon name={b.icon} className="h-6 w-6 text-brand-orange" /> {b.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
