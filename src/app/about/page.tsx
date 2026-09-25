import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Code2,
  Layers3,
  Palette,
  Sparkles,
} from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "Prisma",
];

const dataSkills = ["Python", "SQL", "Power BI", "Excel"];

const focusAreas = [
  {
    number: "01",
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and accessible interfaces with modern React, Next.js, TypeScript, and thoughtful component architecture.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Backend Development",
    description:
      "Working with APIs, databases, authentication, SQL, PostgreSQL, Supabase, and Prisma to build applications with real data.",
  },
  {
    number: "03",
    icon: Palette,
    title: "UI / UX & Visual Design",
    description:
      "Using my design background to create interfaces that are clear, purposeful, visually balanced, and easy to use.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Working with foundational data analysis concepts using Python, SQL, Power BI, and Excel to explore and understand data.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
              About
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-[var(--foreground)] sm:text-6xl lg:text-8xl">
              I build digital experiences with a developer&apos;s mindset.
            </h1>
          </div>

          <div className="lg:pb-2">
            <div className="mb-6 h-px w-12 bg-[var(--primary)]" />

            <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
              I&apos;m Fatema Ahmadi, a frontend developer with a background in
              graphic design and UI/UX, and a foundation in data analysis. I
              enjoy turning ideas into thoughtful, responsive, and functional
              digital experiences.
            </p>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 border-t border-[var(--border)] pt-6 text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)] sm:mt-20">
          <ArrowDownRight size={16} className="text-[var(--primary)]" />
          <span>Development · Design · Data</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-24 lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              A little more
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
              From visual design to code.
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
            <p>
              My path started with visual design, where I developed a strong
              interest in composition, typography, and creating clear visual
              experiences.
            </p>

            <p>
              That interest gradually led me deeper into web development. I
              moved from HTML and CSS into JavaScript, React, TypeScript, and
              Next.js, while becoming increasingly interested in how products
              work beyond the visual layer.
            </p>

            <p>
              Today, development is my main focus. I enjoy building interfaces
              that are not only visually polished, but also backed by solid
              frontend logic, APIs, databases, and real application data.
            </p>

            <p>
              Alongside development and design, I have also studied the
              fundamentals of data analysis using Python, SQL, Power BI, and
              Excel. This gives me another way to approach problems through
              structured data and analytical thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-6 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
              What I do
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
              More than just the interface.
            </h2>
          </div>

          <Sparkles
            size={22}
            strokeWidth={1.5}
            className="hidden text-[var(--primary)] sm:block"
          />
        </div>

        <div className="mt-10 grid border-t border-[var(--border)] md:grid-cols-2 md:border-t-0 lg:grid-cols-4">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.number}
                className="group border-b border-[var(--border)] py-8 md:border-r md:px-8 md:first:border-l md:last:border-r-0 lg:border-b-0 lg:py-10 lg:first:border-l-0"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-medium tabular-nums text-[var(--muted)]">
                    {area.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Development Toolkit */}
      <section className="border-y border-[var(--border)] bg-[var(--surface-muted)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-24 lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Development
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
              Technologies I work with.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">
              My main technical focus is modern frontend and full-stack web
              development.
            </p>
          </div>

          <div className="flex content-start flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary-light)] hover:text-[var(--primary)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Data Analysis */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Data
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
              Data analysis fundamentals.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">
              I have foundational experience working with data, including
              analysis, cleaning, exploration, and visualization.
            </p>
          </div>

          <div>
            <div className="grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
              {dataSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="group bg-[var(--surface)] p-6 transition-colors duration-200 hover:bg-[var(--surface-muted)] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-medium tabular-nums text-[var(--muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <BarChart3
                      size={18}
                      strokeWidth={1.6}
                      className="text-[var(--primary)] opacity-70 transition-opacity duration-200 group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                    {skill}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Background */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-24 lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
              Design background
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              I care about how things work and how they feel.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-[var(--muted)]">
            <p>
              My experience in graphic design and UI/UX gives me a strong
              visual foundation when building digital products.
            </p>

            <p>
              I pay attention to hierarchy, spacing, typography, consistency,
              and the small details that make an interface easier to understand
              and use.
            </p>
          </div>
        </div>
      </section>

      {/* Working Philosophy */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
              How I work
            </p>

            <blockquote className="mt-6 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              “Good interfaces should feel simple, even when the systems
              behind them are not.”
            </blockquote>
          </div>

          <div className="space-y-5 text-sm leading-7 text-[var(--muted)]">
            <p>
              I care about writing maintainable code, keeping interfaces
              responsive, and understanding the logic behind the features I
              build.
            </p>

            <p>
              My design background helps me think about the visual result, my
              development skills help me build the system behind it, and my
              data background helps me approach problems analytically.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
                Let&apos;s build something
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                Have a project in mind?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">
                Take a look at my projects or get in touch if you&apos;d like
                to talk about an opportunity or collaboration.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--primary-light)]"
              >
                View projects

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--primary-light)] hover:text-[var(--primary)]"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}