import { forwardRef } from "react";

const ContactSection = forwardRef<HTMLElement>(
  (props, ref) => {
    return (
      <section 
        ref={ref}
        id="contact" 
        className="py-20 bg-[#1E1E2F]/50 dark:bg-gray-100/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-glow text-[#00DDEB] dark:text-[#00DDEB]">Contact</h2>
          
          <div className="max-w-3xl mx-auto card rounded-xl p-8 border border-transparent hover:border-[#00DDEB] transition-colors">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-poppins font-semibold mb-6 text-[#00DDEB] dark:text-[#00DDEB]">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <div className="bg-[#6B5B95]/30 p-4 rounded-full mb-4">
                    <i className="fas fa-envelope text-[#00DDEB] text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-gray-800">Email</h4>
                    <a 
                      href="mailto:harshinishivaniya@gmail.com" 
                      className="text-gray-300 dark:text-gray-700 hover:text-[#00DDEB] dark:hover:text-[#00DDEB] transition-colors"
                    >
                      harshinishivaniya@gmail.com
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-poppins font-semibold mb-4 text-[#00DDEB] dark:text-[#00DDEB]">Follow Me</h4>
                  
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="https://www.linkedin.com/in/harshini-b-95a08b28b" 
                      className="bg-[#6B5B95]/30 p-3 rounded-full hover:bg-[#6B5B95]/50 transition-colors" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in text-[#00DDEB] text-xl"></i>
                    </a>
                    
                    <a 
                      href="https://www.kaggle.com/harshinishivaniya" 
                      className="bg-[#6B5B95]/30 p-3 rounded-full hover:bg-[#6B5B95]/50 transition-colors" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-kaggle text-[#00DDEB] text-xl"></i>
                    </a>
                    
                    <a 
                      href="https://github.com/Harsha05-17" 
                      className="bg-[#6B5B95]/30 p-3 rounded-full hover:bg-[#6B5B95]/50 transition-colors" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github text-[#00DDEB] text-xl"></i>
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="mailto:harshinishivaniya@gmail.com" 
                    className="inline-block px-8 py-3 bg-[#00DDEB] text-[#1E1E2F] font-bold rounded-full hover:bg-white transition-colors duration-300 transform hover:scale-105"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ContactSection.displayName = "ContactSection";

export default ContactSection;
