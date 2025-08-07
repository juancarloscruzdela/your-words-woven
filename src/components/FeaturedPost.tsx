import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-blog.jpg";

export const FeaturedPost = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
          Featured Article
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Building Modern
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Web Applications
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
          Discover the latest trends, best practices, and cutting-edge techniques in modern web development.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center text-gray-300">
            <span className="font-semibold">Sarah Johnson</span>
            <span className="mx-3">•</span>
            <span>Dec 15, 2024</span>
            <span className="mx-3">•</span>
            <span>8 min read</span>
          </div>
        </div>
        
        <Link to="/blog/featured-post">
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Read Article
          </Button>
        </Link>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};