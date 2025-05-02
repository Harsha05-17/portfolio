type SkillCategory = {
  name: string;
  icon: string;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    name: "Programming",
    icon: "fas fa-code",
    skills: ["Python", "Java", "R", "Kotlin", "SQL", "C"]
  },
  {
    name: "Generative AI & LLMs",
    icon: "fas fa-robot",
    skills: ["LangChain", "OpenAI AI", "Gemini AI", "Meta AI", "Claude AI", "Hugging Face"]
  },
  {
    name: "AI/ML Frameworks",
    icon: "fas fa-microchip",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "YOLO", "Scikit-Learn"]
  },
  {
    name: "AI Automation",
    icon: "fas fa-cogs",
    skills: ["AutoGPT", "AI Agents"]
  },
  {
    name: "Other Skills",
    icon: "fas fa-tools",
    skills: ["Web Development", "API Integration", "UI/UX Design"]
  }
];
