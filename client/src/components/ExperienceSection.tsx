import { forwardRef } from "react";
import { experienceData } from "@/lib/experience-data";

const ExperienceSection = forwardRef<HTMLElement>(
  (props, ref) => {
    return (
      <section 
        ref={ref}
        id="experience" 
        className="py-20 bg-[#1E1E2F]/50 dark:bg-gray-100/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-glow text-[#00DDEB] dark:text-[#00DDEB]">Experience & Internships</h2>
          
          <div className="relative pl-10 md:pl-16 max-w-3xl mx-auto">
            {experienceData.map((experience, index) => (
              <div 
                key={index} 
                className={`timeline-item relative ${
                  index !== experienceData.length - 1 ? "pb-12" : ""
                }`}
              >
                <div className="card rounded-xl p-6 dark:text-gray-800">
                  <h3 className="text-xl font-poppins font-semibold mb-2 text-[#00DDEB] dark:text-[#00DDEB]">
                    {experience.company}
                  </h3>
                  <h4 className="text-lg font-medium text-[#FF6F91] dark:text-[#FF6F91] mb-4">
                    {experience.role}
                  </h4>
                  
                  <p className="text-gray-300 dark:text-gray-700 mb-4">
                    {experience.description}
                  </p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-[#6B5B95]/20 px-3 py-1 rounded-full text-sm dark:text-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-[#00DDEB] dark:text-[#00DDEB] mb-2">Outcome:</h4>
                    <p className="text-gray-300 dark:text-gray-700">
                      {experience.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
