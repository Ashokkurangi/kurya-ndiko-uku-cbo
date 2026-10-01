import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary: "bg-brand-orange text-white hover:bg-brand-orange-dark",
  green: "bg-brand-green text-white hover:bg-brand-green-dark",
  outline: "border-2 border-white text-white hover:bg-white hover:text-brand-green",
} as const;

export function Button({ href, variant = "primary", children, className = "", external = false }: {
  href: string;
  variant?: keyof typeof styles;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
