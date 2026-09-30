import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

import { projects } from "@/data/project";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Fatema Ahmadi`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8 lg:py-24">
      {/* Back to projects */}
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--primary)]"
      >
        <ArrowLeft
          size={16}
          strokeWidth={1.8}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:-translate-x-1"
        />

        <span>Back to projects</span>
      </Link>

      {/* Project Header */}
      <header className="mt-10 border-b border-[var(--border)] pb-10 sm:mt-12 sm:pb-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 max-w-5xl">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--primary)]">
                {project.category}
              </span>

              {project.year && (
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                  {project.year}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-[var(--foreground)] sm:text-6xl lg:text-8xl">
              {project.title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:mt-7 sm:text-lg">
              {project.description}
            </p>
          </div>

          {/* Live Project */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live project`}
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium !text-white transition-colors duration-200 hover:bg-[var(--primary-light)]"
            >
              <span className="!text-white">
                Visit project
              </span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
                className="!text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </header>

      {/* Project Preview */}
      <section
        className="py-10 sm:py-12"
        aria-label={`${project.title} preview`}
      >
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-2.5 sm:p-4">
          <div className="overflow-hidden rounded-xl bg-[var(--surface)]">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              width={1600}
              height={1000}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Project Content */}
      <div className="grid min-w-0 gap-14 pb-14 sm:gap-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-24">
        {/* Main Content */}
        <div className="min-w-0 max-w-3xl">
          {/* Overview */}
          {project.overview && (
            <section aria-labelledby="project-overview">
              <p
                id="project-overview"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]"
              >
                Overview
              </p>

              <p className="mt-5 text-xl leading-9 text-[var(--foreground)] sm:text-2xl">
                {project.overview}
              </p>
            </section>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <section
              className="mt-14 border-t border-[var(--border)] pt-10 sm:mt-16"
              aria-labelledby="project-highlights"
            >
              <p
                id="project-highlights"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]"
              >
                Highlights
              </p>

              <ul className="mt-6">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={highlight}
                    className="flex gap-5 border-b border-[var(--border)] py-5 text-sm leading-7 text-[var(--muted)] sm:text-base"
                  >
                    <span
                      className="min-w-6 shrink-0 text-xs font-medium tabular-nums text-[var(--primary)]"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Project Information */}
        <aside
          className="min-w-0 space-y-9 lg:border-l lg:border-[var(--border)] lg:pl-8"
          aria-label="Project information"
        >
          {/* Role */}
          {project.role && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Role
              </p>

              <p className="mt-3 text-sm font-medium leading-6 text-[var(--foreground)]">
                {project.role}
              </p>
            </div>
          )}

          {/* Year */}
          {project.year && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Year
              </p>

              <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
                {project.year}
              </p>
            </div>
          )}

          {/* Technologies */}
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

      {/* Bottom Navigation */}
      <nav
        className="border-t border-[var(--border)] pt-8"
        aria-label="Project navigation"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--primary)]"
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.8}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />

          <span>View all projects</span>
        </Link>
      </nav>
    </article>
  );
}