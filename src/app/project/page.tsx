import ProjectsGrid from "@/components/projects/ProjectGrid";
import ProjectsHeader from "@/components/projects/ProjectHeader";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <ProjectsHeader />
      <ProjectsGrid />
    </div>
  );
}