import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

// Header + footer only. Each page designs its own top section and layout.
export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div id="top">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

export function Crumbs({ title, className = "" }: { title: string; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-base ${className}`}>
      <ol className="flex items-center gap-2">
        <li><Link href="/" className="underline-offset-4 hover:underline">Home</Link></li>
        <li aria-hidden="true" className="opacity-60">/</li>
        <li aria-current="page" className="font-semibold">{title}</li>
      </ol>
    </nav>
  );
}
