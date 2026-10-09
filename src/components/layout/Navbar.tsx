"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
        <nav
          ref={navRef}
          className="relative mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-[var(--border)] bg-[var(--background)]/90 px-4 shadow-sm backdrop-blur-xl sm:h-15 sm:px-5"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="group inline-flex items-center rounded-full"
            aria-label="Fatema Ahmadi home"
          >
            <span className="text-lg font-semibold tracking-[-0.05em] text-[var(--primary)] transition-opacity duration-200 group-hover:opacity-70">
              FA.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-[var(--primary)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--primary)] transition-all duration-200 ${
                      active
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent transition-all duration-200 hover:border-[var(--border)] hover:bg-[var(--surface-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 md:hidden"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X
                size={20}
                strokeWidth={2}
                stroke="var(--primary)"
                aria-hidden="true"
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={2}
                stroke="var(--primary)"
                aria-hidden="true"
              />
            )}
          </button>

          {/* Mobile Navigation */}
          <div
            id="mobile-navigation"
            className={`absolute left-0 right-0 top-[calc(100%+0.6rem)] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--background)]/95 shadow-lg backdrop-blur-xl transition-all duration-200 md:hidden ${
              isMenuOpen
                ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
            }`}
            aria-hidden={!isMenuOpen}
          >
            <div className="p-2">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    aria-current={active ? "page" : undefined}
                    tabIndex={isMenuOpen ? 0 : -1}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium transition-colors duration-200 ${
                      active
                        ? "bg-[var(--surface-muted)] text-[var(--primary)]"
                        : "text-[var(--foreground)] hover:bg-[var(--surface-muted)] hover:text-[var(--primary)]"
                    }`}
                  >
                    <span>{item.label}</span>

                    <span
                      className={`h-1.5 w-1.5 rounded-full bg-[var(--primary)] transition-opacity duration-200 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      {/* Space reserved for the fixed navbar */}
      <div
        className="h-20 w-full"
        aria-hidden="true"
      />
    </>
  );
}