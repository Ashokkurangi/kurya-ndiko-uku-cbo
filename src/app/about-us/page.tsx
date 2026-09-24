import type { Metadata } from "next";
import Image from "next/image";
import { Crumbs, PageFrame } from "@/components/PageShell";
import { Heading, Highlight } from "@/components/Section";
import { missionItems } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us | Kurya Ndiko Uku CBO",
  description: "Learn about Kurya Ndiko Uku CBO, a community-led organisation supporting children and families near Mzimba, Northern Malawi.",
};

// Layout: story-style split intro with an arched photo, an orange quote band,
// a numbered mission list, and a centred green community section.
export default function AboutUs() {
  return (
    <PageFrame>
      <section className="bg-cream px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Crumbs title="About Us" className="text-brand-brown" />
            <h1 className="mt-6 font-display text-4xl text-brand-green sm:text-5xl">About Us</h1>
            <p className="mt-4 text-2xl font-bold leading-snug text-brand-brown">
              “Kurya Ndiko Uku” means “This is the way to eat.”
            </p>
            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>Kurya Ndiko Uku CBO is a Community Based Organisation working with local communities near Mzimba, Northern Malawi.</p>
              <p>Our name reflects something at the heart of our work: food, hospitality, community and looking after one another.</p>
              <p>We are a community-led organisation committed to helping children and families facing poverty and difficult circumstances.</p>
              <p>Our work brings together people from Malawi and friends around the world who believe that small acts of support can create meaningful change.</p>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[999px] rounded-b-3xl shadow-xl">
            <Image
              src="/images/village-children.jpg"
              alt="Children and a supporter gathered outside a village home in Malawi"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover object-[35%_50%]"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-orange px-4 py-14 text-white sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-3xl sm:text-4xl">Pachoko Pachoko — Little by Little</p>
          <p className="mt-4 text-lg leading-relaxed">
            Change does not always happen overnight. Sometimes it starts with a cup of tea, a conversation, a shared meal or someone deciding to help.
          </p>
          <p className="mt-3 text-lg font-bold">Pachoko pachoko — little by little — we move forward together.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Heading eyebrow="Our Mission">Creating Opportunities for Children</Heading>
          <ol className="mt-10 grid gap-x-16 md:grid-cols-2">
            {missionItems.map((item, i) => (
              <li key={item.title} className="flex gap-5 border-t border-brand-green/20 py-6">
                <span className="font-display text-4xl text-brand-orange">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-xl font-bold text-brand-green">{item.title}</h2>
                  <p className="mt-1 leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-brand-green px-4 py-16 text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Heading eyebrow="Our Community" center light>From Malawi to Friends Around the World</Heading>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            <p>Our community reaches far beyond the villages where our work takes place.</p>
            <p>Friends and supporters from different parts of the world have joined us in raising awareness, sharing our experiences and supporting projects that benefit children.</p>
            <p>What began as conversations between people sitting together on a mat has grown into a wider community connected by a common purpose.</p>
            <p className="font-bold">We share stories. We share photographs. We share ideas. We support one another.</p>
            <p>And, little by little, we make progress.</p>
          </div>
          <div className="mt-8 inline-block text-left"><Highlight title="Pachoko Pachoko" light><p>Together we can help create brighter opportunities for children in Malawi.</p></Highlight></div>
        </div>
      </section>
    </PageFrame>
  );
}
