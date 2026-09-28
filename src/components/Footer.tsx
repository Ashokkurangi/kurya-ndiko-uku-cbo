import Link from "next/link";
import { DONATE_HREF, navItems, ORG_NAME } from "@/content/site";
import { Button } from "./Button";
import { Icon } from "./Icon";

const supportLinks = [
  { label: "Donate", href: DONATE_HREF },
  { label: "Ways to Get Involved", href: "/get-involved" },
  { label: "Our Supporters", href: "/about-us#our-supporters" },
  { label: "CBO Registration", href: "/about-us#cbo-registration" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-green-dark text-white/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <h2 className="font-display text-3xl tracking-wide text-white">Kurya Ndiko Uku CBO</h2>
          <p className="mt-1 font-semibold text-brand-orange-light">Community Based Organisation – Malawi</p>
          <p className="mt-3 max-w-sm">
            Supporting children, caregivers and communities across 17 villages through nutrition, education, healthcare and essential needs.
          </p>
          <div className="mt-6"><Button href={DONATE_HREF}>Donate Now</Button></div>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-2xl tracking-wide text-white">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-brand-orange-light hover:underline">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-2xl tracking-wide text-white">Support Us</h2>
          <ul className="mt-3 space-y-2">
            {supportLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-brand-orange-light hover:underline">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl tracking-wide text-white">Location</h2>
          <p className="mt-3 flex items-start gap-2">
            <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" /> Mzimba, Northern Malawi
          </p>
          <p className="mt-3 flex items-start gap-2">
            <Icon name="award" className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" /> Registered CBO under M&apos;Mbelwa District Council
          </p>
          {/* TODO: add verified contact details (email / phone / address) when provided. */}
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-5 text-center text-sm">
        <p className="text-white/70">
          <span className="font-semibold text-white">Pachoko Pachoko — Together, We Move Forward.</span>
          {" · "}© {new Date().getFullYear()} {ORG_NAME}
          {" · "}Developed by{" "}
          <a
            href="https://www.bloomsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-brand-orange-light"
          >
            BLOOM Consulting Services
          </a>
        </p>
      </div>
    </footer>
  );
}
