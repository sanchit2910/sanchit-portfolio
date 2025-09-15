import { 
  Smartphone, 
  Database, 
  Code, 
  Globe, 
  Server, 
  Map,
  Zap,
  Settings
} from "lucide-react";

const skills = [
  {
    name: "Kotlin",
    description: "Primary Language",
    icon: Smartphone,
    color: "primary"
  },
  {
    name: "Java",
    description: "Android Development",
    icon: Code,
    color: "primary"
  },
  {
    name: "Android SDK",
    description: "Jetpack Components",
    icon: Settings,
    color: "accent"
  },
  {
    name: "MVVM Architecture",
    description: "Clean Architecture",
    icon: Zap,
    color: "primary"
  },
  {
    name: "Room Database",
    description: "Offline-first Apps",
    icon: Database,
    color: "accent"
  },
  {
    name: "Firebase",
    description: "Auth & Firestore",
    icon: Server,
    color: "primary"
  },
  {
    name: "RESTful APIs",
    description: "API Integration",
    icon: Globe,
    color: "accent"
  },
  {
    name: "Angular",
    description: "Web Development",
    icon: Map,
    color: "primary"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="skills-title">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg" data-testid="skills-subtitle">Technologies I work with to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const colorClass = skill.color === 'primary' ? 'text-primary bg-primary/10 group-hover:bg-primary/20' : 'text-accent bg-accent/10 group-hover:bg-accent/20';
            
            return (
              <div 
                key={skill.name}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center transition-colors ${colorClass}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2" data-testid={`skill-name-${index}`}>{skill.name}</h3>
                  <p className="text-sm text-muted-foreground" data-testid={`skill-description-${index}`}>{skill.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
