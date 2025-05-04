import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only">
          About
        </h2>
      </div>
      <p className="mb-4">
        I&apos;m a passionate software engineer with a focus on building
        innovative, user-centric web applications. With expertise in modern web
        technologies, I transform complex problems into elegant, efficient
        solutions.
      </p>
      <p>
        My approach combines technical excellence with creative problem-solving,
        ensuring that every project not only meets but exceeds expectations.
      </p>
    </section>
  );
};
