import { Button } from "@/components/ui/button";
import { MapPin, Download, Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200" 
                alt="Sanchit Khandelwal - Android Developer" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background"
                data-testid="about-profile-image"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground" data-testid="about-name">
                Sanchit Khandelwal
              </h2>
              
              <p className="text-muted-foreground text-lg font-medium" data-testid="about-role">
                Android Developer
              </p>

              <div className="flex items-center justify-center md:justify-start space-x-2 text-muted-foreground" data-testid="location-info">
                <MapPin className="w-4 h-4" />
                <span>Jaipur, India</span>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-2xl" data-testid="about-description">
                A passionate and experienced Android Developer with a knack for building beautiful, functional, and user-friendly mobile applications.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                <Button 
                  variant="outline" 
                  className="inline-flex items-center space-x-2 border-border hover:bg-muted" 
                  data-testid="button-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="inline-flex items-center space-x-2 border-border hover:bg-muted" 
                  data-testid="button-resume"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
