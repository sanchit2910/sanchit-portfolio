import { Circle, Star, Zap } from "lucide-react";

const experiences = [
  {
    title: "Junior Android Developer",
    company: "Tailored Solutions Pvt Ltd",
    period: "Jul 2023 – Present",
    description: "Engineered an asset management Android app, boosting operational efficiency by 30% through streamlined workflows. Applied offline-first functionality using Room Database, enabling uninterrupted usage in low-network environments. Optimized Kotlin-based codebase, reducing memory usage by 25% and improving load times by 30%, which increased user retention by 20%. Orchestrated API integrations with RESTful services for real-time data sync and secure authentication.",
    icon: Circle,
    color: "primary"
  },
  {
    title: "Software Developer", 
    company: "Java IT Solutions Pvt Ltd",
    period: "Jun 2022 – Jun 2023",
    description: "Developed and maintained cab and bus booking Android apps using MVVM, resulting in a 25% increase in daily active users. Integrated Google Maps API to enable real-time ride tracking and route optimization, enhancing customer satisfaction. Expanded skill set by contributing to Angular-based web apps, improving project delivery speed by 20%. Managed backend data using Microsoft SQL Server, improving query efficiency and reducing downtime by 25%.",
    icon: Star,
    color: "accent"
  },
  {
    title: "Intern Android Developer",
    company: "Finance Lookup Advisor", 
    period: "Aug 2021 – Jun 2022",
    description: "Built a refer-and-earn app using Java and Firebase, which increased user referrals by 40% within the first 3 months. Integrated Firebase Authentication and Firestore, ensuring secure user data management and reliable storage. Assisted senior developers in debugging and testing, reducing defect density by 20%. Applied Agile development practices, shortening release cycles and improving delivery timelines by 25%.",
    icon: Zap,
    color: "secondary"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="experience-title">Professional Experience</h2>
          <p className="text-muted-foreground text-lg" data-testid="experience-subtitle">My journey through the Android development landscape</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              const bgColorClass = experience.color === 'primary' 
                ? 'bg-primary' 
                : experience.color === 'accent' 
                  ? 'bg-accent' 
                  : 'bg-secondary border-2 border-border';
              const textColorClass = experience.color === 'secondary' ? 'text-foreground' : 'text-primary-foreground';
              const periodBgClass = experience.color === 'primary' 
                ? 'bg-primary/10 text-primary' 
                : experience.color === 'accent' 
                  ? 'bg-accent/10 text-accent' 
                  : 'bg-muted text-muted-foreground';
              const companyColorClass = experience.color === 'secondary' ? 'text-muted-foreground' : `text-${experience.color}`;
              
              return (
                <div key={index} className="relative flex items-start mb-12">
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${bgColorClass}`}>
                    <IconComponent className={`w-8 h-8 ${textColorClass}`} />
                  </div>
                  
                  <div className="ml-8 bg-card p-6 rounded-xl border border-border flex-1 hover:shadow-lg transition-shadow" data-testid={`experience-card-${index}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-card-foreground" data-testid={`experience-title-${index}`}>{experience.title}</h3>
                      <span className={`text-sm px-3 py-1 rounded-full font-medium ${periodBgClass}`} data-testid={`experience-period-${index}`}>
                        {experience.period}
                      </span>
                    </div>
                    <h4 className={`text-lg font-medium mb-3 ${companyColorClass}`} data-testid={`experience-company-${index}`}>
                      {experience.company}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`experience-description-${index}`}>
                      {experience.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
