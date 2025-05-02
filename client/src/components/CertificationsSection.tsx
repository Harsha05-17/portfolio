import { forwardRef } from "react";
import { certificationsData } from "@/lib/certifications-data";

const CertificationsSection = forwardRef<HTMLElement>(
  (props, ref) => {
    return (
      <section ref={ref} id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-glow text-[#00DDEB] dark:text-[#00DDEB]">Certifications</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationsData.map((certification, index) => (
              <div 
                key={index} 
                className="card rounded-xl p-6 hover:border-[#00DDEB] border border-transparent transition-colors dark:text-gray-800"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#6B5B95]/20 mx-auto mb-6">
                  <i className={`${certification.icon} text-3xl text-[#00DDEB]`}></i>
                </div>
                
                <h3 className="text-lg font-poppins font-semibold text-center mb-2">
                  {certification.organization}
                </h3>
                <p className="text-center text-gray-300 dark:text-gray-700">
                  {certification.title}
                </p>
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
