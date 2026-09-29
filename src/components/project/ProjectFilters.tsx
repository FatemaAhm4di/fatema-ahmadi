"use client";

import type { ProjectCategory } from "@/types/project";

type ProjectsFiltersProps = {
  activeCategory: "All" | ProjectCategory;
  onCategoryChange: (
    category: "All" | ProjectCategory
  ) => void;
};

const categories: Array<"All" | ProjectCategory> = [
  "All",
  "Frontend",
  "Full Stack",
  "Design",
];

export default function ProjectsFilters({
  activeCategory,
  onCategoryChange,
}: ProjectsFiltersProps) {
  return (
    <div className="mt-10 flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            aria-pressed={isActive}
            className={`group rounded-full border px-5 py-2.5 text-xs font-medium transition-all duration-200 ${
              isActive
                ? "border-[var(--primary)] bg-[var(--primary)]"
                : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)] hover:bg-[var(--primary)]"
            }`}
          >
            <span
              className={`transition-colors duration-200 ${
                isActive
                  ? "!text-white"
                  : "text-[var(--foreground)] group-hover:!text-white"
              }`}
            >
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
}