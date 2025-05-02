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
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 animate-glow dark:text-[#1E1E2F]">
              Innovating the Future with <span className="text-[#00DDEB]">AI & Data Science</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 dark:text-gray-700 mb-8">
              AI & Data Science Student | Generative AI | AI Automation | Web Development
            </h2>
            <button 
              onClick={onExploreClick}
              className="inline-block px-8 py-3 bg-[#00DDEB] text-[#1E1E2F] font-bold rounded-full hover:bg-white transition-colors duration-300 transform hover:scale-105"
            >
              Explore My Work
            </button>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <ThreeScene />
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-[#00DDEB] text-2xl"></i>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
