import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary: "bg-brand-orange text-white hover:bg-brand-orange-dark",
  green: "bg-brand-green text-white hover:bg-brand-green-dark",
  outline: "border-2 border-white text-white hover:bg-white hover:text-brand-green",
} as const;

export function Button({ href, variant = "primary", children, className = "" }: {
  href: string;
  variant?: keyof typeof styles;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
