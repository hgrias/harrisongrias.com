"use client";

import React, { useEffect, useState } from "react";

export const Spotlight: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      });
      setOpacity(1);
    };

    const handleScroll = () => {
      const mouseEvent = window.event as MouseEvent;
      if (mouseEvent) {
        setPosition({
          x: mouseEvent.clientX + window.scrollX,
          y: mouseEvent.clientY + window.scrollY,
        });
      }
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.05), transparent 80%)`,
        opacity: opacity,
        transition: "opacity 0.3s ease",
      }}
    />
  );
};
