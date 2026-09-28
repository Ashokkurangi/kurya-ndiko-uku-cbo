import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kurya Ndiko Uku CBO | Supporting Children in Malawi",
  description:
    "Kurya Ndiko Uku CBO supports children and communities in Northern Malawi through education, nutrition, early years learning and community programs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
