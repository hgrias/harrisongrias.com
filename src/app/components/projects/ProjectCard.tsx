import Link from "next/link";
import React from "react";
import { TechnologyBadge } from "../TechnologyBadge";

export interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  githubLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  technologies,
  githubLink,
}) => {
  return (
    <li className="mb-12">
      <Link
        href={githubLink}
        className="group relative grid grid-cols-1 gap-4 transition-all group-hover/list:opacity-50 hover:!opacity-100 sm:grid-cols-8"
      >
        <div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="flex items-center justify-center sm:col-span-2">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
            <div className="flex h-full w-full items-center justify-center text-gray-500 dark:text-gray-400">
              Project Image
            </div>
          </div>
        </header>
        <div className="sm:col-span-6">
          <h3 className="leading-snug font-medium text-slate-200">
            <span className="inline-flex items-baseline text-base leading-tight font-medium text-slate-200 transition group-hover:text-teal-300">
              {name}
            </span>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap">
            {technologies.map((tech, techIndex) => (
              <li key={techIndex} className="mt-2 mr-1.5">
                <TechnologyBadge technology={tech} isHovered={true} />
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
};
