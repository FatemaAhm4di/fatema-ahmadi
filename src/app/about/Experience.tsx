const experiences = [
  {
    period: "Mar 2026 – Present",
    role: "Frontend Developer",
    organization: "Pixel Bridge",
    location: "Remote",
    description:
      "Develop and maintain the company's portfolio website as part of a personal brand initiative.",
    highlights: [
      "Build responsive, modern web interfaces to effectively showcase the brand's work and services.",
    ],
  },
  {
    period: "Mar 2025 – Oct 2025",
    role: "UX/UI Designer",
    organization: "FigPE",
    location: "Nigeria · Remote",
    description:
      "Worked as part of a 7-member agile team on a productivity platform, focusing on user flows and interface design.",
    highlights: [
      "Redesigned user flows, improving task completion rate by 25%.",
      "Created wireframes, prototypes, and high-fidelity mockups in Figma, reducing revision cycles by 30%.",
    ],
  },
  {
    period: "Sep 2025 – Nov 2025",
    role: "Frontend Developer",
    organization: "Team Project",
    location: "Kabul",
    description:
      "Developed responsive frontend components for a mobile-first wellness application used by 500+ early users.",
    highlights: [
      "Built responsive UI components with HTML, CSS, and JavaScript.",
      "Implemented dark/light mode and optimized mobile navigation to improve accessibility.",
    ],
  },
  {
    period: "Apr 2025 – Sep 2025",
    role: "Graphic Design Instructor",
    organization: "OM International Academy",
    location: "Remote",
    description:
      "Taught foundational and advanced graphic design through live virtual sessions for students across 8 countries.",
    highlights: [
      "Taught composition, branding, and visual identity to 60+ students.",
      "Developed course materials and practical assignments focused on job-ready design portfolios.",
    ],
  },
  {
    period: "Jan 2025 – Apr 2025",
    role: "Graphic Designer",
    organization: "Kaaweshgaraan – MegaByte Brand",
    location: "Remote",
    description:
      "Created visual and branding materials for software clients while collaborating with cross-functional teams.",
    highlights: [
      "Designed brand identities, marketing assets, and digital visuals while maintaining brand consistency.",
      "Collaborated with cross-functional teams to translate business needs into compelling visual narratives.",
    ],
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
            Where I&apos;ve worked and contributed.
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">
            My professional experience spans frontend development, UX/UI
            design, graphic design, and digital education across remote and
            collaborative teams.
          </p>
        </div>

        <div className="divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.organization}`}
              className="grid gap-5 py-8 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-8"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                  {experience.period}
                </p>
              </div>

              <div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                    {experience.role}
                  </h3>

                  <p className="text-sm font-medium text-[var(--primary)]">
                    {experience.organization}
                  </p>

                  <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                    {experience.location}
                  </p>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  {experience.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-4 text-sm leading-7 text-[var(--foreground)]"
                    >
                      <span
                        className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}