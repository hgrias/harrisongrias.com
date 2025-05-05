import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-foreground text-sm font-bold tracking-widest uppercase lg:sr-only">
          About
        </h2>
      </div>
      <div className="text-foreground/90 space-y-4">
        <p>
          I&apos;m a fullstack software engineer who loves building immersive,
          scalable web experiences. With a broad range of skills and hands-on
          experience across the stack, I enjoy working closely with users to
          iterate quickly and solve tough problems, no matter the industry.
        </p>
        <p>
          Over the years, I&apos;ve developed software for a wide range of
          organizations—from scrappy startups and ad agencies to large,
          established companies. Lately, I&apos;ve been building products from
          the ground up: talking to users, identifying real problems, and moving
          fast to solve them.
        </p>
        <p>
          Outside of developing software, you&apos;ll usually find me biking
          around Chicago, playing soccer, diving into a video game, or checking
          out new restaurants with my partner.
        </p>
      </div>
    </section>
  );
};
