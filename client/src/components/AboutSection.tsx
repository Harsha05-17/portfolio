import { forwardRef } from "react";

const AboutSection = forwardRef<HTMLElement>(
  (props, ref) => {
    return (
      <section ref={ref} id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-glow text-[#00DDEB] dark:text-[#00DDEB]">About Me</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="card rounded-xl p-6 md:p-8 dark:text-gray-800">
              <p className="text-lg leading-relaxed mb-6">
                AI & Data Science student with expertise in Generative AI, Prompt Engineering, LLMs, and AI-powered automation. Passionate about building AI applications and exploring AI tools to improve automation. Looking forward to leveraging AI automation in real-world applications and contributing to cutting-edge AI research.
              </p>
              
              <a 
                href="/files/HarshiniB_resume.pdf" 
                download="Harshini_B_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-[#6B5B95]/20 hover:bg-[#6B5B95]/40 border border-[#6B5B95] rounded-lg transition-colors duration-300 mb-8"
              >
                <i className="fas fa-download mr-2"></i> Download Resume
              </a>
              
              <div className="mt-6">
                <h3 className="text-xl font-poppins font-semibold mb-4 text-[#00DDEB]">Education</h3>
                <div className="space-y-4">
                  <div className="card p-4 rounded-lg dark:text-gray-800">
                    <h4 className="font-medium">B.Tech in AI & Data Science</h4>
                    <p className="text-gray-400 dark:text-gray-600">Excel Engineering College (2022-2026)</p>
                    <p className="text-[#00DDEB]">CGPA: 9.5</p>
                  </div>
                  
                  <div className="card p-4 rounded-lg dark:text-gray-800">
                    <h4 className="font-medium">HSC</h4>
                    <p className="text-gray-400 dark:text-gray-600">Kongu Vellalar Matric Hr Sec School (2021-2022)</p>
                    <p className="text-[#00DDEB]">89%</p>
                  </div>
                  
                  <div className="card p-4 rounded-lg dark:text-gray-800">
                    <h4 className="font-medium">SSLC</h4>
                    <p className="text-gray-400 dark:text-gray-600">Kongu Vellalar Matric Hr Sec School (2019-2020)</p>
                    <p className="text-[#00DDEB]">70%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

AboutSection.displayName = "AboutSection";

export default AboutSection;
