import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  BreakfastClub,
  Gallery,
  Community,
  DonateCta,
  EducationNutrition,
  HowYouCanHelp,
  Impact,
  Mission,
  Nursery,
  WhatWeDo,
  WhoWeAre,
  WhySupport,
} from "@/components/sections";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <WhoWeAre />
        <Mission />
        <WhatWeDo />
        <Nursery />
        <BreakfastClub />
        <EducationNutrition />
        <WhySupport />
        <HowYouCanHelp />
        <Community />
        <Impact />
        <DonateCta />
      </main>
      <Footer />
    </div>
  );
}
