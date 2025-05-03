import { forwardRef } from "react";
import { blogData } from "@/lib/blog-data";

const BlogSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      id="blog" 
      className="py-20 relative"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center purple-glow dark:text-gray-800">
          AI & Data Science <span className="text-[#B026FF]">Insights</span>
        </h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          Sharing knowledge and discoveries in the world of AI and Data Science through in-depth articles and tutorials.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <div 
              key={post.id}
              className="card rounded-lg overflow-hidden transition-all hover:transform hover:scale-105 hover:cursor-pointer"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#B026FF]/30 to-[#54E8FF]/30 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-40">
                  {post.category === "Generative AI" && "🎨"}
                  {post.category === "Data Science" && "📊"}
                  {post.category === "Machine Learning" && "🧠"}
                  {post.category === "AI Ethics" && "⚖️"}
                  {post.category === "NLP" && "💬"}
                  {post.category === "Reinforcement Learning" && "🎮"}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="inline-block px-3 py-1 text-xs bg-[#B026FF] text-white rounded-full mb-2">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 cyan-glow dark:text-gray-800">{post.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <a 
                    href="https://github.com/Harsha05-17/portfolio-article-links-"
                    className="text-[#54E8FF] font-semibold text-sm flex items-center"
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
        
        <div className="text-center mt-12">
          <button className="inline-block px-8 py-3 bg-transparent text-[#B026FF] font-bold rounded-md border border-[#B026FF] hover:bg-[#B026FF]/10 transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
});

BlogSection.displayName = "BlogSection";

export default BlogSection;