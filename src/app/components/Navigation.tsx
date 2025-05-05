"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter(Boolean);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              className={`group hover:text-foreground flex items-center py-3 ${
                activeSection === item.id
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 transition-all ${
                  activeSection === item.id
                    ? "bg-foreground w-16"
                    : "bg-muted-foreground group-hover:bg-foreground group-hover:w-16"
                }`}
              ></span>
              <span className="nav-text hover:text-foreground text-xs font-bold tracking-widest uppercase">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
