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
    title: "ARUCO (AI-Driven Assembly Guidance System)",
    description: "Automated assembly assistance with real-time detection and validation.",
    technologies: ["OpenCV", "YOLOv8", "Python", "Jetson Nano", "Computer Vision"],
    outcome: "Reduced human error in industrial assembly processes.",
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
    title: "Guesthouse Management System",
    description: "Web-based solution for managing bookings and guest records.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    outcome: "Streamlined booking operations and enhanced administrative efficiency.",
    githubUrl: "https://github.com/Harsha05-17"
  },
  {
    title: "KitKart: Trolley Maintenance Management System",
    description: "Smart platform for trolley maintenance with automated fault reporting.",
    technologies: ["HTML", "CSS", "Javascript", "Flask", "PostgreSQL"],
    outcome: "Reduced downtime and improved equipment reliability.",
    githubUrl: "https://github.com/Harsha05-17"
  },
  {
    title: "AI-Based Clamp Detection & Monitoring System",
    description: "Automated system for detecting and validating clamp placements using advanced computer vision and deep learning models.",
    technologies: ["OpenCV", "R-CNN", "Flask", "Roboflow", "Transformers"],
    outcome: "Accurate clamp detection and real-time feedback via a web interface, reducing manual inspection efforts and improving assembly precision.",
    githubUrl: "https://github.com/Harsha05-17"
  },
  {
    title: "Hopin - An Event-based and Intra-Campus Transportation System",
    description: "Enabled smart ride coordination and AI-based cost splitting, reducing transport delays by 40% and improving user satisfaction to 98%.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Supabase", "Mapbox API", "Gemini API"],
    outcome: "Streamlined event ride coordination through AI-powered route optimization and cost splitting, enhancing travel efficiency, reducing expenses, and simplifying ride-sharing logistics for large campus communities.",
    githubUrl: "https://github.com/Harsha05-17"
  }
];
