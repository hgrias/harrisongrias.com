import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TechnologyBadge } from "../TechnologyBadge";

export interface ExperienceCardProps {
  company: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  companyLink?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  title,
  period,
  description,
  technologies,
  companyLink = "#",
}) => {
  return (
    <li className="mb-12">
      <Link
        href={companyLink}
        className="group relative grid grid-cols-1 gap-4 transition-all group-hover/list:opacity-50 hover:!opacity-100 sm:grid-cols-8"
      >
        <div className="lg:group-hover:bg-accent/10 absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

        {/* Job Date Period */}
        <header className="text-muted-foreground/80 flex items-start pt-1 text-xs font-semibold tracking-wide uppercase sm:col-span-2">
          {period}
        </header>

        {/* Job Content */}
        <div className="sm:col-span-6">
          <h3 className="group-hover:text-primary text-foreground items-center leading-snug font-medium">
            <span>
              {title} ·{" "}
              <span className="inline-block">
                {company}
                <ArrowUpRight
                  size={16}
                  className="group-hover:text-primary ml-1 inline-block h-4 w-4 shrink-0 translate-y-px self-end transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none"
                />
              </span>
            </span>
          </h3>
          <p className="text-muted-foreground mt-2 text-sm leading-normal">
            {description}
          </p>
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
