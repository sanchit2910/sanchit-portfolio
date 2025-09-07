import { Circle, Star, Zap } from "lucide-react";

const experiences = [
  {
    title: "Junior Android Developer",
    company: "Tailored Solutions Pvt Ltd",
    period: "Jul 2023 – Present",
    description: "Led Android app development for asset management, delivering efficient, high-performance solutions. Implemented offline functionality with Room Database, enhancing user experience. Developed lightweight apps focusing on performance and resource efficiency. Collaborated with cross-functional teams for seamless integration and timely project delivery.",
    icon: Circle,
    color: "primary"
  },
  {
    title: "Software Developer", 
    company: "Jaya IT Solutions Pvt Ltd",
    period: "Jun 2022 – Jun 2023",
    description: "Built Android apps for cab and bus booking using MVVM architecture. Integrated APIs and Google Maps for location-based services. Expanded skill set by learning Angular and contributing to utility web applications. Contributed to web development using Angular and .NET. Managed databases using MS SQL Server for reliable backend operations.",
    icon: Star,
    color: "accent"
  },
  {
    title: "Intern Android Developer",
    company: "Finance Lookup Advisor", 
    period: "Aug 2021 – Jun 2022",
    description: "Developed a refer-and-earn Android app using Java and Firebase. Implemented secure user authentication with Firebase Authentication. Gained hands-on experience in mobile app development and problem-solving.",
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
