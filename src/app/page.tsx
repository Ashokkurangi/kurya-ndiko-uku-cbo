import type { Metadata } from "next";
import { CommunitySection } from "@/components/CommunitySection";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProgrammeCards } from "@/components/Programmes";
import { RegistrationCertificate } from "@/components/RegistrationCertificate";
import { Heading, Section } from "@/components/Section";
import { StorySection } from "@/components/Story";
import { SuccessStory } from "@/components/SuccessStory";
import { SupportersSection } from "@/components/Supporters";
import { Gallery, KeyFacts, NutritionAppeal } from "@/components/sections";
import { ORG_NAME, SITE_URL } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Kurya Ndiko Uku CBO | Community Based Organisation Supporting Children in Malawi" },
  description:
    "Kurya Ndiko Uku Community Based Organisation supports children, caregivers and communities across 17 villages in Malawi with nutrition, education, healthcare and essential needs.",
  alternates: { canonical: "/" },
};

// Structured data for search engines. Only verified facts.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: ORG_NAME,
  alternateName: "Kurya Ndiko Uku CBO",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    "A community based organisation in Malawi supporting children, caregivers and communities across 17 villages through nutrition, education, healthcare, basic needs and community transport.",
  address: { "@type": "PostalAddress", addressRegion: "Mzimba, Northern Region", addressCountry: "MW" },
  areaServed: "Mzimba, Malawi",
};

export default function Home() {
  return (
    <div id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main">
        <Hero />
        <KeyFacts />
        <StorySection summary />
        <Section id="programmes">
          <Heading eyebrow="What We Do" center>Practical Support Where It Is Needed</Heading>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed">
            Our work responds to the real needs of children and families, using the resources available to us.
          </p>
          <div className="mt-12"><ProgrammeCards /></div>
        </Section>
        <NutritionAppeal />
        <SuccessStory />
        <CommunitySection />
        <Gallery />
        <SupportersSection />
        <RegistrationCertificate />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
