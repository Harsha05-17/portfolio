import { forwardRef } from "react";
import { skillsData } from "@/lib/skills-data";

const SkillsSection = forwardRef<HTMLElement>(
  (props, ref) => {
    return (
      <section 
        ref={ref}
        id="skills" 
        className="py-20 bg-[#1E1E2F]/50 dark:bg-gray-100/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-glow text-[#00DDEB] dark:text-[#00DDEB]">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, index) => (
              <div 
                key={index} 
                className={`card rounded-xl p-6 overflow-hidden ${
                  category.name === "Other Skills" ? "col-span-1 md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <h3 className="text-xl font-poppins font-semibold mb-6 text-[#00DDEB] flex items-center dark:text-[#00DDEB]">
                  <i className={`${category.icon} mr-3`}></i> {category.name}
                </h3>
                
                <div className={`grid ${category.name === "Other Skills" ? "grid-cols-3" : "grid-cols-2"} gap-3`}>
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="skill-badge bg-[#6B5B95]/20 px-4 py-2 rounded-lg text-center border border-[#6B5B95]/40 hover:border-[#00DDEB] dark:text-gray-800"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
