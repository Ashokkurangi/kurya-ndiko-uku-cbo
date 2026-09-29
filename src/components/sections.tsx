import Image from "next/image";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Heading, Highlight, Section } from "./Section";
import { card, iconBox, body } from "./ui";
import {
  DONATE_HREF,
  educationBlocks,
  helpCards,
  impactStats,
  missionItems,
  nurseryPoints,
  whatWeDo,
} from "@/content/site";

export function WhoWeAre() {
  return (
    <Section id="about" className="bg-cream">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <Heading eyebrow="Who We Are">Welcome to Kurya Ndiko Uku CBO</Heading>
          <div className={`mt-6 ${body}`}>
            <p>Kurya Ndiko Uku CBO is a Community Based Organisation working with local communities near Mzimba, Northern Malawi.</p>
            <p>
              Our name, “Kurya Ndiko Uku,” means <strong>“This is the way to eat.”</strong> It reflects something at the heart of our work: food, hospitality, community and looking after one another.
            </p>
            <p>We are a community-led organisation committed to helping children and families facing poverty and difficult circumstances.</p>
            <p>Our work brings together people from Malawi and friends around the world who believe that small acts of support can create meaningful change.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5">
          <Highlight title="Pachoko Pachoko — Little by Little">
            <p className="text-lg">Change does not always happen overnight. Sometimes it starts with a cup of tea, a conversation, a shared meal or someone deciding to help.</p>
            <p className="text-lg font-semibold text-brand-green">Pachoko pachoko — little by little — we move forward together.</p>
          </Highlight>
        </div>
      </div>
    </Section>
  );
}

export function Mission() {
  return (
    <Section id="mission">
      <Heading eyebrow="Our Mission" center>Creating Opportunities for Children</Heading>
      {/* Flex-wrap so the odd last row is centred rather than left-hanging */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {missionItems.map((item) => (
          <article key={item.title} className={`${card} w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]`}>
            <div className={iconBox}><Icon name={item.icon} className="h-7 w-7" /></div>
            <h3 className="text-xl font-bold text-brand-green">{item.title}</h3>
            <p className="mt-2 leading-relaxed">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function WhatWeDo() {
  return (
    <Section id="what-we-do" className="bg-sand">
      <Heading eyebrow="What We Do" center>Supporting Children Through Education, Food &amp; Community</Heading>
      <div className={`mx-auto mt-8 max-w-3xl text-center ${body}`}>
        <p>We believe that education and nutrition go hand in hand.</p>
        <p>A hungry child may struggle to concentrate in class. A child without access to early education may start their school journey already facing disadvantages.</p>
        <p>That is why our work focuses on practical support that addresses children&apos;s immediate needs while helping create opportunities for their future.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whatWeDo.map((item) => (
          <article key={item.title} className={card}>
            <div className={iconBox}><Icon name={item.icon} className="h-7 w-7" /></div>
            <h3 className="text-xl font-bold text-brand-green">{item.title}</h3>
            <p className="mt-2 leading-relaxed">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Nursery() {
  return (
    <Section id="nursery">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Heading eyebrow="Bana Mbatose Nursery">“They Are All Ours”</Heading>
          <div className={`mt-6 ${body}`}>
            <p><strong>Bana Mbatose</strong> means <strong>“They are all ours.”</strong></p>
            <p>Our nursery was created to give young children in the local community access to early years education in a welcoming environment.</p>
            <p>For many children, these early years are an important foundation for their future education.</p>
            <p>The nursery aims to provide opportunities for children to:</p>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {nurseryPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center rounded-2xl bg-brand-green p-10 text-center shadow-lg sm:p-16">
          <p className="font-display text-4xl leading-tight text-white sm:text-6xl">They are <span className="text-brand-orange">all ours.</span></p>
        </div>
      </div>
    </Section>
  );
}

export function BreakfastClub() {
  return (
    <Section id="breakfast" className="bg-cream">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 space-y-6 lg:order-1">
          <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5">
            <Highlight title="A Breakfast Can Mean More Than a Meal">
              <p className="text-lg">A nutritious breakfast can help a child arrive at school ready to learn, participate and enjoy their day.</p>
            </Highlight>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Heading eyebrow="Bana Mbatose Breakfast Club">Starting the Day With Food, Care &amp; Opportunity</Heading>
          <div className={`mt-6 ${body}`}>
            <p>For a child to learn, they need more than a classroom.</p>
            <p className="font-semibold text-brand-green">They need food.<br />They need care.<br />They need encouragement.</p>
            <p>They need the opportunity to concentrate on learning rather than worrying about where their next meal will come from.</p>
            <p>The <strong>Bana Mbatose Breakfast Club</strong> was created to help provide children from local villages with a nutritious breakfast.</p>
            <p>The initiative brings together our local community and supporters from around the world to help children start their day with food and encouragement.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function EducationNutrition() {
  return (
    <Section id="education">
      <Heading eyebrow="Education & Nutrition" center>When Children Are Fed, They Can Focus on Learning</Heading>
      <div className={`mx-auto mt-8 max-w-3xl text-center ${body}`}>
        <p>Education can open doors to opportunities that may otherwise remain out of reach.</p>
        <p>But education becomes harder when children are hungry.</p>
        <p>Our approach connects education and nutrition because both are important to a child&apos;s development.</p>
      </div>
      <ul className="mt-12 flex flex-wrap justify-center gap-4">
        {educationBlocks.map((block) => (
          <li key={block.title} className="flex w-[calc(50%-0.5rem)] flex-col items-center rounded-2xl bg-brand-green px-4 py-8 md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-4rem)/5)] text-center text-white shadow-md">
            <Icon name={block.icon} className="h-10 w-10 text-brand-orange" />
            <h3 className="mt-3 text-lg font-bold">{block.title}</h3>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function WhySupport() {
  return (
    <Section id="support" className="bg-sand">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[1528/1029] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/people-food.png"
            alt="A group of women from the community in colourful wraps crocheting together outdoors"
            fill
            sizes="(min-width: 1280px) 616px, (min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <Heading eyebrow="Why Your Support Matters">Small Contributions Can Create Meaningful Change</Heading>
          <div className={`mt-6 ${body}`}>
            <p>Our work is rooted in the belief that communities can make a difference when people come together.</p>
            <p>You do not have to make a huge contribution to become part of that change.</p>
            <p>A small donation can help provide food.<br />A school supply can help a child learn.<br />Support for education can help a child continue their journey.<br />A partnership can help a community project grow.</p>
            <p>And sharing our story can help more people understand the needs of children in our community.</p>
          </div>
          <div className="mt-6"><Highlight title="Together, Pachoko Pachoko, We Move Forward." /></div>
          <div className="mt-8"><Button href={DONATE_HREF}>Donate Today</Button></div>
        </div>
      </div>
    </Section>
  );
}

export function HowYouCanHelp() {
  return (
    <Section id="get-involved">
      <Heading eyebrow="How You Can Help" center>Be Part of the Journey</Heading>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {helpCards.map((item) => (
          <article key={item.title} className={card}>
            <div className={iconBox}><Icon name={item.icon} className="h-7 w-7" /></div>
            <h3 className="text-xl font-bold text-brand-green">{item.title}</h3>
            <p className="mt-2 leading-relaxed">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Community() {
  return (
    <Section id="community" className="bg-cream">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Heading eyebrow="Our Community">From Malawi to Friends Around the World</Heading>
          <div className={`mt-6 ${body}`}>
            <p>Our community reaches far beyond the villages where our work takes place.</p>
            <p>Friends and supporters from different parts of the world have joined us in raising awareness, sharing our experiences and supporting projects that benefit children.</p>
            <p>What began as conversations between people sitting together on a mat has grown into a wider community connected by a common purpose.</p>
            <p className="font-semibold text-brand-green">We share stories.<br />We share photographs.<br />We share ideas.<br />We support one another.</p>
            <p>And, little by little, we make progress.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5">
          <Highlight title="Pachoko Pachoko">
            <p className="text-lg">Together we can help create brighter opportunities for children in Malawi.</p>
          </Highlight>
        </div>
      </div>
    </Section>
  );
}

export function Impact() {
  return (
    <Section id="impact" className="bg-brand-green text-white">
      <Heading eyebrow="Our Impact" center light>Impact</Heading>
      <dl className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {impactStats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white/10 p-6 text-center">
            <dd className="font-display text-2xl text-brand-orange sm:text-3xl">{stat.value}</dd>
            <dt className="mt-2 font-medium">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function DonateCta() {
  return (
    <Section id="donate">
      <div className="mx-auto max-w-3xl text-center">
        <Heading>Help Us Give Children a Brighter Start</Heading>
        <div className={`mt-6 ${body}`}>
          <p>Your support can help us continue providing education, nutrition and community support for children in Northern Malawi.</p>
          <p>Whether you choose to support a breakfast, educational resources, early years learning or a wider community initiative, your contribution can become part of a child&apos;s journey.</p>
        </div>
        <p className="mt-8 font-display text-2xl text-brand-orange-dark sm:text-3xl">Give What You Can. Help Where It Matters.</p>
        <div className="mt-8"><Button href={DONATE_HREF} variant="green">Donate Now</Button></div>
        {/* TODO: link to real donation method (bank details / payment link) once provided. */}
      </div>
    </Section>
  );
}

const galleryPhotos = [
  { src: "/images/3.png", caption: "Breakfast is served", alt: "A carer serving cups of porridge to nursery children sitting on a blue mat outdoors" },
  { src: "/images/5.png", caption: "Porridge time", alt: "A young boy in a giraffe jumper smiling while eating porridge from a red cup" },
  { src: "/images/6.png", caption: "Sharing smiles", alt: "A laughing child in a blue uniform carrying bags of maize flour" },
  { src: "/images/4.png", caption: "Lunch together", alt: "Children sharing a meal at a long table in the dining hall, decorated with flags from supporters around the world" },
];

export function Gallery() {
  return (
    <Section id="gallery">
      <Heading eyebrow="Our Community" center>Moments of Hope &amp; Togetherness</Heading>
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
