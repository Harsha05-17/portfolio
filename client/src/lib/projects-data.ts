type Technology = string;

type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  outcome: string;
  githubUrl: string;
  fullWidth?: boolean;
};

export const projectsData: Project[] = [
  {
    title: "AI-Powered Traffic Monitoring System",
    description: "Automated security by detecting faces, covered features, and anomalies in real-time traffic scenarios.",
    technologies: ["OpenCV", "YOLO", "Python", "TensorFlow", "Deep Learning"],
    outcome: "Real-time security monitoring with advanced anomaly detection.",
    githubUrl: "https://github.com/Harsha05-17"
  },
  {
    title: "MindScribe: Thought-to-Text Simulation App",
    description: "Converted EEG brainwave signals into meaningful text.",
    technologies: ["Next.js", "Node.js", "Supabase", "TensorFlow", "OpenCV", "EEG Processing"],
    outcome: "Innovative interface for interpreting brain activity as text.",
    githubUrl: "https://github.com/Harsha05-17"
  },
  {
    title: "Auction AI - AI-Powered Bidding System",
    description: "Implemented a real-time bidding platform with multi-language support and AI analytics.",
    technologies: ["Python", "Flask", "MySQL/MongoDB", "Google Maps API"],
    outcome: "Advanced bidding system with real-time AI-driven insights.",
    githubUrl: "https://github.com/Harsha05-17"
  },
  {
    title: "Generative AI Image Synthesis",
    description: "Developed an AI-powered image generator for digital artwork.",
    technologies: ["GANs", "TensorFlow", "Hugging Face", "Diffusion Models"],
    outcome: "High-quality AI-generated artwork with customizable styles.",
    githubUrl: "https://github.com/Harsha05-17"
  },
  {
    title: "HopIn - An Event-based and Intra-Campus Transportation System",
    description: "Enabled smart ride coordination and AI-based cost splitting, reducing transport delays by 40% and improving user satisfaction to 98%.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Supabase", "Mapbox API", "OpenAI GPT"],
    outcome: "Significant improvement in campus transportation efficiency and user satisfaction.",
    githubUrl: "https://github.com/Harsha05-17",
    fullWidth: true
  }
];
