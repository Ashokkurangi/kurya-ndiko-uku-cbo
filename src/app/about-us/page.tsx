import Image from "next/image";
import Link from "next/link";
import { CommunitySection } from "@/components/CommunitySection";
import { CtaBanner } from "@/components/CtaBanner";
import { LeadershipSection } from "@/components/Leadership";
import { Crumbs, PageFrame } from "@/components/PageShell";
import { RegistrationCertificate } from "@/components/RegistrationCertificate";
import { MissionSection, StorySection } from "@/components/Story";
import { SupportersSection } from "@/components/Supporters";
import type { Metadata } from "next";
import { SITE_URL, photos } from "@/content/site";

const description =
  "The story of Kurya Ndiko Uku Community Based Organisation in Malawi: community work since 2005, registered as a CBO in 2010, our mission, leadership, supporters and registration.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "About Us | Kurya Ndiko Uku CBO",
  description,
  alternates: { canonical: "/about-us" },
  openGraph: {
    type: "website",
    url: "/about-us",
    siteName: "Kurya Ndiko Uku Community Based Organisation",
    title: "About Us | Kurya Ndiko Uku CBO",
    description,
    images: [{ url: photos.mealTable.src, alt: photos.mealTable.alt }],
  },
};

const sections = [
  { label: "Our Story", href: "#our-story" },
  { label: "Our Mission", href: "#our-mission" },
  { label: "Our Leadership", href: "#our-leadership" },
  { label: "Our Community", href: "#our-community" },
  { label: "Our Supporters", href: "#our-supporters" },
  { label: "CBO Registration", href: "#cbo-registration" },
];

// Layout: story-style split intro with an arched photo, an in-page section menu,
// then story, orange quote band, mission, leadership, community, supporters and registration.
export default function AboutUs() {
  return (
    <PageFrame>
      <section className="bg-cream px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Crumbs title="About Us" className="text-brand-brown" />
            <h1 className="mt-6 font-display text-4xl text-brand-green sm:text-5xl">About Kurya Ndiko Uku Community Based Organisation</h1>
            <p className="mt-4 text-2xl font-bold leading-snug text-brand-brown">
              A community-based organisation working directly with children, caregivers and families in Malawi.
            </p>
            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>Our community work began in 2005, when we saw how unwell many children were because of poor nutrition. We were formally registered as a Community Based Organisation on 30 July 2010.</p>
              <p>Today we support children, caregivers and community members across 17 villages.</p>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[999px] rounded-b-3xl shadow-xl">
            <Image src={photos.mealTable.src} alt={photos.mealTable.alt} fill priority sizes="(min-width: 1024px) 420px, 90vw" className="object-cover object-top" />
          </div>
        </div>
      </section>

      <nav aria-label="About us sections" className="sticky top-[67px] z-40 border-b border-sand bg-white/95 backdrop-blur sm:top-[75px]">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {sections.map((s) => (
            <li key={s.href} className="shrink-0">
              <Link href={s.href} className="block rounded-full px-4 py-2 text-sm font-semibold text-brand-green ring-1 ring-brand-green/20 transition hover:bg-brand-green hover:text-white">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <StorySection className="scroll-mt-16" />

      <section className="bg-brand-orange px-4 py-14 text-[#3a2413] sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-3xl sm:text-4xl">Pachoko Pachoko — Little by Little</p>
          <p className="mt-4 text-lg leading-relaxed">
            Change does not always happen overnight. Sometimes it starts with a cup of tea, a conversation, a shared meal or someone deciding to help.
          </p>
          <p className="mt-3 text-lg font-bold">Pachoko pachoko — little by little — we move forward together.</p>
        </div>
      </section>

      <MissionSection className="scroll-mt-16" />
      <LeadershipSection className="scroll-mt-16 bg-sand" />
      <CommunitySection className="scroll-mt-16 bg-brand-green text-white" />
      <SupportersSection detailed className="scroll-mt-16 bg-cream" />
      <RegistrationCertificate className="scroll-mt-16" />
      <CtaBanner heading="Stand With Our Children" />
    </PageFrame>
  );
}
