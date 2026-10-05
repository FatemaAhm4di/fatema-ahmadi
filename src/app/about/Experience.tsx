const experiences = [
  {
    period: "2025 – 2026",
    role: "Frontend Developer",
    organization: "Code to Inspire",
    description:
      "Developed frontend projects while working with modern web technologies including React, TypeScript, Next.js, JavaScript, HTML, CSS, and Tailwind CSS.",
  },
  {
    period: "2025",
    role: "UX/UI Designer",
    organization: "Remote",
    description:
      "Worked on user interface and user experience design, combining visual design skills with a focus on clear and practical digital experiences.",
  },
  {
    period: "2025",
    role: "Graphic Design Instructor",
    organization: "OM International Academy",
    description:
      "Taught graphic design online and guided students through practical design concepts and tools.",
  },
  {
    period: "2023 – 2025",
    role: "Microsoft Office Instructor",
    organization: "Omid-Herat Academy",
    description:
      "Taught Microsoft Office and computer skills, helping students build practical digital skills for academic and professional use.",
  },
];

export default function Experience() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-24 lg:px-8 lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Experience
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
            Where I&apos;ve worked and learned.
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">
            My experience spans frontend development, UI/UX, graphic design,
            and digital skills education.
          </p>
        </div>

        <div className="divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.organization}`}
              className="grid gap-4 py-7 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-8 sm:py-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                {experience.period}
              </p>

              <div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                  {experience.role}
                </h3>

                <p className="mt-1 text-sm font-medium text-[var(--primary)]">
                  {experience.organization}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}