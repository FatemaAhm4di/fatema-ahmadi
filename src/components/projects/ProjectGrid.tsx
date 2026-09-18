import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/project";

export default function ProjectsGrid() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <article
          key={project.id}
          className="group flex min-h-[400px] flex-col border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-light)] hover:shadow-[0_18px_45px_rgba(86,28,36,0.08)] sm:p-8"
        >
          <div className="flex items-start justify-between gap-6">
            <span className="text-sm font-medium tabular-nums text-[var(--muted)]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              {project.category}
            </span>
          </div>

          <div className="mt-12">
            <div className="mb-6 h-px w-12 bg-[var(--primary)] transition-all duration-300 group-hover:w-20" />

            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-4xl">
              {project.title}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="mt-auto pt-10">
            <div className="flex flex-wrap gap-2">
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
              <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                Live project
              </span>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live project`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-white transition-all duration-200 hover:bg-[var(--primary-light)] group-hover:translate-x-1"
                >
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}