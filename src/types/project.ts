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
  year?: string;
  role?: string;
  overview?: string;
  highlights?: string[];
};