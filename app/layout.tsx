import type { Metadata } from "next";
import "./globals.css";
// import { UnicornBackground } from "@/components/UnicornBackground";
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

const themeScript = `
(() => {
  try {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const theme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* <UnicornBackground /> */}
        {children}
      </body>
    </html>
  );
}
