import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section
        id="selected-work"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
          Selected Work
        </p>

        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
          A selection of things I&apos;ve built.
        </h2>
      </section>
    </>
  );
}