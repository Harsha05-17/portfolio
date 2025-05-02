type Experience = {
  company: string;
  role: string;
  description: string;
  technologies: string[];
  outcome: string;
};

export const experienceData: Experience[] = [
  {
    company: "Pantech Solutions",
    role: "AI & Machine Learning Internship",
    description: "Worked on AI model training, computer vision, and NLP projects.",
    technologies: ["Python", "TensorFlow", "OpenCV", "NLP"],
    outcome: "Developed an ML model for predictive analytics."
  },
  {
    company: "UCS Private Limited",
    role: "Web Development Internship",
    description: "Designed dynamic websites using front-end and back-end frameworks.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "MySQL"],
    outcome: "Built an interactive dashboard for user data management."
  },
  {
    company: "Ethernet Private Limited",
    role: "Data Science Internship",
    description: "Focused on Python-based data science techniques.",
    technologies: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
    outcome: "Built data-driven models for business insights."
  }
];
