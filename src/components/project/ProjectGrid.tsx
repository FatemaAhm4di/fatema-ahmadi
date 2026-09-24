import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/project";
import type { ProjectCategory } from "@/types/project";

type ProjectGridProps = {
  activeCategory: "All" | ProjectCategory;
};

export default function ProjectGrid({
  activeCategory,
}: ProjectGridProps) {
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="mt-8">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "Project" : "Projects"}
        </p>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group relative flex min-h-[400px] flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-light)] hover:shadow-[0_18px_45px_rgba(86,28,36,0.08)] sm:p-8"
            >
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.title} case study`}
                className="absolute inset-0 z-0 rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2"
              />

              <div className="pointer-events-none relative z-10 flex items-start justify-between gap-6">
                <span className="text-sm font-medium tabular-nums text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  {project.category}
                </span>
              </div>

              <div className="pointer-events-none relative z-10 mt-12">
                <div className="mb-6 h-px w-12 bg-[var(--primary)] transition-all duration-300 group-hover:w-20" />

                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl">
                  {project.title}
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-10">
                <div className="pointer-events-none flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-5">
                  <span className="pointer-events-none text-xs font-semibold uppercase tracking-[0.16em] text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
                    View case study
                  </span>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live project`}
                      className="relative z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-white transition-all duration-200 hover:bg-[var(--primary-light)] group-hover:translate-x-1"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="border border-[var(--border)] bg-[var(--surface)] px-6 py-16 text-center">
          <p className="text-sm text-[var(--muted)]">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}