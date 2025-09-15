import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sysma – Asset Management App",
    description: "Designed and launched an AI-powered manufacturing app to improve Overall Equipment Efficiency (OEE) by 25%. Implemented MVVM with offline-first Room Database, ensuring uninterrupted functionality without internet. Integrated REST APIs for equipment analytics, reporting, and predictive maintenance. Streamlined app performance, reducing APK size by 20% and supporting multiple user profiles for industrial environments.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    imageAlt: "AI-powered asset management application showing equipment efficiency dashboard",
    primaryTech: "Kotlin",
    technologies: ["Kotlin", "MVVM", "Room Database", "REST APIs", "AI Analytics"],
    color: "primary"
  },
  {
    title: "GMDC Parivahan – Transport Management",
    description: "Engineered a transport management app in Kotlin, automating vehicle allotment and driver scheduling. Integrated APIs for real-time vehicle booking, driver attendance, and cost tracking, enhancing transparency by 30%. Introduced maintenance scheduling and reporting features, improving fleet efficiency by 25%. Partnered with cross-functional teams to deploy the app for 500+ daily users with minimal downtime.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Transport management application showing vehicle tracking and booking interface",
    primaryTech: "Kotlin",
    technologies: ["Kotlin", "Real-time APIs", "Fleet Management", "Driver Scheduling"],
    color: "accent"
  },
  {
    title: "Referr – Refer-and-Earn Platform",
    description: "Developed an Android referral app using Java and Firebase, increasing referral-based signups by 40%. Implemented Firebase Authentication and Firestore for secure login and scalable data storage. Improved app performance by reducing API call failures by 20%, improving overall reliability. Delivered an intuitive UI that boosted average session time by 25%.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    imageAlt: "Refer and earn mobile application showing reward system interface",
    primaryTech: "Java",
    technologies: ["Java", "Firebase", "Authentication", "Performance Optimization"],
    color: "primary"
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
