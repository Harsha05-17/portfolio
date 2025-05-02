import { forwardRef } from "react";
import { certificationsData } from "@/lib/certifications-data";

const CertificationsSection = forwardRef<HTMLElement>(
  (props, ref) => {
    return (
      <section ref={ref} id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-glow text-[#00DDEB] dark:text-[#00DDEB]">Certifications</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certificationsData.map((certification, index) => (
              <div 
                key={index} 
                className="card rounded-xl p-6 hover:border-[#00DDEB] border border-transparent transition-colors dark:text-gray-800"
              >
                {certification.logo ? (
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6">
                    <img src={certification.logo} alt={`${certification.organization} logo`} className="h-14" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#6B5B95]/20 mx-auto mb-6">
                    <i className={`${certification.icon} text-3xl text-[#00DDEB]`}></i>
                  </div>
                )}
                
                <h3 className="text-lg font-poppins font-semibold text-center mb-2">
                  {certification.organization}
                </h3>
                <p className="text-center text-gray-300 dark:text-gray-700 mb-4">
                  {certification.title}
                </p>
                
                <div className="text-center">
                  <a 
                    href={certification.linkedInUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#00DDEB] hover:text-[#B026FF] transition-colors inline-flex items-center"
                  >
                    <span>View</span>
                    <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

CertificationsSection.displayName = "CertificationsSection";

export default CertificationsSection;
