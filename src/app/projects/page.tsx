import ProjectGrid from "@/components/project/ProjectGrid";
import ProjectHeader from "@/components/project/ProjectHeader";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <ProjectHeader />
      <ProjectGrid />
    </div>
  );
}