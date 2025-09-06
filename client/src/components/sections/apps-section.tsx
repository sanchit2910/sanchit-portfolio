import { Smartphone } from "lucide-react";

export default function AppsSection() {
  return (
    <section id="apps" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="apps-title">Published Apps</h2>
          <p className="text-muted-foreground text-lg" data-testid="apps-subtitle">Android applications available on Google Play Store</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center" data-testid="apps-icon">
              <Smartphone className="w-12 h-12 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-card-foreground" data-testid="apps-coming-soon-title">Coming Soon!</h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto" data-testid="apps-coming-soon-description">
              I'm currently working on exciting new Android applications that will be published on the Google Play Store. 
              This section will showcase my published apps with descriptions, features, and direct links to download.
            </p>
            
            {/* Template for future apps */}
            <div className="grid md:grid-cols-2 gap-6 mt-12 opacity-50">
              <div className="bg-background rounded-xl p-6 border border-border" data-testid="app-template-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg"></div>
                <h4 className="font-semibold mb-2">App Name</h4>
                <p className="text-sm text-muted-foreground mb-4">App description and key features</p>
                <button className="bg-primary/20 text-primary px-4 py-2 rounded-lg">Play Store Link</button>
              </div>
              
              <div className="bg-background rounded-xl p-6 border border-border" data-testid="app-template-2">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg"></div>
                <h4 className="font-semibold mb-2">App Name</h4>
                <p className="text-sm text-muted-foreground mb-4">App description and key features</p>
                <button className="bg-primary/20 text-primary px-4 py-2 rounded-lg">Play Store Link</button>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mt-8" data-testid="apps-check-back-message">
              Check back soon for updates on my latest app releases!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
