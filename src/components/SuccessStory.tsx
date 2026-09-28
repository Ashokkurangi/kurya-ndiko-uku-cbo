import { Button } from "./Button";
import { Icon, type IconName } from "./Icon";
import { Section } from "./Section";

// Only the facts provided by the organisation. Do not add her name, university, course or other personal details.
const journey: { label: string; icon: IconName }[] = [
  { label: "Nursery school", icon: "sprout" },
  { label: "Caregiver", icon: "heart" },
  { label: "University", icon: "school" },
];

export function SuccessStory({ id = "success-story", className = "bg-sand" }: { id?: string; className?: string }) {
  return (
    <Section id={id} className={className}>
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-dark">Success Story</p>
          <h2 className="font-display text-3xl leading-tight text-brand-green sm:text-4xl">From Nursery School to University</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            <p>One of our first nursery school children later became a caregiver within our organisation and has now been selected to attend one of the top universities in Malawi.</p>
            <p>She lost both of her parents when she was only six years old. Today, she has reached an important milestone in her education.</p>
            <p className="font-semibold text-brand-brown">We are currently seeking well-wishers who can help support her university fees.</p>
          </div>
          <div className="mt-8"><Button href="/donate#her-education">Support Her Education</Button></div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-black/5 sm:p-10">
          <p className="text-center font-display text-xl text-brand-brown">Her journey with us</p>
          <ol className="mt-8 space-y-4">
            {journey.map((step, i) => (
              <li key={step.label}>
                <div className="flex items-center gap-4 rounded-2xl bg-cream px-5 py-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-xl font-bold text-brand-green">{step.label}</span>
                </div>
                {i < journey.length - 1 && (
                  <span className="mx-auto mt-4 block h-6 w-0.5 bg-brand-orange" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center leading-relaxed text-brand-brown">This is the kind of future we hope to help create for children in our community.</p>
        </div>
      </div>
    </Section>
  );
}
