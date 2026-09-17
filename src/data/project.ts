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
    liveUrl: "https://trackly-blond.vercel.app/",
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
    liveUrl: "https://fatemaahm4di.github.io/cleanGame/",
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
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "React Hook Form",
      "Zod",
      "next-intl",
    ],
    slug: "kaaryab-afghanistan",
    featured: true,
    liveUrl: "https://kaaryab-afghanistan-ashy.vercel.app",
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
    liveUrl: "http://nextcart-wine.vercel.app",
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
    liveUrl: "https://fatemaahm4di.github.io/beauty/",
  },
];