import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Crumbs, PageFrame } from "@/components/PageShell";
import { ProgrammeDetail } from "@/components/Programmes";
import { Heading } from "@/components/Section";
import { photos, programmes } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Education & Programs",
  description:
    "Kurya Ndiko Uku CBO's programmes in Malawi: nutrition and food support, education, healthcare, community support, support for vulnerable children and community transportation.",
  path: "/education-programs",
  image: photos.diningHall,
});

// Layout: solid green centred header, a sticky intro + programme index beside the numbered programme list,
// and a dark photo panel before the closing CTA.
export default function EducationPrograms() {
  return (
    <PageFrame>
      <section className="bg-brand-green px-4 py-14 text-center text-white sm:px-6 md:py-20">
        <Crumbs title="Education & Programs" className="flex justify-center" />
        <h1 className="mt-5 font-display text-4xl sm:text-5xl">Education &amp; Programs</h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-white/90">
          Practical support for children, caregivers and families, responding to real needs with the resources available to us.
        </p>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Heading eyebrow="What We Do">Our Programmes</Heading>
            <p className="mt-6 text-lg leading-relaxed">
              Our work began with children&apos;s nutrition in 2005. Since then it has grown to include education, healthcare access, basic needs and community transport.
            </p>
            <nav aria-label="Programmes" className="mt-8">
              <ol className="space-y-2">
                {programmes.map((p, i) => (
                  <li key={p.id}>
                    <Link href={`#${p.id}`} className="flex gap-3 rounded-lg px-3 py-2 font-semibold text-brand-green transition hover:bg-cream">
                      <span className="text-brand-orange-dark">{i + 1}.</span> {p.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <div>
            {programmes.map((p, i) => <ProgrammeDetail key={p.id} programme={p} index={i} />)}
          </div>
        </div>
      </section>

      <section className="bg-brand-brown px-4 py-16 text-white sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image src={photos.diningHall.src} alt={photos.diningHall.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[50%_65%]" />
          </div>
          <div>
            <Heading eyebrow="Education & Nutrition" light>When Children Are Fed, They Can Focus on Learning</Heading>
            <div className="mt-6 space-y-3 text-lg leading-relaxed text-white/90">
              <p>Education can open doors to opportunities that may otherwise remain out of reach. But education becomes harder when children are hungry.</p>
              <p>That is why food and education go hand in hand in our work, from porridge for young children to our nursery, where one of our first children began a journey that has now led to a place at university.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner heading="Help Our Programmes Continue" secondary={{ label: "Ways to Help", href: "/get-involved" }} />
    </PageFrame>
  );
}
