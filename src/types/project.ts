export type ProjectCategory = "Frontend" | "Full Stack" | "Design";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  slug: string;
  featured: boolean;
  image: string;

  liveUrl?: string;
  githubUrl?: string;

  year?: string;
  role?: string;

  overview?: string;
  problem?: string;
  solution?: string;

  highlights?: string[];
  features?: string[];

  challenges?: string[];
  learnings?: string[];
};