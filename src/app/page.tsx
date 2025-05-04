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
      company: "NomosLearning",
      title: "Founder & Lead Developer",
      period: "Aug 2024 — Present",
      description:
        "Developing an AI-powered learning platform that provides law students with intelligent study tools and personalized resources.",
      technologies: ["Next.js", "TypeScript", "React", "Postgres", "tRPC"],
      link: "https://www.nomoslearning.com/",
    },
    {
      company: "Discover Financial Services",
      title: "Senior Software Engineer, ML Operations",
      period: "June 2023 — Present",
      description:
        "Designing and developing a robust ML platform infrastructure, enabling efficient model training, deployment, and monitoring across diverse financial applications.",
      technologies: ["Python", "Kubernetes", "Argo Workflows", "ML Ops"],
      link: "https://www.discover.com/",
    },
    {
      company: "Leaf Trade",
      title: "Software Engineer",
      period: "Sep 2022 — Mar 2023",
      description:
        "Developed full stack features for a B2B cannabis marketplace, optimizing product ordering, implementing analytics logging, and migrating local development to Kubernetes.",
      technologies: [
        "Python",
        "Django",
        "Typescript",
        "React",
        "Postgres",
        "AWS",
      ],
      link: "https://leaf.trade/",
    },
    {
      company: "Publicis Sapient",
      title: "Software Engineer",
      period: "Feb 2020 — Sep 2022",
      description:
        "Built data visualization tools and automated Airflow ETL pipelines to help ad ops teams analyze customer insights. Deployed secure, scalable infrastructure on AWS and GCP for client workflow testing and deployment.",
      technologies: ["Python", "Kubernetes", "Data Engineering", "AWS", "GCP"],
      link: "https://www.publicissapient.com/",
    },
  ];

  const projects = [
    {
      name: "Project 1",
      description:
        "A comprehensive web application solving real-world problems.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "#",
    },
    {
      name: "Project 2",
      description: "An innovative tool to improve developer productivity.",
      technologies: ["React", "GraphQL", "Prisma"],
      link: "#",
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
          <p className="text-foreground/80 mt-4 max-w-xs leading-normal">
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
              className="hover:text-primary text-foreground transition"
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
