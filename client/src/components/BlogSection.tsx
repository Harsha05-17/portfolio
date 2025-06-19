import { forwardRef } from "react";
import { blogData } from "../lib/blog-data.ts";

interface BlogPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
}

const BlogSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      id="blog" 
      className="py-20 relative bg-gray-900 text-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center cyan-glow">
          AI & Data Science <span className="text-[#00DDEB]">Insights</span>
        </h2>
        <p className="mb-12 text-center max-w-2xl mx-auto text-gray-300">
          Sharing knowledge and discoveries in the world of AI and Data Science through in-depth articles and tutorials.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post: BlogPost) => (
            <div 
              key={post.id}
              className="card rounded-lg overflow-hidden transition-all hover:transform hover:scale-105 hover:cursor-pointer bg-gray-800"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#00DDEB]/30 to-[#00A3B7]/30 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-40">
                  {post.category === "Generative AI" && "🎨"}
                  {post.category === "Data Science" && "📊"}
                  {post.category === "Machine Learning" && "🧠"}
                  {post.category === "AI Ethics" && "⚖️"}
                  {post.category === "NLP" && "💬"}
                  {post.category === "Reinforcement Learning" && "🎮"}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="inline-block px-3 py-1 text-xs bg-[#00DDEB] text-black rounded-full mb-2">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 cyan-glow">{post.title}</h3>
                <p className="mb-4 text-sm text-gray-300">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <a 
                    href="https://github.com/Harsha05-17/portfolio-article-links-"
                    className="text-[#00DDEB] font-semibold text-sm flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Article
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
});

BlogSection.displayName = "BlogSection";

export default BlogSection;
