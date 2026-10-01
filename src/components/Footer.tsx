import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/content/site";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-green-dark text-white/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="font-display text-3xl tracking-wide text-white">Kurya Ndiko Uku CBO</h2>
          <p className="mt-1 font-semibold text-brand-orange">Community Based Organisation – Malawi</p>
          <p className="mt-3 max-w-sm">Supporting children and communities through education, nutrition, care and opportunity.</p>
        </div>
        <div>
          <h2 className="font-display text-2xl tracking-wide text-white">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-brand-orange">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl tracking-wide text-white">Location</h2>
          <p className="mt-3 flex items-center gap-2">
            <Icon name="pin" className="h-5 w-5 text-brand-orange" /> Mzimba, Northern Malawi
          </p>
          <p className="mt-3 flex items-center gap-2">
            <Image
              src="/images/Wikipedia-logo-v2-en-25-alt.svg.webp"
              alt="Wikipedia"
              width={26}
              height={30}
              className="h-5 w-auto object-contain"
            />
            <a
              href="https://en.wikipedia.org/wiki/Mzimba"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:text-white"
            >
              Learn more about Mzimba
              <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </p>
          {/* TODO: add verified contact details (email / phone / address) when provided. */}
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-5 text-center text-sm">
        <p className="text-white/60">
          <span className="font-semibold text-white">Pachoko Pachoko — Together, We Move Forward.</span>
          {" · "}© {new Date().getFullYear()} Kurya Ndiko Uku CBO
          {" · "}Developed by{" "}
          <a
            href="https://www.bloomsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-brand-orange"
          >
            BLOOM Consulting Services
          </a>
        </p>
      </div>
    </footer>
  );
}
