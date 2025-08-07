type Experience = {
  company: string;
  role: string;
  description: string;
  technologies: string[];
  outcome: string;
};

export const experienceData: Experience[] = [
  {
    company: "Renault Nissan Automotive India Pvt. Ltd.",
    role: "AIoT Intern",
    description: "Worked on real-time industrial projects integrating AI and IoT technologies for automated monitoring and assembly assistance in manufacturing environments.",
    technologies: ["OpenCV", "Aruco", "YOLOv8", "Flask", "PostgreSQL", "Computer Vision", "IIoT"],
    outcome: "Implemented Aruco-based assembly guidance for bolt-tightening validation, developed AI-powered clamp detection systems, and built KitKart — a full-stack web platform for smart trolley maintenance and tracking."
  },
  {
    company: "Steel Authority of India Limited (SAIL)",
    role: "Web Development Intern",
    description: "Developed a full-featured Guesthouse Management System to handle bookings, guest records, and room availability across two official guesthouses.",
    technologies: ["Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    outcome: "Delivered a responsive and intuitive web interface that streamlined booking operations and enhanced administrative efficiency for multi-guesthouse coordination."
  },
  {
    company: "Pantech Solutions",
    role: "AI & Machine Learning Intern",
    description: "Worked on AI model training, computer vision, and NLP projects.",
    technologies: ["Python", "TensorFlow", "OpenCV", "NLP"],
    outcome: "Developed an ML model for predictive analytics."
  },
  {
    company: "Ethernet Private Limited",
    role: "Data Science Intern",
    description: "Focused on Python-based data science techniques.",
    technologies: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
    outcome: "Built data-driven models for business insights."
  }
];
