import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

type HeaderProps = {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLElement>;
  };
};

export default function Header({ sectionRefs }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const sectionRef = sectionRefs[sectionId];
    
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full bg-[#090621]/90 dark:bg-white/90 backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow-md shadow-[#B026FF]/20 dark:shadow-gray-200/50" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            onClick={() => scrollToSection("home")}
            className="font-poppins font-bold text-2xl text-[#B026FF] dark:text-[#B026FF] text-glow cursor-pointer"
          >
            AI Science
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {Object.keys(sectionRefs).map((section) => (
              <a
                key={section}
                onClick={() => scrollToSection(section)}
                className="nav-link text-gray-200 dark:text-gray-800 hover:text-[#54E8FF] dark:hover:text-[#54E8FF] transition-colors duration-300 cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700/50 dark:hover:bg-gray-200/50 transition-colors"
          >
            {theme === "light" ? (
              <i className="fas fa-moon text-[#B026FF]"></i>
            ) : (
              <i className="fas fa-sun text-[#B026FF]"></i>
            )}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-700/50 dark:hover:bg-gray-200/50 transition-colors"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-[#54E8FF] text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden pb-4 ${isOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-3">
            {Object.keys(sectionRefs).map((section) => (
              <a
                key={section}
                onClick={() => scrollToSection(section)}
                className="nav-link text-gray-200 dark:text-gray-800 hover:text-[#54E8FF] dark:hover:text-[#54E8FF] py-2 transition-colors duration-300 cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
