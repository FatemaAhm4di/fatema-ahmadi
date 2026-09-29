"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const contactDetails = {
  email: "fatema.ahmadi1384@gmail.com",
  location: "Afghanistan",
  github: "https://github.com/FatemaAhm4di",
  linkedin:
    "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flnkd.in%2FgbvwTFYj&urlhash=p-m-&mt=iJeQuUBcJY9C8s4R5AxMjuIB2GWsI9whIX49aUGYkppFAujw8CpXvaOAYo2fcL14T4UDwL-aB92ag0IrH6zxpECu0NvyA1GTKSrO9u1hKs-zp40XuDAiu9ej2s4&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BT3kVus2FQ4O6lDJ2CU%2Br9w%3D%3D",
  x: "https://x.com/_Fatema_Ahmadi_?t=BNmpsP9jbPdb6GMh2W4EIg&s=09",
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
              Contact
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-[var(--foreground)] sm:text-6xl lg:text-8xl">
              Let&apos;s build something meaningful.
            </h1>
          </div>

          <div className="lg:pb-2">
            <div className="mb-6 h-px w-12 bg-[var(--primary)]" />

            <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
              Have a project, opportunity, or idea you&apos;d like to discuss?
              Send me a message and I&apos;ll get back to you.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-20 lg:px-8 lg:py-24">
          <aside>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Get in touch
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                Contact details
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
                Connect with me directly or find me across the platforms below.
              </p>
            </div>

            <div className="mt-9 space-y-3">
              <a
                href={`mailto:${contactDetails.email}`}
                aria-label="Send me an email"
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all duration-200 hover:border-[var(--primary-light)] hover:bg-[var(--surface-muted)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)] shadow-sm transition-colors duration-200 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Mail size={18} strokeWidth={1.7} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    Email
                  </span>

                  <span className="mt-1 block text-sm font-medium text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
                    Send me an email
                  </span>
                </span>

                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-[var(--muted)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--primary)] shadow-sm">
                  <MapPin size={18} strokeWidth={1.7} />
                </span>

                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    Based in
                  </span>

                  <span className="mt-1 block text-sm font-medium text-[var(--foreground)]">
                    {contactDetails.location}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Social
              </p>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group flex h-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-all duration-200 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="19"
                    height="19"
                    fill="currentColor"
                    aria-hidden="true"
                    className="transition-colors duration-200 group-hover:text-white"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.481A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
                  </svg>
                </a>

                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-all duration-200 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="19"
                    height="19"
                    fill="currentColor"
                    aria-hidden="true"
                    className="transition-colors duration-200 group-hover:text-white"
                  >
                    <path d="M5.04 3.5a2.04 2.04 0 1 1 0 4.08 2.04 2.04 0 0 1 0-4.08ZM3.3 9.2h3.48V20H3.3V9.2Zm5.67 0h3.34v1.48h.05c.46-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.34V20h-3.48v-5.12c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V20H8.97V9.2Z" />
                  </svg>
                </a>

                <a
                  href={contactDetails.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="group flex h-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-all duration-200 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                    aria-hidden="true"
                    className="transition-colors duration-200 group-hover:text-white"
                  >
                    <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.62l-5.18-6.77L5.02 22H1.76l7.61-8.7L1.25 2h6.79l4.68 6.19L18.244 2Zm-1.16 17.87h1.81L7.02 4h-1.94l12.004 15.87Z" />
                  </svg>
                </a>
              </div>
            </div>
          </aside>

          <div className="max-w-3xl">
            {isSubmitted ? (
              <div className="flex min-h-[560px] flex-col items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--background)] px-6 py-16 text-center sm:px-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-lg">
                  <Check size={27} strokeWidth={2} />
                </div>

                <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                  Message received.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
                  Thanks for reaching out. This form is currently running in
                  demo mode, so no message has been sent yet.
                </p>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:border-[var(--primary-light)] hover:bg-[var(--surface-muted)] hover:text-[var(--primary)]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-[0_20px_60px_rgba(86,28,36,0.06)] sm:p-8 lg:p-10"
              >
                <div className="mb-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                    Start a conversation
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-3xl">
                    Tell me about your project.
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    Share a few details about what you&apos;re working on,
                    what you need, or simply what you have in mind.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground)]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-2.5 h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--foreground)] outline-none transition-all duration-200 placeholder:text-[var(--muted)] hover:border-[var(--primary-light)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground)]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-2.5 h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--foreground)] outline-none transition-all duration-200 placeholder:text-[var(--muted)] hover:border-[var(--primary-light)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground)]"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What would you like to discuss?"
                    className="mt-2.5 h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--foreground)] outline-none transition-all duration-200 placeholder:text-[var(--muted)] hover:border-[var(--primary-light)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--foreground)]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Tell me a little about your project or opportunity..."
                    className="mt-2.5 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-sm leading-7 text-[var(--foreground)] outline-none transition-all duration-200 placeholder:text-[var(--muted)] hover:border-[var(--primary-light)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10"
                  />
                </div>

                <div className="mt-7 flex flex-col gap-5 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-6 text-[var(--muted)]">
                    I&apos;m open to frontend, full-stack, design, and other
                    meaningful digital projects.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-6 text-sm font-medium !text-white shadow-sm transition-all duration-200 hover:bg-[var(--primary-light)] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="text-white">
                      {isSubmitting ? "Sending..." : "Send message"}
                    </span>

                    {!isSubmitting && (
                      <Send
                        size={15}
                        aria-hidden="true"
                        className="text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-7 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Explore more
            </p>

            <p className="mt-2 text-lg font-medium text-[var(--foreground)]">
              See what I&apos;ve been building.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--primary)]"
          >
            View projects

            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}