import { useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  // Section refs for smooth scrolling
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const certificationsRef = useRef<HTMLElement>(null);
  const blogRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  
  // Mapping of section IDs to refs
  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    experience: experienceRef,
    certifications: certificationsRef,
    blog: blogRef,
    contact: contactRef
  };
  
  // Function to scroll to projects section when "Explore My Work" is clicked
  const scrollToProjects = () => {
    if (projectsRef.current) {
      window.scrollTo({
        top: projectsRef.current.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <>
      <Header sectionRefs={sectionRefs} />
      <ParticlesBackground />
      
      <main>
        <HeroSection ref={homeRef} onExploreClick={scrollToProjects} />
        <AboutSection ref={aboutRef} />
        <SkillsSection ref={skillsRef} />
        <ProjectsSection ref={projectsRef} />
        <ExperienceSection ref={experienceRef} />
        <CertificationsSection ref={certificationsRef} />
        <BlogSection ref={blogRef} />
        <ContactSection ref={contactRef} />
      </main>
      
      <Footer />
    </>
  );
}
