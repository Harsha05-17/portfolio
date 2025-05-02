type Certification = {
  organization: string;
  title: string;
  icon: string;
  linkedInUrl: string; // LinkedIn URL for viewing certificate
  logo?: string; // Optional logo image path
};

export const certificationsData: Certification[] = [
  {
    organization: "Google",
    title: "Generative AI Essentials",
    icon: "fab fa-google",
    linkedInUrl: "https://www.linkedin.com/in/harshini-b-95a08b28b/"
  },
  {
    organization: "IBM",
    title: "Machine Learning Specialization",
    icon: "fab fa-ibm",
    linkedInUrl: "https://www.linkedin.com/in/harshini-b-95a08b28b/",
    logo: "/images/ibm-logo.svg"
  },
  {
    organization: "Coursera",
    title: "Prompt Engineering",
    icon: "fas fa-certificate",
    linkedInUrl: "https://www.linkedin.com/in/harshini-b-95a08b28b/"
  },
  {
    organization: "GUVI",
    title: "Generative AI & AI App Development",
    icon: "fas fa-robot",
    linkedInUrl: "https://www.linkedin.com/in/harshini-b-95a08b28b/"
  },
  {
    organization: "More Certificates",
    title: "View on LinkedIn",
    icon: "fab fa-linkedin",
    linkedInUrl: "https://www.linkedin.com/in/harshini-b-95a08b28b/"
  }
];
