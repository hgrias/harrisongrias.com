import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import Link from "next/link";
import { AboutSection } from "./components/about/AboutSection";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { ProjectSection } from "./components/projects/ProjectSection";
import { Socials } from "./components/Socials";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col px-6 py-12 font-sans md:flex-row md:px-12 md:py-16 lg:py-0">
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

        <Socials />
      </header>

      {/* Right Scrollable Content */}
      <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
        <AboutSection />

        <ExperienceSection experiences={experiences} />

        <ProjectSection projects={projects} />
      </main>
    </div>
  );
}
