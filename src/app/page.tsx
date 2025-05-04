import Link from "next/link";
import { AboutSection } from "./components/about/AboutSection";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { ProjectSection } from "./components/projects/ProjectSection";

export default function Home() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/hgrias" },
    { name: "LinkedIn", url: "https://linkedin.com/in/harrisongrias" },
  ];

  const experience = [
    {
      company: "Current Company",
      title: "Senior Software Engineer",
      period: "2022 — Present",
      description:
        "Building scalable web applications and leading frontend initiatives.",
      technologies: ["React", "TypeScript", "Next.js"],
    },
    {
      company: "Previous Company",
      title: "Software Engineer",
      period: "2019 — 2022",
      description: "Developed and maintained complex web applications.",
      technologies: ["JavaScript", "React", "Node.js"],
    },
  ];

  const projects = [
    {
      name: "Project 1",
      description:
        "A comprehensive web application solving real-world problems.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      githubLink: "#",
    },
    {
      name: "Project 2",
      description: "An innovative tool to improve developer productivity.",
      technologies: ["React", "GraphQL", "Prisma"],
      githubLink: "#",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Sidebar */}
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
            <Link href={"/"}>Harrison Grias</Link>
          </h1>
          <h2 className="text-foreground mt-3 text-lg font-medium tracking-tight sm:text-xl">
            Full Stack Software Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            Crafting elegant, performant web experiences that solve real-world
            problems.
          </p>
        </div>

        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              className="text-white transition hover:text-blue-200"
            >
              {social.name}
            </Link>
          ))}
        </div>
      </header>

      {/* Right Scrollable Content */}
      <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
        <AboutSection />

        <ExperienceSection experiences={experience} />

        <ProjectSection projects={projects} />
      </main>
    </div>
  );
}
