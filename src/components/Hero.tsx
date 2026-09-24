import Image from "next/image";
import { DONATE_HREF } from "@/content/site";
import { Button } from "./Button";

const intro =
  "Supporting children and families in the Mzimba community of Northern Malawi through education, nutrition, care and community support.";

function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button href={DONATE_HREF}>Donate Now</Button>
      <Button href="/about-us" variant="outline">Learn More</Button>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex flex-col lg:block lg:h-[clamp(600px,calc(100svh-75px),760px)]">
      {/* Photo: full width, natural brightness. Only a light gradient behind the text. */}
      <div className="relative h-[360px] sm:h-[460px] lg:absolute lg:inset-0 lg:h-auto">
        <Image
          src="/images/hero.jpg"
          alt="Children from a village community in Malawi gathered together outdoors"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[50%_25%]"
        />
        <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black/45 to-transparent lg:hidden" />
        <div className="absolute inset-y-0 left-0 hidden w-3/5 bg-gradient-to-r from-black/45 to-transparent lg:block" />
      </div>

      {/* Heading over the photo */}
      <div className="absolute inset-x-0 top-0 px-4 pt-8 sm:px-6 sm:pt-12 lg:bottom-60 lg:flex lg:items-center lg:px-0 lg:pt-0">
        <div className="mx-auto lg:w-[calc(100%-3rem)] lg:max-w-[1200px] lg:px-10">
          <div className="max-w-2xl text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.45)]">
            <h1 className="font-display text-3xl leading-tight sm:text-4xl xl:text-[2.6rem]">
              Helping Children Learn,<br />Grow &amp; Thrive
            </h1>
            <p className="mt-4 hidden max-w-md text-lg leading-relaxed lg:block">{intro}</p>
            <div className="mt-6 hidden lg:block [text-shadow:none]"><HeroActions /></div>
          </div>
        </div>
      </div>

      {/* Orange information bar */}
      <div className="relative z-10 w-full lg:absolute lg:bottom-8 lg:left-1/2 lg:w-[calc(100%-3rem)] lg:max-w-[1200px] lg:-translate-x-1/2">
        <div className="grid gap-5 bg-[#FF9A2E] px-6 py-7 text-white shadow-lg sm:px-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10 lg:bg-[#FF9A2E]/95 lg:px-10">
          <div className="lg:border-r lg:border-white/40 lg:pr-10">
            <p className="font-display text-2xl uppercase leading-none sm:text-3xl lg:text-4xl">Pachoko<br className="hidden lg:inline" /> Pachoko</p>
            <p className="mt-2 font-display text-lg uppercase tracking-wider lg:text-xl">Little by Little</p>
          </div>
          <div>
            <p className="font-display text-xl uppercase leading-tight sm:text-2xl lg:text-3xl">Helping Children Learn, Grow &amp; Thrive</p>
            <p className="mt-2 hidden text-base font-medium leading-relaxed lg:block lg:text-lg">
              Supporting education, nutrition and community support for children in Northern Malawi.
            </p>
            <div className="mt-5 lg:hidden">
              <p className="mb-5 leading-relaxed">{intro}</p>
              <div className="[&_a:first-child]:bg-white [&_a:first-child]:!text-brand-orange-dark [&_a:first-child:hover]:bg-cream"><HeroActions /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Notch, as in the original template */}
      <div className="absolute bottom-0 left-1/2 z-10 hidden h-0 w-0 -translate-x-1/2 border-x-[30px] border-t-[30px] border-x-transparent border-t-cream lg:block" aria-hidden="true" />
    </section>
  );
}
