import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "trackly",
    title: "Trackly",
    description:
      "A React-based tracking application built with reusable components and a focused, responsive user experience.",
    category: "Frontend",
    technologies: ["React", "JavaScript", "CSS"],
    slug: "trackly",
    featured: true,
    image: "/images/projects/trackly.png",
    liveUrl: "https://trackly-blond.vercel.app/",
    year: "2025",
    role: "Frontend Developer",
    overview:
      "Trackly is a frontend application focused on building a clear and responsive tracking experience with reusable React components.",
    highlights: [
      "Built with React",
      "Created reusable interface components",
      "Focused on responsive user experience",
    ],
  },

  {
    id: "cleanpark",
    title: "CleanPark",
    description:
      "An interactive browser game where players collect trash, clean the park, and progress through timed levels.",
    category: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript"],
    slug: "cleanpark",
    featured: true,
    image: "/images/projects/cleanpark.png",
    liveUrl: "https://fatemaahm4di.github.io/cleanGame/",
    year: "2025",
    role: "Frontend Developer",
    overview:
      "CleanPark is an interactive browser game designed around a simple goal: clean the park by collecting trash and placing it in the correct bin before time runs out.",
    highlights: [
      "Built with HTML, CSS, and JavaScript",
      "Implemented interactive game mechanics",
      "Created a timed gameplay experience",
    ],
  },

  {
    id: "kaaryab-afghanistan",
    title: "KaarYab Afghanistan",
    description:
      "A full-stack opportunity finder platform for discovering jobs, internships, scholarships, and other opportunities.",
    category: "Full Stack",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Framer Motion",
      "next-intl",
    ],
    slug: "kaaryab-afghanistan",
    featured: true,
    image: "/images/projects/kaaryab-afghanistan.png",
    liveUrl: "https://kaaryab-afghanistan-ashy.vercel.app",
    year: "2026",
    role: "Full Stack Developer",
    overview:
      "KaarYab Afghanistan is a full-stack opportunity finder platform designed to help users discover jobs, internships, scholarships, and other opportunities in one place.",
    highlights: [
      "Built with Next.js App Router and TypeScript",
      "Implemented PostgreSQL database with Supabase",
      "Used Prisma as the ORM",
      "Implemented authentication with Supabase Auth",
      "Built forms with React Hook Form and Zod",
      "Added Persian and English localization with next-intl",
      "Created responsive interfaces with Tailwind CSS",
    ],
  },

  {
    id: "nextcart",
    title: "NextCart",
    description:
      "A modern e-commerce application built with React, featuring centralized state management, server-state handling, and a responsive interface.",
    category: "Frontend",
    technologies: [
      "React",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Vite",
    ],
    slug: "nextcart",
    featured: true,
    image: "/images/projects/nextcart.png",
    liveUrl: "http://nextcart-wine.vercel.app",
    year: "2025",
    role: "Frontend Developer",
    overview:
      "NextCart is a frontend e-commerce application built with React, combining centralized state management with server-state handling and a responsive interface.",
    highlights: [
      "Built with React and Vite",
      "Implemented global state management with Redux Toolkit",
      "Used React Query for server-state management",
      "Created a responsive interface with Tailwind CSS",
    ],
  },

  {
    id: "nivea-lab",
    title: "Nivea Lab",
    description:
      "A beauty product experience featuring product sections, blog content, testimonials, ordering forms, and authentication interfaces.",
    category: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript"],
    slug: "nivea-lab",
    featured: false,
    image: "/images/projects/nivea-lab.png",
    liveUrl: "https://fatemaahm4di.github.io/beauty/",
    year: "2024",
    role: "Frontend Developer",
    overview:
      "Nivea Lab is a beauty-focused frontend experience combining product presentation, content sections, testimonials, forms, and authentication interfaces.",
    highlights: [
      "Built with HTML, CSS, and JavaScript",
      "Created product-focused sections",
      "Implemented blog and testimonial sections",
      "Added ordering and authentication interfaces",
    ],
  },

  {
    id: "world-explorer",
    title: "World Explorer",
    description:
      "A TypeScript-based web application for exploring countries and discovering information through an interactive interface.",
    category: "Frontend",
    technologies: ["TypeScript", "HTML", "CSS"],
    slug: "world-explorer",
    featured: false,
    image: "/images/projects/world-explorer.png",
    liveUrl: "https://world-explorer-delta.vercel.app/",
    year: "2026",
    role: "Frontend Developer",
    overview:
      "World Explorer is a TypeScript-based web application focused on exploring countries and presenting geographic information through an interactive interface.",
    highlights: [
      "Built with TypeScript",
      "Created an interactive country exploration experience",
      "Focused on reusable and structured frontend logic",
      "Built a responsive interface for browsing country information",
    ],
  },

  {
    id: "pocket-classroom",
    title: "Pocket Classroom",
    description:
      "A browser-based educational application built with HTML, CSS, and JavaScript for managing and interacting with learning content.",
    category: "Frontend",
    technologies: ["HTML", "CSS", "JavaScript"],
    slug: "pocket-classroom",
    featured: false,
    image: "/images/projects/pocket-classroom.png",
    liveUrl: "https://fatemaahm4di.github.io/pocket-classroom/",
    year: "2025",
    role: "Frontend Developer",
    overview:
      "Pocket Classroom is a browser-based educational project built with HTML, CSS, and JavaScript, focused on creating an interactive learning experience.",
    highlights: [
      "Built with HTML, CSS, and JavaScript",
      "Created interactive educational features",
      "Implemented frontend data handling",
      "Designed a responsive learning interface",
    ],
  },

  {
    id: "foodiehub",
    title: "FoodieHub",
    description:
      "A responsive food-focused website built with HTML and Bootstrap, combining structured content with a modern responsive interface.",
    category: "Frontend",
    technologies: ["HTML", "Bootstrap"],
    slug: "foodiehub",
    featured: false,
    image: "/images/projects/foodihub.png",
    liveUrl: "https://fatemaahm4di.github.io/foodiehub/",
    year: "2025",
    role: "Frontend Developer",
    overview:
      "FoodieHub is a responsive frontend website built with HTML and Bootstrap, focused on presenting food-related content through a structured and accessible interface.",
    highlights: [
      "Built with HTML and Bootstrap",
      "Used Bootstrap responsive layout utilities",
      "Created structured food-focused sections",
      "Focused on responsive presentation across screen sizes",
    ],
  },

  {
    id: "decision-os",
    title: "Decision OS",
    description:
      "A decision-making application designed to compare options using weighted criteria and structured scoring.",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "SQLite",
    ],
    slug: "decision-os",
    featured: true,
    image: "/images/projects/decision-os.png",
    year: "2026",
    role: "Full Stack Developer",
    overview:
      "Decision OS is a decision-making application that helps users compare different options by defining criteria, assigning weights, and evaluating scores to produce structured results.",
    highlights: [
      "Built with Next.js App Router and TypeScript",
      "Created a structured decision scoring system",
      "Implemented weighted criteria and option scoring",
      "Built API routes for application data",
      "Using Prisma for database access",
      "Using SQLite for local database persistence",
      "Designed the project for persistent decision data and structured results",
    ],
  },
];