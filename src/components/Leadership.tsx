import { leadership } from "@/content/site";
import { Icon } from "./Icon";
import { Heading, Section } from "./Section";

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2);
}

export function LeadershipSection({ className = "" }: { className?: string }) {
  return (
    <Section id="our-leadership" className={className}>
      <Heading eyebrow="Our Leadership">The People Behind Our Work</Heading>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed">
        Our Director, Deputy Director, CBO members and Accounts Team work together to support children, caregivers and families.
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {leadership.directors.map((person) => (
          <li key={person.role} className="flex items-center gap-5 rounded-2xl bg-brand-green p-6 text-white shadow-md">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/15 font-display text-xl text-brand-orange" aria-hidden="true">
              {initials(person.name)}
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">{person.role}</p>
              <p className="font-display text-2xl">{person.name}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold text-brand-green">
            <Icon name="people" className="h-6 w-6 text-brand-orange-dark" /> CBO Members
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 min-[420px]:grid-cols-2 md:grid-cols-3">
            {leadership.members.map((name) => (
              <li key={name} className="border-b border-brand-green/15 py-2">{name}</li>
            ))}
          </ul>
        </div>
        <div className="self-start rounded-2xl bg-cream p-6 ring-1 ring-brand-brown/10">
          <h3 className="flex items-center gap-2 text-xl font-bold text-brand-green">
            <Icon name="check" className="h-6 w-6 text-brand-orange-dark" /> Accounts Team
          </h3>
          <ul className="mt-4 space-y-2">
            {leadership.accounts.map((name) => <li key={name} className="font-medium">{name}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  );
}
