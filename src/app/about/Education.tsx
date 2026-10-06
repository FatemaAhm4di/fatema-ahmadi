import Image from "next/image";

const education = [
  {
    period: "2025 – 2026",
    title: "Data Analysis",
    level: "Associate's Degree",
    organization: "DataCamp",
    detail: "Data Analysis & Visualization",
  },
  {
    period: "2025 – 2026",
    title: "Front-End Development",
    level: "Certificate",
    organization: "Code to Inspire",
    detail: "React · Next.js · TypeScript",
  },
  {
    period: "2025",
    title: "Web Design",
    level: "Certificate",
    organization: "Code to Inspire, Herat",
    detail: "HTML · CSS · JavaScript",
  },
];

const certifications = [
  {
    number: "01",
    title: "UI/UX Design with Figma",
    organization: "Udemy",
    detail: "Figma · Sketch",
    image: "/images/certificates/ui-ux-design-with-figma.png",
  },
  {
    number: "02",
    title: "Data Analysis & Visualization",
    organization: "DataCamp",
    detail: "Python · SQL · Power BI · Excel",
    image: "/images/certificates/data-analysis-visualization.png",
  },
  {
    number: "03",
    title: "Front-end Development",
    organization: "Code to Inspire",
    detail: "React · Next.js · TypeScript",
    image: "/images/certificates/front-end-development.png",
  },
  {
    number: "04",
    title: "Web Design",
    organization: "Code to Inspire",
    detail: "HTML · CSS · JavaScript",
    image: "/images/certificates/web-design.png",
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
              Education & training.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">
              My formal training and professional learning across data
              analysis, frontend development, and web design.
            </p>
          </div>

          <div className="space-y-14">
            {/* Education */}
            <div>
              <div className="mb-6 border-b border-[var(--border)] pb-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                  Education & Training
                </h3>
              </div>

              <div className="divide-y divide-[var(--border)] border-t border-[var(--border)]">
                {education.map((item) => (
                  <article
                    key={`${item.title}-${item.organization}`}
                    className="grid gap-4 py-7 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-8"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                      {item.period}
                    </p>

                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <h4 className="text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                          {item.title}
                        </h4>

                        <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                          {item.level}
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-medium text-[var(--primary)]">
                        {item.organization}
                      </p>

                      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                        {item.detail}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="mb-6 border-b border-[var(--border)] pb-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                  Certifications
                </h3>
              </div>

              <div className="grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
                {certifications.map((certificate) => (
                  <article
                    key={certificate.title}
                    className="bg-[var(--surface)] p-6 transition-colors duration-200 hover:bg-[var(--background)] sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-medium tabular-nums text-[var(--muted)]">
                        {certificate.number}
                      </span>

                      <span className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--primary)]">
                        Certificate
                      </span>
                    </div>

                    <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
                      {/* Certificate thumbnail */}
                      <div className="relative h-24 w-32 shrink-0 overflow-hidden border border-[var(--border)] bg-[var(--surface-muted)]">
                        <Image
                          src={certificate.image}
                          alt={`${certificate.title} certificate`}
                          fill
                          sizes="128px"
                          className="object-cover"
                        />
                      </div>

                      {/* Certificate information */}
                      <div className="min-w-0">
                        <h4 className="text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
                          {certificate.title}
                        </h4>

                        <p className="mt-2 text-sm font-medium text-[var(--primary)]">
                          {certificate.organization}
                        </p>

                        {certificate.detail && (
                          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                            {certificate.detail}
                          </p>
                        )}
                      </div>
                    </div>
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