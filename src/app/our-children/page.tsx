import type { Metadata } from "next";
import Image from "next/image";
import { Crumbs, PageFrame } from "@/components/PageShell";
import { Heading } from "@/components/Section";
import { Icon } from "@/components/Icon";
import { nurseryPoints } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Children | Kurya Ndiko Uku CBO",
  description: "The Bana Mbatose Nursery and Breakfast Club support children from local villages near Mzimba, Northern Malawi.",
};

const needs = [
  { word: "Food", color: "bg-brand-green" },
  { word: "Care", color: "bg-brand-orange" },
  { word: "Encouragement", color: "bg-brand-brown" },
];

// Layout: full-width photo header, image-left nursery block, an orange
// ribbon, then a text-left breakfast block with three colour tiles.
export default function OurChildren() {
  return (
    <PageFrame>
      <section className="relative flex min-h-[320px] items-end px-4 pb-10 sm:px-6 md:min-h-[400px]">
        <Image src="/images/children-band.jpg" alt="Children from a village community in Malawi looking towards the camera" fill priority sizes="100vw" className="-z-10 object-cover object-top" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="mx-auto w-full max-w-7xl text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
          <h1 className="font-display text-4xl sm:text-6xl">Our Children</h1>
          <Crumbs title="Our Children" className="mt-2" />
        </div>
      </section>

      <section id="nursery" className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            <Image src="/images/play.jpg" alt="Children playing together outdoors in a village" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <Heading eyebrow="Bana Mbatose Nursery">“They Are All Ours”</Heading>
            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p><strong>Bana Mbatose</strong> means <strong>“They are all ours.”</strong></p>
              <p>Our nursery was created to give young children in the local community access to early years education in a welcoming environment.</p>
              <p>For many children, these early years are an important foundation for their future education.</p>
              <p>The nursery aims to provide opportunities for children to:</p>
            </div>
            <ul className="mt-4 flex flex-wrap gap-3">
              {nurseryPoints.map((p) => (
                <li key={p} className="flex items-center gap-2 rounded-full bg-cream px-4 py-2 font-medium text-brand-green ring-1 ring-brand-green/20">
                  <Icon name="check" className="h-4 w-4" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-orange px-4 py-10 text-center text-white sm:px-6">
        <p className="font-display text-4xl sm:text-5xl">They are all ours.</p>
      </section>

      <section id="breakfast" className="bg-cream px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Bana Mbatose Breakfast Club">Starting the Day With Food, Care &amp; Opportunity</Heading>
            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>For a child to learn, they need more than a classroom.</p>
              <p>They need the opportunity to concentrate on learning rather than worrying about where their next meal will come from.</p>
              <p>The <strong>Bana Mbatose Breakfast Club</strong> was created to help provide children from local villages with a nutritious breakfast.</p>
              <p>The initiative brings together our local community and supporters from around the world to help children start their day with food and encouragement.</p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-lg font-bold text-brand-brown">For a child to learn, they need…</p>
            <ul className="space-y-4">
              {needs.map((n) => (
                <li key={n.word} className={`rounded-2xl px-8 py-6 font-display text-3xl text-white shadow-md ${n.color}`}>They need {n.word.toLowerCase()}.</li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border-l-4 border-brand-orange bg-white p-6 shadow-md">
              <p className="text-xl font-bold text-brand-brown">A Breakfast Can Mean More Than a Meal</p>
              <p className="mt-2 leading-relaxed">A nutritious breakfast can help a child arrive at school ready to learn, participate and enjoy their day.</p>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
