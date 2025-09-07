import { ExternalLink, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2" data-testid="footer-name">
              Sanchit Khandelwal
            </div>
            <p className="text-muted-foreground" data-testid="footer-tagline">
              Android Developer | Skilled in developing robust Android applications
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="https://linkedin.com/in/sanchit-khandelwal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-linkedin"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
            <a 
              href="mailto:khandelwalsanchu2910@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground" data-testid="footer-copyright">
            © 2024 Sanchit Khandelwal. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
