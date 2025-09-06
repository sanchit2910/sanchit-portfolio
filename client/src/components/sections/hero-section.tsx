import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-dark-background">
      <div className="hero-content container mx-auto px-4 text-center">
        <div className="animate-fade-in space-y-8">
          {/* Greeting */}
          <div className="hero-greeting text-accent text-lg md:text-xl opacity-90" data-testid="hero-greeting">
            HELLO, WORLD.
          </div>
          
          {/* Main Title */}
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl text-white mb-4" data-testid="hero-title">
            I'm <span className="gradient-text">Sanchit</span>
            <br />
            <span className="gradient-text">Khandelwal</span>.
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle text-gray-300 text-sm md:text-lg tracking-wider max-w-4xl mx-auto leading-relaxed" data-testid="hero-subtitle">
            ANDROID DEVELOPER | KOTLIN | MVVM | FIREBASE | API INTEGRATION | GOOGLE MAPS
          </p>
          
          {/* Call to Action Button */}
          <div className="pt-8">
            <Button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl shadow-primary/20"
              data-testid="button-more-about-me"
            >
              More About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
