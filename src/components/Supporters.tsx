import { ukSupporters } from "@/content/site";
import { Icon } from "./Icon";
import { Section } from "./Section";

export function SupportersSection({ detailed = false, className = "bg-cream" }: { detailed?: boolean; className?: string }) {
  return (
    <Section id="our-supporters" className={className}>
      <div className="mx-auto max-w-4xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange-dark">
          <Icon name="heart" className="h-8 w-8" />
        </span>
        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-brand-orange-dark">Our Supporters</p>
        <h2 className="font-display text-3xl leading-tight text-brand-green sm:text-4xl">Thank You to Those Who Stand With Us</h2>
        <p className="mt-6 text-lg leading-relaxed">
          We are deeply grateful to the people who have supported Kurya Ndiko Uku CBO over the years. We especially thank Mama Cathy, Uncle Bobby and Uncle Dave Harrison for their continued support.
        </p>
        {detailed && (
          <p className="mt-4 text-lg leading-relaxed">
            The support of our UK team has helped us provide food, healthcare assistance, transportation and other practical support to children and community members. It has made a meaningful difference to our organisation and the communities we serve.
          </p>
        )}
        <ul className="mt-8 flex flex-wrap justify-center gap-3" aria-label="Our UK support team">
          {ukSupporters.map((name) => (
            <li key={name} className="rounded-full bg-white px-6 py-3 font-display text-lg text-brand-green shadow-sm ring-1 ring-brand-green/15">{name}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
