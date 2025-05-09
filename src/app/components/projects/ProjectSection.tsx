import React from "react";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

interface ProjectSectionProps {
  projects: ProjectCardProps[];
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-foreground text-sm font-bold tracking-widest uppercase lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ol>
      </div>
    </section>
  );
};
