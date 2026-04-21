import type { Metadata } from "next";
import "./globals.css";
import { UnicornBackground } from "@/components/UnicornBackground";
import { profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: `${profile.name} | AI Systems Developer`,
  description: "AI systems-focused software developer building LLM products, retrieval workflows, backend APIs, and production-style infrastructure.",
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | AI Systems Developer`,
    description: profile.intro,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UnicornBackground />
        {children}
      </body>
    </html>
  );
}
