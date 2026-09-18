export default function ProjectsHeader() {
  return (
    <header className="border-b border-[var(--border)] pb-10">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
        Projects
      </p>

      <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
          Things I&apos;ve designed and built.
        </h1>

        <p className="max-w-md text-sm leading-7 text-[var(--muted)] sm:text-base">
          A collection of frontend and full-stack projects focused on useful
          experiences, clean interfaces, and thoughtful implementation.
        </p>
      </div>
    </header>
  );
}