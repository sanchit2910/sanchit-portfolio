import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-pattern pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-title">
            <span className="gradient-text">Sanchit Khandelwal</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto" data-testid="hero-subtitle">
            Android Developer | Kotlin | MVVM | Firebase | API Integration | Google Maps
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="hero-description">
            Crafting exceptional mobile experiences with 4+ years of Android development expertise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 animate-bounce-gentle"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="border border-border px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-all"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="mt-16 animate-slide-up">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl" data-testid="hero-icon">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
