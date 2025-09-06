import { Button } from "@/components/ui/button";
import { Linkedin, Github, ExternalLink, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center hero-dark-background">
      <div className="hero-content container mx-auto px-4 text-center flex-1 flex flex-col justify-center">
        <div className="animate-fade-in space-y-6">
          {/* Greeting */}
          <div className="hero-greeting text-pink-500 text-lg md:text-xl font-semibold tracking-wider" data-testid="hero-greeting">
            HELLO, WORLD.
          </div>
          
          {/* Main Title */}
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight" data-testid="hero-title">
            I'm Sanchit
            <br />
            Khandelwal.
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle text-gray-300 text-sm md:text-base tracking-widest max-w-2xl mx-auto" data-testid="hero-subtitle">
            ANDROID DEVELOPER | KOTLIN | MVVM | FIREBASE | API INTEGRATION
          </p>
          
          {/* Call to Action Button */}
          <div className="pt-6">
            <Button
              variant="outline"
              onClick={scrollToAbout}
              className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-none text-sm font-semibold tracking-wider transition-all uppercase"
              data-testid="button-more-about-me"
            >
              MORE ABOUT ME
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Social Icons at bottom */}
      <div className="pb-8 flex space-x-8">
        <a 
          href="https://linkedin.com/in/sanchit-khandelwal" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors"
          data-testid="social-linkedin"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="https://github.com/sanchit-khandelwal" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors"
          data-testid="social-github"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="#projects" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-gray-400 hover:text-pink-500 transition-colors"
          data-testid="social-portfolio"
        >
          <ExternalLink className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
