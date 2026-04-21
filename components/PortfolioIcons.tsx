import type { Skill } from "@/lib/portfolio-data";

type IconProps = {
  className?: string;
};

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ContactIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m5 7 7 6 7-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MetaIcon({ type, className }: { type: "pin" | "briefcase" | "globe" | "phone"; className?: string }) {
  const common = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (type === "pin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path {...common} d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Z" />
        <path {...common} d="M12 12.2a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z" />
      </svg>
    );
  }

  if (type === "briefcase") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path {...common} d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
        <path {...common} d="M4 7h16v12H4V7Z" />
        <path {...common} d="M4 12h16" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path {...common} d="M7 5.5 9.4 4l2.1 4-1.8 1.2c.8 1.8 2.2 3.2 4 4l1.2-1.8 4 2.1L17.5 17c-.5 1-1.5 1.6-2.6 1.4-4.7-.8-8.5-4.6-9.3-9.3C5.4 8 6 6 7 5.5Z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path {...common} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path {...common} d="M3.6 9h16.8M3.6 15h16.8" />
      <path {...common} d="M12 3c2 2.2 3 5.2 3 9s-1 6.8-3 9c-2-2.2-3-5.2-3-9s1-6.8 3-9Z" />
    </svg>
  );
}

export function SkillIcon({ icon, className }: { icon: Skill["icon"]; className?: string }) {
  const common = { stroke: "currentColor", strokeWidth: 1.55, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (icon === "python") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path {...common} d="M23 5h9a6 6 0 0 1 6 6v8H18a6 6 0 0 0-6 6v4H8a5 5 0 0 1-5-5v-6a6 6 0 0 1 6-6h14V5Z" />
        <path {...common} d="M25 43h-9a6 6 0 0 1-6-6v-8h20a6 6 0 0 0 6-6v-4h4a5 5 0 0 1 5 5v6a6 6 0 0 1-6 6H25v7Z" />
        <path d="M30 11.5h.1M18 36.5h.1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "fastapi") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle {...common} cx="24" cy="24" r="18" />
        <path fill="currentColor" d="M27.4 8.8 15.8 26.2h7l-2.3 13 12-18.5h-7.4l2.3-11.9Z" />
      </svg>
    );
  }

  if (icon === "next") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle {...common} cx="24" cy="24" r="18" />
        <path {...common} d="M17 32V16l14 16V16" />
        <path {...common} d="M31 32 39 40" />
      </svg>
    );
  }

  if (icon === "react") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <ellipse {...common} cx="24" cy="24" rx="20" ry="7.5" />
        <ellipse {...common} cx="24" cy="24" rx="20" ry="7.5" transform="rotate(60 24 24)" />
        <ellipse {...common} cx="24" cy="24" rx="20" ry="7.5" transform="rotate(120 24 24)" />
        <circle fill="currentColor" cx="24" cy="24" r="3" />
      </svg>
    );
  }

  if (icon === "postgres") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path {...common} d="M13 32c-5-2-7-7-7-13 0-8 7-13 18-13s18 5 18 13c0 6-2 11-7 13" />
        <path {...common} d="M16 35c3 2 13 2 16 0V18c0-4-3-7-8-7s-8 3-8 7v17Z" />
        <path {...common} d="M17 20c2 1.5 5 2.3 7 2.3s5-.8 7-2.3M18 29c2 1.3 4 2 6 2s4-.7 6-2" />
        <path {...common} d="M13 32c-3 2-4 5-2 7 3 3 9 0 13-5 4 5 10 8 13 5 2-2 1-5-2-7" />
      </svg>
    );
  }

  if (icon === "redis") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path {...common} d="m24 7 16 7-16 7-16-7 16-7Z" />
        <path {...common} d="m8 21 16 7 16-7" />
        <path {...common} d="m8 28 16 7 16-7" />
        <path {...common} d="m8 35 16 7 16-7" />
      </svg>
    );
  }

  if (icon === "docker") {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path {...common} d="M7 25h31c3.5 0 6-2 7-5 0 13-8 21-21 21-10 0-17-6-17-16Z" />
        <path {...common} d="M12 17h5v5h-5v-5Zm7 0h5v5h-5v-5Zm7 0h5v5h-5v-5Zm0-7h5v5h-5v-5Zm7 7h5v5h-5v-5Z" />
        <path {...common} d="M39 18c2-2 4-2 6 0" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path {...common} d="M24 5c4 0 6.5 2.2 8.2 5.6 3.8-.3 6.9 1 8.9 4.4s1.5 6.7-.6 9.8c2.1 3.1 2.6 6.5.6 9.8s-5.1 4.7-8.9 4.4C30.5 42.8 28 45 24 45s-6.5-2.2-8.2-5.6c-3.8.3-6.9-1-8.9-4.4s-1.5-6.7.6-9.8C5.4 22.1 4.9 18.7 6.9 15.4s5.1-4.7 8.9-4.4C17.5 7.2 20 5 24 5Z" />
      <path {...common} d="M15.8 11 32.2 39M32.2 11 15.8 39M7.5 24.8h33" />
      <circle {...common} cx="24" cy="25" r="7.5" />
    </svg>
  );
}

export function StatIcon({ type, className }: { type: string; className?: string }) {
  const common = { stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (type === "layers") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path {...common} d="m12 3 9 4-9 4-9-4 9-4Z" />
        <path {...common} d="m3 12 9 4 9-4M3 17l9 4 9-4" />
      </svg>
    );
  }

  if (type === "star") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path {...common} d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path {...common} d="m8 8-4 4 4 4M16 8l4 4-4 4" />
      <path {...common} d="m14 5-4 14" />
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.2 19.48c.5.1.68-.22.68-.48v-1.7c-2.76.6-3.34-1.18-3.34-1.18-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.2-.25-4.52-1.1-4.52-4.9 0-1.08.39-1.97 1.03-2.66-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.1c.85 0 1.7.11 2.5.32 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.38.1 2.63.64.69 1.03 1.58 1.03 2.66 0 3.81-2.32 4.64-4.53 4.89.36.31.68.92.68 1.85V21c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h4v11H3v-11ZM9.25 9.75h3.8v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1v5.35h-4v-4.74c0-1.13-.02-2.58-1.57-2.58-1.57 0-1.81 1.23-1.81 2.5v4.82h-4v-11Z" />
    </svg>
  );
}
