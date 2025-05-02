import { forwardRef, useState } from "react";
import { projectsData } from "@/lib/projects-data";

const ProjectsSection = forwardRef<HTMLElement>(
  (props, ref) => {
    // Project card hover effect state
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
      if (hoveredCard !== index) return;
      
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const handleMouseEnter = (index: number) => {
      setHoveredCard(index);
    };
    
    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      setHoveredCard(null);
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };
    
    return (
      <section ref={ref} id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-glow text-[#00DDEB] dark:text-[#00DDEB]">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div 
                key={index}
                className={`project-card card rounded-xl p-6 overflow-hidden ${project.fullWidth ? "md:col-span-2" : ""}`}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <h3 className="text-xl font-poppins font-semibold mb-4 text-[#00DDEB] dark:text-[#00DDEB]">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 dark:text-gray-700 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[#6B5B95]/20 px-3 py-1 rounded-full text-sm dark:text-gray-800">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-medium text-[#00DDEB] dark:text-[#00DDEB] mb-2">Outcome:</h4>
                  <p className="text-gray-300 dark:text-gray-700">{project.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
