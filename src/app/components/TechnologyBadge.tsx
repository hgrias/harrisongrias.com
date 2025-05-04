import React from "react";

interface TechnologyBadgeProps {
  technology: string;
  isHovered?: boolean;
}

export const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({
  technology,
  isHovered = false,
}) => {
  return (
    <div
      className={`text-primary flex items-center rounded-full bg-yellow-200/10 px-3 py-1 text-xs leading-5 font-medium ${isHovered ? "bg-teal-400/20" : ""} transition`}
    >
      {technology}
    </div>
  );
};
