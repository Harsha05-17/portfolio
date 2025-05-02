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
            <div className="mb-2">
              <span className="inline-block px-4 py-1 text-sm font-semibold bg-[#090621] text-[#54E8FF] border border-[#54E8FF] rounded-full mb-3 cyan-glow">
                AI & Data Science Portfolio
              </span>
            </div>
            <h2 className="font-poppins font-semibold text-xl md:text-2xl mb-1 text-[#54E8FF] cyan-glow dark:text-[#090621]">
              HARSHINI B
            </h2>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 purple-glow dark:text-[#090621] tracking-tight">
              MASTERING <span className="text-[#B026FF]">AI</span><br />
              <span className="text-[#54E8FF] cyan-glow">CONCEPTS</span>
            </h1>
            <div className="flex items-center mb-6 space-x-2">
              <div className="h-1 w-16 bg-gradient-to-r from-[#B026FF] to-[#54E8FF] rounded-full"></div>
              <span className="text-[#B026FF]">+</span>
              <span className="font-light text-gray-300">AI SCIENCE</span>
            </div>
            <h2 className="text-xl md:text-2xl text-gray-300 dark:text-gray-700 mb-8">
              Generative AI | Neural Networks | ML Engineering | Data Visualization
            </h2>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={onExploreClick}
                className="inline-block px-8 py-3 bg-[#B026FF] text-white font-bold rounded-md hover:bg-[#9f00ff] transition-all duration-300 transform hover:scale-105 border-glow"
              >
                Explore My Work
              </button>
              <button 
                className="inline-block px-8 py-3 bg-transparent text-[#54E8FF] font-bold rounded-md border border-[#54E8FF] hover:bg-[#54E8FF]/10 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 border border-gray-800"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 border border-gray-800"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-300 to-purple-500 border border-gray-800"></div>
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white">80%</span> AI Projects Completed
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <ThreeScene />
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-[#54E8FF] text-2xl"></i>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
