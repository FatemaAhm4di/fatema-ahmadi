"use client";

import { useState } from "react";

import ProjectGrid from "@/components/project/ProjectGrid";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectsFilters from "@/components/project/ProjectFilters";

import type { ProjectCategory } from "@/types/project";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<
    "All" | ProjectCategory
  >("All");

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <ProjectHeader />

      <ProjectsFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ProjectGrid activeCategory={activeCategory} />
    </div>
  );
}