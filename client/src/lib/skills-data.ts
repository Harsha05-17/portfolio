type SkillCategory = {
  name: string;
  icon: string;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    name: "Programming",
    icon: "fas fa-code",
    skills: ["Python", "Java", "R", "SQL", "C"]
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
    name: "AI Automation & Agentic AI",
    icon: "fas fa-cogs",
    skills: ["AutoGPT", "AI Agents", "BabyAGI", "CrewAI","zapier"]
  },
  {
    name: "Industrial IoT (IIoT)",
    icon: "fas fa-industry",
    skills: ["Jetson Nano", "Edge Programming", "Industrial Data Acquisition", "Assembly Line Monitoring", "MQTT & Modbus", "Sensor Fusion", "Predictive Maintenance", "Secure IoT Networks"]
  },
  {
    name: "Web Development",
    icon: "fas fa-globe",
    skills: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS", "JSP", "Flask"]
  },
  {
    name: "API Integration",
    icon: "fas fa-plug",
    skills: ["RESTful APIs", "Third-party SDKs", "FastAPI","Postman"]
  },
  {
    name: "UI/UX Design",
    icon: "fas fa-paint-brush",
    skills: ["Responsive Design", "Prototyping", "User-Centered Interfaces"]
  }
];
