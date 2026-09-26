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
  email: "",
  location: "Afghanistan",
  github: "https://github.com/FatemaAhm4di",
  linkedin: "",
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
      {/* Hero */}
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

      {/* Contact Content */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 sm:py-24 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-24 lg:px-8 lg:py-28">
          {/* Contact Information */}
          <aside>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Get in touch
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                Contact details
              </h2>
            </div>

            <div className="mt-10 space-y-7">
              {contactDetails.email && (
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)] transition-colors duration-200 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Mail size={17} strokeWidth={1.7} />
                  </span>

                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                      Email
                    </span>

                    <span className="mt-1 block break-all text-sm font-medium text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
                      {contactDetails.email}
                    </span>
                  </span>
                </a>
              )}

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)]">
                  <MapPin size={17} strokeWidth={1.7} />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    Based in
                  </span>

                  <span className="mt-1 block text-sm font-medium text-[var(--foreground)]">
                    {contactDetails.location}
                  </span>
                </span>
              </div>

              <a
                href={contactDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)] transition-colors duration-200 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <svg
  viewBox="0 0 24 24"
  width="17"
  height="17"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.481A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
</svg>
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    GitHub
                  </span>

                  <span className="mt-1 flex items-center gap-1 text-sm font-medium text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
                    FatemaAhm4di
                    <ArrowUpRight size={13} />
                  </span>
                </span>
              </a>

              {contactDetails.linkedin && (
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[var(--primary)] transition-colors duration-200 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <span className="text-sm font-semibold">in</span>
                  </span>

                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                      LinkedIn
                    </span>

                    <span className="mt-1 flex items-center gap-1 text-sm font-medium text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
                      LinkedIn profile
                      <ArrowUpRight size={13} />
                    </span>
                  </span>
                </a>
              )}
            </div>
          </aside>

          {/* Contact Form */}
          <div className="max-w-3xl">
            {isSubmitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center border border-[var(--border)] bg-[var(--background)] px-6 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                  <Check size={24} strokeWidth={2} />
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
                  className="mt-8 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--primary-light)] hover:text-[var(--primary)]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8 lg:p-10"
              >
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-3 w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-3 w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What would you like to discuss?"
                    className="mt-3 w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                  />
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me a little about your project or opportunity..."
                    className="mt-3 w-full resize-none border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm leading-7 text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                  />
                </div>

                <div className="mt-8 flex flex-col gap-5 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-6 text-[var(--muted)]">
                    I&apos;m open to frontend, full-stack, design, and other
                    meaningful digital projects.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--primary-light)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}

                    {!isSubmitting && (
                      <Send
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
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
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}