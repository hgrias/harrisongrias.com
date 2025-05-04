import Link from "next/link";
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
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <Link href={"/"}>Harrison Grias</Link>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
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
        {/* About Section */}
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
            innovative, user-centric web applications. With expertise in modern
            web technologies, I transform complex problems into elegant,
            efficient solutions.
          </p>
          <p>
            My approach combines technical excellence with creative
            problem-solving, ensuring that every project not only meets but
            exceeds expectations.
          </p>
        </section>

        {/* Experience Section */}
        <ExperienceSection experiences={experience} />

        {/* Projects Section */}
        <ProjectSection projects={projects} />
      </main>
    </div>
  );
}
