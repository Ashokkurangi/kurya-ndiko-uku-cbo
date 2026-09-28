import Image from "next/image";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Heading, Highlight, Section } from "./Section";
import { body } from "./ui";
import { DONATE_HREF, keyFacts, photos } from "@/content/site";

/** Factual statements in place of numerical impact counters. */
export function KeyFacts() {
  return (
    <section aria-label="Kurya Ndiko Uku at a glance" className="bg-cream px-4 pb-4 pt-10 sm:px-6 lg:pt-14">
      <ul className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {keyFacts.map((fact) => (
          <li key={fact.title} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
              <Icon name={fact.icon} className="h-6 w-6" />
            </span>
            <p className="font-bold leading-snug text-brand-green">{fact.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** The current food situation, told plainly. */
export function NutritionAppeal() {
  return (
    <Section id="nutrition-need" className="bg-cream">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
          <Image src={photos.porridgeMat.src} alt={photos.porridgeMat.alt} fill sizes="(min-width: 1280px) 616px, (min-width: 1024px) 50vw, 100vw" className="object-cover object-[50%_40%]" />
        </div>
        <div>
          <Heading eyebrow="Where Help Is Needed Now">Food for Children and Caregivers</Heading>
          <div className={`mt-6 ${body}`}>
            <p>Most of the funds we receive are used to buy food for children and caregivers. Some former nursery school children sometimes return to us when they need food.</p>
            <p>In recent years harvests have not been good, and food security has become increasingly difficult for families in our community.</p>
          </div>
          <div className="mt-6">
            <Highlight title="We have had to reduce the meals we provide.">
              <p className="text-lg">At present we are providing porridge, and lunch provision has had to stop. With more support, we hope to restore and expand our food programme.</p>
            </Highlight>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={DONATE_HREF}>Support Our Children</Button>
            <Button href="/education-programs#nutrition" variant="green">Our Nutrition Work</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

const galleryPhotos = [
  { ...photos.servingPorridge, caption: "Porridge is served" },
  { ...photos.porridgeBoy, caption: "Porridge time" },
  { ...photos.maizeFlour, caption: "Sharing smiles" },
  { ...photos.diningHall, caption: "Sharing a meal" },
];

export function Gallery() {
  return (
    <Section id="gallery">
      <Heading eyebrow="Life at Kurya Ndiko Uku" center>Moments of Hope &amp; Togetherness</Heading>
      {/* Staggered: every second photo sits lower, so the row reads as a gentle wave. */}
      <div className="mt-12 grid grid-cols-2 items-start gap-4 lg:grid-cols-4 lg:gap-6">
        {galleryPhotos.map((photo, i) => (
          <figure
            key={photo.src}
            className={`group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5 ${i % 2 === 1 ? "mt-8 lg:mt-16" : ""}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1280px) 300px, (min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-4 pt-12 sm:px-5 sm:pb-5">
              <span className="mb-2 block h-1 w-8 rounded-full bg-brand-orange" aria-hidden="true" />
              <span className="font-display text-sm text-white sm:text-lg">{photo.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
