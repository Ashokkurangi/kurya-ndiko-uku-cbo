import type { ReactNode } from "react";
import { DONATE_HREF } from "@/content/site";
import { Button } from "./Button";
import { Section } from "./Section";

type Action = { label: string; href: string };

/** Closing call to action. Defaults to Donate Now + Get Involved. */
export function CtaBanner({
  heading = "Help Us Support Our Children",
  children,
  primary = { label: "Donate Now", href: DONATE_HREF },
  secondary = { label: "Get Involved", href: "/get-involved" },
  className = "bg-brand-green text-white",
  id = "support-us",
}: {
  id?: string;
  heading?: string;
  children?: ReactNode;
  primary?: Action;
  secondary?: Action | null;
  className?: string;
}) {
  return (
    <Section id={id} className={className}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">{heading}</h2>
        <div className="mt-5 space-y-3 text-lg leading-relaxed">
          {children ?? (
            <p>Most of the funds we receive are used to buy food for children and caregivers. Your support can help us restore meals, support children&apos;s education and respond to the real needs of our community.</p>
          )}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={primary.href} variant="white">{primary.label}</Button>
          {secondary && <Button href={secondary.href} variant="outline">{secondary.label}</Button>}
        </div>
      </div>
    </Section>
  );
}
