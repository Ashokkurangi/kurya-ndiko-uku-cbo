import { communityAreas } from "@/content/site";
import { Icon } from "./Icon";
import { Heading, Section } from "./Section";

/** The 17 villages and the five main areas of community support. */
export function CommunitySection({ id = "our-community", className = "bg-brand-green text-white" }: { id?: string; className?: string }) {
  return (
    <Section id={id} className={className}>
      <Heading eyebrow="Our Community" center light>Working Together Across 17 Villages</Heading>
      <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-lg leading-relaxed text-white/90">
        <p>Kurya Ndiko Uku works with children, caregivers and community members across 17 villages.</p>
        <p>We believe sustainable change begins within the community. We work to understand the needs of children and families and use the resources available to us to provide practical support.</p>
      </div>
      <ul className="mt-12 flex flex-wrap justify-center gap-5">
        {communityAreas.map((area) => (
          <li key={area.title} className="w-full rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 sm:w-[calc(50%-0.625rem)] lg:w-[calc((100%-4*1.25rem)/5)]">
            <Icon name={area.icon} className="h-9 w-9 text-brand-orange" />
            <h3 className="mt-3 text-xl font-bold">{area.title}</h3>
            <p className="mt-2 leading-relaxed text-white/85">{area.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
