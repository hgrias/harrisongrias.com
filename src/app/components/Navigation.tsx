"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return; // skip updates during smooth scroll

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

  useEffect(() => {
    if (activeSection && navRefs.current[activeSection]) {
      const element = navRefs.current[activeSection];
      if (element) {
        setIndicatorTop(element.offsetTop);
      }
    }
  }, [activeSection]);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Prevent observer from overriding manually-set active section
    isScrollingRef.current = true;
    setActiveSection(sectionId);

    section.scrollIntoView({ behavior: "smooth" });

    // Re-enable observer after scroll ends (~500ms)
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600); // adjust timing if needed
  };

  return (
    <nav className="relative hidden lg:block" aria-label="In-page jump links">
      <ul className="relative mt-16 w-max space-y-2 pl-4">
        <motion.div
          className="bg-foreground absolute left-0 h-8 w-1 rounded-full"
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{ top: indicatorTop }}
        />
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              ref={(el) => {
                navRefs.current[item.id] = el;
              }}
              className={`group flex items-center py-2 pl-4 text-xs font-bold tracking-widest uppercase transition-colors ${
                activeSection === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
