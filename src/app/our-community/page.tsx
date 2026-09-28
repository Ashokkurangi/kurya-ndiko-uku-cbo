import Image from "next/image";
import { CommunitySection } from "@/components/CommunitySection";
import { CtaBanner } from "@/components/CtaBanner";
import { Crumbs, PageFrame } from "@/components/PageShell";
import { Heading, Highlight, Section } from "@/components/Section";
import { SupportersSection } from "@/components/Supporters";
import { body } from "@/components/ui";
import { photos } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our Community",
  description:
    "Kurya Ndiko Uku CBO works with children, caregivers and families across 17 villages in Malawi, providing community support in nutrition, education, healthcare, basic needs and transport.",
  path: "/our-community",
  image: photos.communityWomen,
});

// Layout: split header with a wide photo, the five support areas on green,
// a transport feature, then supporters and CTA.
export default function OurCommunity() {
  return (
    <PageFrame>
      <section className="bg-sand px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Crumbs title="Our Community" className="text-brand-brown" />
            <h1 className="mt-6 font-display text-4xl text-brand-green sm:text-5xl">Our Community</h1>
            <p className="mt-4 text-2xl font-bold leading-snug text-brand-brown">Working with communities across 17 villages in Malawi.</p>
            <div className={`mt-6 ${body}`}>
              <p>Kurya Ndiko Uku is a community-based organisation working directly with local children, caregivers and families.</p>
              <p>We believe sustainable change begins within the community. We work to understand the needs of children and families and use the resources available to us to provide practical support.</p>
            </div>
          </div>
          <div className="relative aspect-[1528/1029] overflow-hidden rounded-3xl shadow-lg">
            <Image src={photos.communityWomen.src} alt={photos.communityWomen.alt} fill priority sizes="(min-width: 1280px) 616px, (min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <CommunitySection id="support-areas" eyebrow="How We Help" title="Main Areas of Community Support" showIntro={false} />

      <Section id="transport">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Community Transport">A Vehicle for the 17 Villages</Heading>
            <div className={`mt-6 ${body}`}>
              <p>Our UK support team paid for a 7-seater vehicle for the CBO. It has become an important practical resource for our organisation and the wider community.</p>
              <p>People from the 17 villages can request transport when they need it, such as when a child becomes sick, a CBO member needs medical assistance or a family needs urgent transport. Fuel is purchased when possible, and the CBO looks after the vehicle&apos;s maintenance.</p>
            </div>
          </div>
          <div className="rounded-3xl bg-cream p-8 shadow-md ring-1 ring-black/5">
            <Highlight title="Rooted in the community">
              <p className="text-lg">Our work focuses on responding to real needs using the resources available to us.</p>
            </Highlight>
          </div>
        </div>
      </Section>

      <SupportersSection />
      <CtaBanner heading="Get Involved With Our Community" primary={{ label: "Get Involved", href: "/get-involved" }} secondary={{ label: "Donate Now", href: "/donate" }} />
    </PageFrame>
  );
}
