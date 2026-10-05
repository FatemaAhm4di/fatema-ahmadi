const education = [
  {
    period: "2025 – 2026",
    title: "Frontend Development",
    organization: "Code to Inspire",
    description:
      "Focused on modern frontend development with HTML, CSS, JavaScript, React, TypeScript, Next.js, and responsive web development.",
  },
  {
    period: "2024",
    title: "UX/UI Design",
    organization: "Udemy",
    description:
      "Studied user interface and user experience principles, visual hierarchy, interaction design, and digital product design.",
  },
  {
    period: "2024",
    title: "Graphic Design",
    organization: "Poyot Academy",
    description:
      "Developed practical skills in graphic design, visual composition, typography, and digital design.",
  },
];

const certifications = [
  {
    title: "Data Analysis Fundamentals",
    technologies: "Python · SQL · Power BI · Excel",
  },
  {
    title: "Web Design",
    technologies: "HTML · CSS · JavaScript",
  },
];

export default function Education() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface-muted)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Education
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
              Learning and growth.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">
              A combination of structured learning, practical development, and
              continuous exploration across technology and design.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <div className="mb-6 flex items-center justify-between border-b border-[var(--border)] pb-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                  Education & Training
                </h3>
              </div>

              <div className="divide-y divide-[var(--border)] border-t border-[var(--border)]">
                {education.map((item) => (
                  <article
                    key={`${item.title}-${item.organization}`}
                    className="grid gap-4 py-7 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-8"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                      {item.period}
                    </p>

                    <div>
                      <h4 className="text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm font-medium text-[var(--primary)]">
                        {item.organization}
                      </p>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center justify-between border-b border-[var(--border)] pb-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                  Certifications & Skills
                </h3>
              </div>

              <div className="grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
                {certifications.map((item, index) => (
                  <article
                    key={item.title}
                    className="bg-[var(--surface)] p-6 transition-colors duration-200 hover:bg-[var(--background)] sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-medium tabular-nums text-[var(--muted)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--primary)]">
                        Certificate
                      </span>
                    </div>

                    <h4 className="mt-10 text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {item.technologies}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}