import { forwardRef } from "react";
import ThreeScene from "./ThreeScene";

type HeroSectionProps = {
  onExploreClick: () => void;
};

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ onExploreClick }, ref) => {
    return (
      <section 
        ref={ref}
        id="home" 
        className="relative min-h-screen flex flex-col justify-center items-center pt-20"
      >
        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h2 className="font-poppins font-semibold text-2xl md:text-3xl mb-4 text-[#54E8FF] cyan-glow dark:text-[#090621]">
              Hello, I'm
            </h2>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 tracking-tight">
              <span className="text-white purple-glow">B.HARSHINI</span>
            </h1>
            <br />
            <div className="h-1 w-full max-w-[24rem] md:max-w-[36rem] bg-gradient-to-r from-[#B026FF] to-[#54E8FF] rounded-full mb-6 shadow-lg"></div>
            <h2 className="font-poppins text-xl md:text-2xl mb-8 text-[#54E8FF] cyan-glow dark:text-[#090621] max-w-2xl">
            "Building the future with Generative AI, LLMs, and intelligent agent automation."
            </h2>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={onExploreClick}
                className="inline-block px-8 py-3 bg-[#B026FF] text-white font-bold rounded-md hover:bg-[#9f00ff] transition-all duration-300 transform hover:scale-105 border-glow"
              >
                Explore My Work
              </button>
              <a 
                href="/files/HarshiniB_resume.pdf" 
                download="Harshini_B_Resume.pdf"
                className="inline-block px-8 py-3 bg-transparent text-[#54E8FF] font-bold rounded-md border border-[#54E8FF] hover:bg-[#54E8FF]/10 transition-all duration-300 text-center"
              >
                Download Resume
              </a>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex space-x-3">
                <a href="https://www.linkedin.com/in/harshini-b-95a08b28b" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 border border-gray-800 flex items-center justify-center hover:scale-110 transition-transform">
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
                <a href="https://github.com/Harsha05-17" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 border border-gray-800 flex items-center justify-center hover:scale-110 transition-transform">
                  <i className="fab fa-github text-white"></i>
                </a>
                <a href="https://www.kaggle.com/harshinishivaniya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-300 to-purple-500 border border-gray-800 flex items-center justify-center hover:scale-110 transition-transform">
                  <i className="fab fa-kaggle text-white"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <ThreeScene />
          </div>
        </div>
        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-[#54E8FF] text-xl"></i>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
