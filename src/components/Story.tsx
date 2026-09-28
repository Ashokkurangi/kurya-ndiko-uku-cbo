import Image from "next/image";
import { missionBelief, missionStatement, photos, storyParagraphs, timeline } from "@/content/site";
import { Button } from "./Button";
import { Heading, Highlight, Section } from "./Section";
import { body } from "./ui";

function Timeline() {
  return (
    <ol className="relative space-y-8 border-l-2 border-brand-orange/40 pl-8">
      {timeline.map((step) => (
        <li key={step.year} className="relative">
          <span className="absolute -left-[calc(2.625rem+1px)] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange ring-4 ring-white" aria-hidden="true" />
          <p className="font-display text-2xl text-brand-orange-dark">{step.year}</p>
          <h3 className="mt-1 text-lg font-bold text-brand-green">{step.title}</h3>
          <p className="mt-1 leading-relaxed">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

/** Our Story. `summary` shows a shorter version with a link to the About page. */
export function StorySection({ summary = false, id = "our-story", className = "bg-cream" }: { summary?: boolean; id?: string; className?: string }) {
  const paragraphs = summary ? [storyParagraphs[1], storyParagraphs[2], storyParagraphs[5]] : storyParagraphs;

  return (
    <Section id={id} className={className}>
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Heading eyebrow="Our Story">It Began With Children&apos;s Nutrition</Heading>
          <div className={`mt-6 ${body}`}>
            {paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          {!summary && (
            <div className="mt-8">
              <Highlight title="“Kurya Ndiko Uku” — “This is the way to eat.”">
                <p className="text-lg">Our name reflects something at the heart of our work: food, hospitality, community and looking after one another.</p>
              </Highlight>
            </div>
          )}
          {summary && <div className="mt-8"><Button href="/about-us#our-story" variant="green">Read Our Story</Button></div>}
        </div>
        <div className="space-y-8">
          {!summary && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <Image src={photos.servingPorridge.src} alt={photos.servingPorridge.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          )}
          <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5">
            <Timeline />
          </div>
        </div>
      </div>
    </Section>
  );
}

export function MissionSection({ className = "" }: { className?: string }) {
  return (
    <Section id="our-mission" className={className}>
      <div className="mx-auto max-w-4xl text-center">
        <Heading eyebrow="Our Mission" center>Every Child Deserves a Healthy Start</Heading>
        <p className="mt-6 text-xl leading-relaxed sm:text-2xl">{missionStatement}</p>
        <p className="mt-6 font-display text-2xl text-brand-orange-dark sm:text-3xl">{missionBelief}</p>
      </div>
    </Section>
  );
}
