"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DONATE_HREF, navItems } from "@/content/site";
import { Button } from "./Button";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-brand-orange bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Link href="/" aria-label="Kurya Ndiko Uku CBO – home" className="shrink-0">
          <Image src="/images/logo.png" alt="Kurya Ndiko Uku CBO logo" width={900} height={294} priority className="h-12 w-auto sm:h-14" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`text-sm font-medium transition-colors hover:text-brand-orange ${pathname === item.href ? "text-brand-orange" : "text-brand-brown"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href={DONATE_HREF} className="whitespace-nowrap !px-4 !py-2 !text-xs sm:!px-6 sm:!py-2.5 sm:!text-sm">
            <Icon name="heart" className="mr-1.5 h-4 w-4 sm:hidden" />
            Donate Now
          </Button>
          <button
            type="button"
            className="rounded-md p-2 text-brand-green lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} className="h-7 w-7" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-sand bg-white lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`block border-b border-sand py-3 font-medium ${pathname === item.href ? "text-brand-orange" : "text-brand-brown"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
