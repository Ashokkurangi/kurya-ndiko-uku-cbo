import Image from "next/image";
import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Icon } from "@/components/Icon";
import { Crumbs, PageFrame } from "@/components/PageShell";
import { Heading, Highlight, Section } from "@/components/Section";
import { SuccessStory } from "@/components/SuccessStory";
import { body } from "@/components/ui";
import { DONATE_HREF, nurseryPoints, photos, programmes } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our Children",
  description:
    "How Kurya Ndiko Uku CBO supports vulnerable children in Malawi with food, clothing, shoes, education and care, including one child's journey from our nursery to university.",
  path: "/our-children",
  image: photos.porridgeMat,
});

const vulnerablePoints = programmes.find((p) => p.id === "vulnerable-children")?.points ?? [];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
            <Icon name="check" className="h-4 w-4" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

// Layout: full-width photo header, then alternating sections for vulnerable children,
// wellbeing, nutrition and education, closing with the success story.
export default function OurChildren() {
  return (
    <PageFrame>
      <section className="relative flex min-h-[320px] items-end px-4 pb-10 sm:px-6 md:min-h-[400px]">
        <Image src={photos.hero.src} alt={photos.hero.alt} fill priority quality={90} sizes="100vw" className="-z-10 object-cover object-[50%_40%]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-black/65 to-transparent" />
        <div className="mx-auto w-full max-w-7xl text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
          <h1 className="font-display text-4xl sm:text-6xl">Our Children</h1>
          <p className="mt-2 max-w-2xl text-lg">Every child deserves the opportunity to grow up healthy, receive an education and build a better future.</p>
          <Crumbs title="Our Children" className="mt-3" />
        </div>
      </section>

      <Section id="vulnerable-children">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Heading eyebrow="Supporting Vulnerable Children">Help With the Basics Every Child Needs</Heading>
            <div className={`mt-6 ${body}`}>
              <p>Some children in our community struggle to access even basic necessities. Where funds are available, we help vulnerable children and the caregivers who look after them.</p>
              <p>This support can include:</p>
            </div>
            <CheckList items={vulnerablePoints} />
            <div className="mt-8"><Button href={DONATE_HREF}>Support Our Children</Button></div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg">
            <Image src={photos.maizeFlour.src} alt={photos.maizeFlour.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Section>

      <Section id="wellbeing" className="bg-sand">
        <Heading eyebrow="Children's Wellbeing" center>Healthy, Safe and Cared For</Heading>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
            <Icon name="heart" className="h-9 w-9 text-brand-orange-dark" />
            <h3 className="mt-3 text-xl font-bold text-brand-green">Care &amp; Encouragement</h3>
            <p className="mt-2 leading-relaxed">We aim to create a safe, welcoming and supportive environment where children can feel valued.</p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
            <Icon name="car" className="h-9 w-9 text-brand-orange-dark" />
            <h3 className="mt-3 text-xl font-bold text-brand-green">When Children Are Sick</h3>
            <p className="mt-2 leading-relaxed">Our 7-seater vehicle helps when children become sick and need to get to care, with fuel purchased when possible.</p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
            <Icon name="medical" className="h-9 w-9 text-brand-orange-dark" />
            <h3 className="mt-3 text-xl font-bold text-brand-green">Access to Healthcare</h3>
            <p className="mt-2 leading-relaxed">Our Sunday clinic, where a local doctor came once a week, is sadly missed. We hope to restore community healthcare in a sustainable way.</p>
          </article>
        </div>
      </Section>

      <Section id="nutrition">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            <Image src={photos.servingPorridge.src} alt={photos.servingPorridge.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <Heading eyebrow="Nutrition Support">Food Is Where Our Work Began</Heading>
            <div className={`mt-6 ${body}`}>
              <p>Our work started in 2005 because many children were unwell from poor nutrition. We looked at foods already available in local villages and better ways of cooking them.</p>
              <p>Today, most of the funds we receive are used to buy food for children and caregivers. Some former nursery school children sometimes return to us when they need food.</p>
            </div>
            <div className="mt-6 rounded-2xl border-l-4 border-brand-orange bg-cream p-6">
              <p className="text-xl font-bold text-brand-brown">Where we are now</p>
              <p className="mt-2 leading-relaxed">Harvests have not been good in recent years. With limited resources we have had to reduce meals: we are providing porridge, and lunch provision has had to stop. We hope additional support will help us restore and expand the food programme.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="education" className="bg-cream">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Heading eyebrow="Education Opportunities">Bana Mbatose Nursery: “They Are All Ours”</Heading>
            <div className={`mt-6 ${body}`}>
              <p><strong>Bana Mbatose</strong> means <strong>“They are all ours.”</strong> Our nursery was created to give young children in the local community access to early years education in a welcoming environment.</p>
              <p>For many children, these early years are an important foundation for their future education. The nursery aims to give children the chance to:</p>
            </div>
            <CheckList items={nurseryPoints} />
            <p className="mt-6 text-lg leading-relaxed">Where funds are available, we also give education-related support to vulnerable children as they grow.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5">
            <Highlight title="They are all ours.">
              <p className="text-lg">One of our first nursery school children has now been selected to attend one of the top universities in Malawi.</p>
            </Highlight>
          </div>
        </div>
      </Section>

      <SuccessStory className="bg-sand" />

      <CtaBanner heading="Support Our Children">
        <p>Your support can help provide food, clothing, shoes, education and care for children in our community.</p>
      </CtaBanner>
    </PageFrame>
  );
}
