import { Button } from "@/components/ui/button";
import { MapPin, Download, ExternalLink } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="about-title">About Me</h2>
          <p className="text-muted-foreground text-lg" data-testid="about-subtitle">Get to know the developer behind the code</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed" data-testid="about-description-1">
              I'm a passionate Android Developer with 4+ years of experience building robust, scalable mobile applications. 
              Based in Jaipur, India, I specialize in modern Android development using Kotlin, MVVM architecture, 
              and cutting-edge technologies like Firebase and API integration.
            </p>
            <p className="text-lg text-foreground leading-relaxed" data-testid="about-description-2">
              My journey in software development has taken me through various domains, from transport management 
              systems to refer-and-earn applications, always with a focus on clean code, user experience, 
              and performance optimization.
            </p>

            <div className="flex items-center space-x-4 text-muted-foreground" data-testid="location-info">
              <MapPin className="w-5 h-5" />
              <span>Jaipur, India</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="inline-flex items-center space-x-2" data-testid="button-linkedin">
                <a href="https://linkedin.com/in/sanchit-khandelwal" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
              </Button>
              
              <Button variant="outline" className="inline-flex items-center space-x-2" data-testid="button-resume">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </Button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional developer workspace with multiple monitors and coding setup" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="about-image"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
