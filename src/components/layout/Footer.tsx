import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/FatemaAhm4di",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flnkd.in%2FgbvwTFYj&urlhash=p-m-&mt=iJeQuUBcJY9C8s4R5AxMjuIB2GWsI9whIX49aUGYkppFAujw8CpXvaOAYo2fcL14T4UDwL-aB92ag0IrH6zxpECu0NvyA1GTKSrO9u1hKs-zp40XuDAiu9ej2s4&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BT3kVus2FQ4O6lDJ2CU%2Br9w%3D%3D",
  },
  {
    label: "X",
    href: "https://x.com/_Fatema_Ahmadi_?t=BNmpsP9jbPdb6GMh2W4EIg&s=09",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--footer-background)]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center text-lg font-semibold tracking-[-0.04em] text-[var(--primary)] transition-opacity duration-200 hover:opacity-75"
              aria-label="Fatema Ahmadi home"
            >
              FA.
            </Link>

            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
              Let&apos;s build something meaningful.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
              Frontend Developer focused on building thoughtful, responsive,
              and user-centered digital experiences.
            </p>

            <a
              href="mailto:fatema.ahmadi1384@gmail.com"
              className="group mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--primary)]"
            >
              <span>Send me an email</span>

              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-x-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Navigation
              </p>

              <nav
                className="mt-5 flex flex-col gap-3"
                aria-label="Footer navigation"
              >
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                Connect
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-xs leading-5 text-[var(--muted)]">
            © {new Date().getFullYear()} Fatema Ahmadi. All rights reserved.
          </p>

          <p className="text-xs leading-5 text-[var(--muted)] sm:text-right">
            Frontend Developer · UI/UX Designer
          </p>
        </div>
      </div>
    </footer>
  );
}