"use client";

import type { ProjectCategory } from "@/types/project";

type ProjectsFiltersProps = {
  activeCategory: "All" | ProjectCategory;
  onCategoryChange: (category: "All" | ProjectCategory) => void;
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
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 ${
              isActive
                ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--primary-light)] hover:text-[var(--primary)]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}