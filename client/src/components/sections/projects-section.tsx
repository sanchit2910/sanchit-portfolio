import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "GMDC PARIVAHAN",
    description: "Developed a comprehensive transport management application using Kotlin, designed to streamline vehicle allotment and operations for GMDC employees, guests, drivers, and administrators. Collaborated with a cross-functional team to integrate APIs for real-time vehicle availability, booking, and driver attendance. Key features include guest transportation, cost management, maintenance scheduling, and detailed efficiency metrics, enhancing transparency and operational efficiency.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Transport management application showing vehicle tracking and booking interface",
    primaryTech: "Kotlin",
    technologies: ["Kotlin", "API Integration", "Real-time Tracking", "Cost Management"],
    color: "primary"
  },
  {
    title: "Referr",
    description: "Developed an Android application based on a refer and earn platform, demonstrating proficiency in Java programming and utilizing Firebase as the backend platform. Built during internship period with focus on user authentication, referral tracking, and secure data management.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Refer and earn mobile application showing reward system interface",
    primaryTech: "Java",
    technologies: ["Java", "Firebase", "Authentication", "Referral System"],
    color: "accent"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="projects-title">Featured Projects</h2>
          <p className="text-muted-foreground text-lg" data-testid="projects-subtitle">Showcasing my technical expertise through impactful solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const shadowClass = project.color === 'primary' ? 'hover:shadow-primary/10' : 'hover:shadow-accent/10';
            const buttonClass = project.color === 'primary' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-accent text-accent-foreground hover:bg-accent/90';
            const badgeClass = project.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent';
            
            return (
              <div 
                key={project.title}
                className={`group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl ${shadowClass} transition-all duration-300`}
                data-testid={`project-card-${index}`}
              >
                <img 
                  src={project.image} 
                  alt={project.imageAlt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`project-image-${index}`}
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-card-foreground" data-testid={`project-title-${index}`}>{project.title}</h3>
                    <Badge className={`text-xs px-2 py-1 rounded-full font-medium ${badgeClass}`} data-testid={`project-primary-tech-${index}`}>
                      {project.primaryTech}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`project-description-${index}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs"
                        data-testid={`project-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button className={`flex items-center space-x-2 ${buttonClass} transition-colors`} data-testid={`project-button-${index}`}>
                      <ExternalLink className="w-4 h-4" />
                      <span>View Details</span>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
