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
      className={`flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300 ${isHovered ? "bg-teal-400/20" : ""} transition`}
    >
      {technology}
    </div>
  );
};
