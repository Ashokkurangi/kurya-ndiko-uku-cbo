import Image from "next/image";
import type { CSSProperties } from "react";
import { DONATE_HREF, photos } from "@/content/site";
import { Button } from "./Button";
import { HeroParallax } from "./HeroParallax";

const intro =
  "Kurya Ndiko Uku Community Based Organisation works with children, caregivers and communities across 17 villages in Malawi, providing practical support in nutrition, education, healthcare and essential needs.";

// Inline CSS custom properties / delays for the motion classes in globals.css.
const vars = (v: Record<string, string | number>) => v as CSSProperties;
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button href={DONATE_HREF}>Donate Now</Button>
      <Button href="/about-us#our-story" variant="outline">Learn Our Story</Button>
    </div>
  );
}

export function Hero() {
  return (
    <HeroParallax className="relative flex flex-col overflow-hidden lg:block lg:h-[clamp(620px,calc(100svh-75px),780px)]">
      {/* Photo: full width. Scroll parallax > fade-in reveal > one-time slow zoom. */}
      <div className="relative h-[620px] overflow-hidden sm:h-[640px] lg:absolute lg:inset-0 lg:h-auto">
        <div className="hero-depth absolute inset-0" style={vars({ "--scroll": 0.25 })}>
          <div className="hero-reveal absolute inset-0">
            <div className="hero-kenburns absolute inset-0">
              <Image
                src={photos.hero.src}
                alt={photos.hero.alt}
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
        {/* Gradients keep the white text readable: from the bottom on mobile, from the left on desktop */}
        <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-black/85 via-black/55 to-transparent lg:hidden" />
        <div className="absolute inset-y-0 left-0 hidden w-2/3 bg-gradient-to-r from-black/75 via-black/45 to-transparent lg:block" />
      </div>

      {/* Heading over the photo: along the bottom of the photo on mobile (keeps the painted sign clear), vertically centred on desktop. */}
      <div className="absolute inset-x-0 top-0 flex h-[620px] items-end pb-8 sm:h-[640px] sm:pb-10 lg:bottom-48 lg:h-auto lg:items-center lg:pb-0">
        {/* Site container (matches header/sections). On desktop the text is inset by the bar's padding (px-6 + px-10 = px-16) so it lines up with the orange bar text. */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16">
          <div className="max-w-2xl text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
            <h1 style={delay(600)} className="hero-fade-up font-display text-3xl leading-tight sm:text-4xl xl:text-[2.6rem]">
              Supporting Children.<br />Strengthening Communities.<br />Creating Opportunities.
            </h1>
            <p style={delay(900)} className="hero-fade-up mt-3 max-w-xl text-base leading-relaxed sm:mt-4 sm:text-lg">{intro}</p>
            <div style={delay(1200)} className="hero-fade-up mt-5 sm:mt-6 [text-shadow:none]"><HeroActions /></div>
          </div>
        </div>
      </div>

      {/* Orange information bar. Dark text on the light orange for readable contrast. */}
      <div className="relative z-10 w-full lg:absolute lg:inset-x-0 lg:bottom-4 lg:mx-auto lg:max-w-7xl lg:px-6">
        <div style={delay(1500)} className="hero-fade-up grid gap-4 bg-[#FF9A2E] px-4 py-6 text-[#3a2413] shadow-lg sm:px-6 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-8 lg:bg-[#FF9A2E]/95 lg:px-10 lg:py-5">
          <div className="lg:border-r lg:border-[#3a2413]/25 lg:pr-8">
            <p className="font-display text-xl uppercase leading-none sm:text-2xl lg:text-3xl">Pachoko<br className="hidden lg:inline" /> Pachoko</p>
            <p className="mt-1.5 font-display text-base uppercase tracking-wider lg:text-lg">Little by Little</p>
          </div>
          <div>
            <p className="font-display text-lg uppercase leading-tight sm:text-xl lg:text-2xl">Nutrition · Education · Healthcare · Essential Needs</p>
            <p className="mt-1.5 text-base font-medium leading-relaxed">
              Community work since 2005 · Formally registered as a CBO in 2010 · Across 17 villages in Malawi
            </p>
          </div>
        </div>
      </div>

      {/* Notch, as in the original template */}
      <div className="absolute bottom-0 left-1/2 z-10 hidden h-0 w-0 -translate-x-1/2 border-x-[16px] border-t-[16px] border-x-transparent border-t-cream lg:block" aria-hidden="true" />
    </HeroParallax>
  );
}
