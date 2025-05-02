type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  content?: string;
};

export const blogData: BlogPost[] = [
  {
    id: "mastering-generative-ai",
    title: "Mastering Generative AI: A Comprehensive Guide",
    excerpt: "Explore the latest techniques in generative AI models and how they're revolutionizing creative processes across industries.",
    category: "Generative AI",
    date: "April 28, 2025",
    readTime: "8 min read",
    coverImage: "generative-ai.jpg",
    content: "This is a placeholder for a full blog post about Generative AI."
  },
  {
    id: "data-visualization-best-practices",
    title: "Data Visualization Best Practices for AI Scientists",
    excerpt: "Learn how to create impactful data visualizations that effectively communicate complex AI concepts to any audience.",
    category: "Data Science",
    date: "April 15, 2025",
    readTime: "6 min read",
    coverImage: "data-viz.jpg"
  },
  {
    id: "neural-networks-explained",
    title: "Neural Networks Explained: A Beginner's Guide",
    excerpt: "Demystifying neural networks with simple explanations and practical examples for beginners in the field.",
    category: "Machine Learning",
    date: "March 30, 2025",
    readTime: "10 min read",
    coverImage: "neural-networks.jpg"
  },
  {
    id: "future-of-ai-ethics",
    title: "The Future of AI Ethics: Challenges and Solutions",
    excerpt: "Examining the ethical considerations in artificial intelligence development and implementation.",
    category: "AI Ethics",
    date: "March 22, 2025",
    readTime: "7 min read",
    coverImage: "ai-ethics.jpg"
  },
  {
    id: "natural-language-processing-advancements",
    title: "Recent Advancements in Natural Language Processing",
    excerpt: "A deep dive into the latest breakthroughs in NLP and their applications in various domains.",
    category: "NLP",
    date: "March 10, 2025",
    readTime: "9 min read",
    coverImage: "nlp.jpg"
  },
  {
    id: "reinforcement-learning-practical-applications",
    title: "Practical Applications of Reinforcement Learning",
    excerpt: "Discover how reinforcement learning is being applied in real-world scenarios from gaming to robotics.",
    category: "Reinforcement Learning",
    date: "February 28, 2025",
    readTime: "8 min read",
    coverImage: "reinforcement-learning.jpg"
  }
];