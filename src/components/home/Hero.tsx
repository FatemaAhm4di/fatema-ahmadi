import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-73px)] items-center py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Frontend Developer
              </p>
            </div>

            <h1 className="max-w-5xl text-[clamp(3.5rem,8vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[var(--foreground)]">
              I build
              <br />
              <span className="text-[var(--primary)]">
                digital
              </span>{" "}
              experiences.
            </h1>

            <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg">
                I&apos;m Fatema Ahmadi, a frontend developer who cares about
                thoughtful interfaces, clean code, and experiences that feel
                simple to use.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-light)]"
                >
                  View my work

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  About me
                </Link>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mt-16 hidden lg:col-span-4 lg:mt-0 lg:block">
            <div className="relative mx-auto aspect-square max-w-sm">
              <div className="absolute inset-0 rounded-full border border-[var(--border)]" />

              <div className="absolute inset-8 rounded-full border border-[var(--border)]" />

              <div className="absolute inset-16 rounded-full bg-[var(--primary)]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-semibold tracking-[-0.08em] text-[var(--foreground)]">
                  FA
                </span>
              </div>

              <div className="absolute -right-2 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
                <span className="text-xs font-semibold text-[var(--primary)]">
                  01
                </span>
              </div>

              <div className="absolute -bottom-2 left-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                  Design
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                  Development
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                  Performance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div className="border-t border-[var(--border)] py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Based in
                </p>

                <p className="mt-1 text-xs font-medium text-[var(--foreground)]">
                  Afghanistan
                </p>
              </div>

              <div className="hidden h-7 w-px bg-[var(--border)] sm:block" />

              <div className="hidden sm:block">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Stack
                </p>

                <p className="mt-1 text-xs font-medium text-[var(--foreground)]">
                  React · Next.js · TypeScript
                </p>
              </div>
            </div>

            <Link
              href="#selected-work"
              className="group flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
            >
              Scroll

              <ArrowDown
                size={14}
                className="transition-transform duration-200 group-hover:translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}