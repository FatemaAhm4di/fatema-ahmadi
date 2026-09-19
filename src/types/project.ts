export type ProjectCategory = "Frontend" | "Full Stack" | "UI/UX";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  slug: string;
  featured: boolean;
  liveUrl?: string;

  year?: string;
  role?: string;
  overview?: string;
  highlights?: string[];
};