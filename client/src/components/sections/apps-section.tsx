import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, Cog } from "lucide-react";

const publishedApps = [
  {
    name: "SYSMA",
    subtitle: "Asset Management Application",
    description: "Sysma is transforming the manufacturing world with its advanced AI-driven solution, now available on the Play Store. Enhance your Overall Equipment Efficiency (OEE) and turn small operational changes into substantial financial gains. Our comprehensive app integrates Preventive Maintenance, ensuring your equipment operates at peak performance while reducing downtime and costs.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sysmaapp&pcampaignid=web_share",
    icon: Cog,
    color: "primary"
  },
  {
    name: "GMDC PARIVAHAN",
    subtitle: "Transport Management System",
    description: "Welcome to the GMDC Transport Management Application, your one-stop solution for efficient and hassle-free vehicle allotment process. Streamline your transport needs with this user-friendly app, designed to cater to GMDC employees, guests, drivers, and administrators. With a range of powerful features, this application transforms the way you manage and utilize vehicles for official purposes.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sysma.gmdc&pcampaignid=web_share",
    icon: Smartphone,
    color: "accent"
  }
];

export default function AppsSection() {
  return (
    <section id="apps" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="apps-title">Published Apps</h2>
          <p className="text-muted-foreground text-lg" data-testid="apps-subtitle">Android applications available on Google Play Store</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {publishedApps.map((app, index) => {
              const IconComponent = app.icon;
              const shadowClass = app.color === 'primary' ? 'hover:shadow-primary/10' : 'hover:shadow-accent/10';
              const iconBgClass = app.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent';
              
              return (
                <div 
                  key={app.name}
                  className={`bg-card rounded-2xl p-8 border border-border hover:shadow-2xl ${shadowClass} transition-all duration-300`}
                  data-testid={`app-card-${index}`}
                >
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${iconBgClass}`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-card-foreground" data-testid={`app-name-${index}`}>
                      {app.name}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium mb-4" data-testid={`app-subtitle-${index}`}>
                      {app.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6" data-testid={`app-description-${index}`}>
                    {app.description}
                  </p>
                  
                  <div className="text-center">
                    <Button asChild className="inline-flex items-center space-x-2" data-testid={`app-button-${index}`}>
                      <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        <span>View on Play Store</span>
                      </a>
                    </Button>
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
