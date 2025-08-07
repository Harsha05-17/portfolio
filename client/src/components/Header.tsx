import { useState, useEffect } from "react";

type HeaderProps = {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLElement>;
  };
};

export default function Header({ sectionRefs }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 w-full bg-[#090621]/90 backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow-md shadow-[#B026FF]/20" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center w-full">
          {/* Desktop Navigation */}
          <div className="flex-grow-0 w-10"></div> {/* Spacer for balance */}
          
          <nav className="hidden md:flex justify-center flex-grow">
            <div className="flex space-x-10">
              {Object.keys(sectionRefs).map((section) => (
                <a
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="nav-link text-gray-200 hover:text-[#54E8FF] transition-colors duration-300 cursor-pointer px-2"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-700/50 transition-colors"
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
                className="nav-link text-gray-200 hover:text-[#54E8FF] py-2 transition-colors duration-300 cursor-pointer"
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
