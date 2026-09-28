import Image from "next/image";
import { registrationCertificate as cert } from "@/content/site";
import { Icon } from "./Icon";
import { Heading, Section } from "./Section";

/** "Our CBO Registration" with the certificate image. Shows a placeholder until the image is added in site.tsx. */
export function RegistrationCertificate({ className = "" }: { className?: string }) {
  return (
    <Section id="cbo-registration" className={className}>
      <div className="mx-auto max-w-3xl text-center">
        <Heading eyebrow="Official CBO Registration" center>Our CBO Registration</Heading>
        <p className="mt-6 text-lg leading-relaxed">
          Kurya Ndiko Uku Community Based Organisation is formally registered as a Community Based Organisation. Our registration certificate was issued under M&apos;Mbelwa District Council.
        </p>
      </div>

      <figure className="mx-auto mt-10 max-w-3xl">
        {cert.src ? (
          // Shown whole (no cropping) at high quality so the text stays legible; links to the original file.
          <a href={cert.src} target="_blank" rel="noopener" className="block rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/10 transition hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange sm:p-4">
            <Image src={cert.src} alt={cert.alt} width={cert.width} height={cert.height} quality={90} sizes="(min-width: 800px) 736px, 100vw" className="h-auto w-full rounded-lg" />
            <span className="sr-only"> (opens the full-size certificate in a new tab)</span>
          </a>
        ) : (
          <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-brand-brown/30 bg-cream p-8 text-center text-brand-brown">
            <Icon name="award" className="h-12 w-12 text-brand-orange-dark" />
            <p className="font-bold">Registration certificate image coming soon</p>
          </div>
        )}
        <figcaption className="mt-4 text-center text-brand-brown">
          {cert.caption}
          {cert.src && (
            <>
              {" "}
              <a href={cert.src} target="_blank" rel="noopener" className="font-semibold text-brand-green underline underline-offset-4 hover:text-brand-orange-dark">
                View full size<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </>
          )}
        </figcaption>
      </figure>
    </Section>
  );
}
