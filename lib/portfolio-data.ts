export type Project = {
  title: string;
  mark: string;
  summary: string;
  description: string;
  tags: string[];
};

export type Skill = {
  name: string;
  icon: "python" | "fastapi" | "next" | "react" | "postgres" | "redis" | "docker" | "openai";
};

export const profile = {
  initials: "MA",
  name: "Mustafa Asghari",
  location: "Brisbane, Australia",
  email: "asghari.mustafa99@gmail.com",
  github: "https://github.com/mustafa-asghari",
  githubLabel: "github.com/mustafa-asghari",
  role: "AI Systems Developer | Backend, LLMs, APIs",
  intro:
    "I build LLM-powered products, tool-using assistants, and retrieval workflows with robust backend APIs and production-style systems.",
  about:
    "I am an AI systems-focused software developer. I enjoy building systems that combine strong backend architecture with the power of large language models.",
  aboutDetail: "I care about clean code, scalable design, and real-world impact.",
  education: "Diploma of Advanced Programming, TAFE Queensland, expected 2026",
  resumeHref: "/documents/Mustafa_Asghari_Resume.pdf",
  cvHref: "/documents/Mustafa_Asghari_CV.pdf"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" }
];

export const skills: Skill[] = [
  { name: "Python", icon: "python" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Next.js", icon: "next" },
  { name: "React", icon: "react" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Redis", icon: "redis" },
  { name: "Docker", icon: "docker" },
  { name: "OpenAI", icon: "openai" }
];

export const projects: Project[] = [
  {
    title: "Nexus",
    mark: "N",
    summary: "Local-first AI assistant that combines LLMs, tools, retrieval, memory, and safety-gated execution.",
    description:
      "Local-first macOS AI assistant with structured turn planning, deterministic routing, RAG-backed prompt retrieval, safety-gated execution, memory, and voice input.",
    tags: ["Python", "OpenAI SDK", "Redis"]
  },
  {
    title: "GrindUp",
    mark: "G",
    summary: "AI-native learning platform for tutoring, curriculum generation, analytics, and coding practice.",
    description:
      "AI-native learning platform for tutoring, curriculum generation, quizzes, flashcards, homework, analytics, and sandboxed coding practice.",
    tags: ["Next.js", "OpenAI", "PostgreSQL"]
  },
  {
    title: "Kabul Sweets",
    mark: "KS",
    summary: "Production-style commerce platform with storefront, admin, async workers, payments, and media flows.",
    description:
      "Production-style commerce platform with storefront, admin dashboard, FastAPI backend, async workers, realtime updates, Stripe, and media workflows.",
    tags: ["Next.js", "PostgreSQL", "Stripe"]
  },
  {
    title: "SyntaX API",
    mark: "SX",
    summary: "High-performance social data API focused on low-latency retrieval and analytics-ready responses.",
    description:
      "Low-latency social data API with TLS-warmed sessions, token pooling, layered caching, Typesense, ClickHouse, and graceful degradation.",
    tags: ["FastAPI", "Redis", "Docker"]
  }
];

export const stats = [
  { value: "2024", label: "Building Since", icon: "code" },
  { value: "4+", label: "Featured Systems", icon: "layers" },
  { value: "100%", label: "Commitment to Quality", icon: "star" }
];
