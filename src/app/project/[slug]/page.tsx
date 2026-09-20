import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { projects } from "@/data/project";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
      >
        <ArrowLeft
          size={16}
          className="transition-transform duration-200 group-hover:-translate-x-1"
        />
        Back to projects
      </Link>

      <header className="mt-12 border-b border-[var(--border)] pb-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--primary)]">
                {project.category}
              </span>

              {project.year && (
                <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  {project.year}
                </span>
              )}
            </div>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-6xl lg:text-8xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {project.description}
            </p>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-light)]"
            >
              Visit project

              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </header>

      <div className="grid gap-16 py-12 lg:grid-cols-[1fr_280px] lg:gap-24">
        <div className="max-w-3xl">
          {project.overview && (
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Overview
              </p>

              <p className="mt-5 text-xl leading-9 text-[var(--foreground)] sm:text-2xl">
                {project.overview}
              </p>
            </section>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <section className="mt-16 border-t border-[var(--border)] pt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Highlights
              </p>

              <ul className="mt-6 space-y-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-4 border-b border-[var(--border)] pb-4 text-sm leading-7 text-[var(--muted)]"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-10">
          {project.role && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Role
              </p>

              <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
                {project.role}
              </p>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Technologies
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}