import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <>
      <Header />
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center bg-base text-neutral"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="min-h-screen flex flex-col items-center bg-white text-neutral"
      >
        <AboutMe />
      </section>
      <section id="experience" className=" min-h-screen bg-base text-neutral">
        <Experience />
      </section>
      <section id="projects" className="py-12 bg-base">
        <ProjectCarousel />
      </section>
    </>
  );
}
