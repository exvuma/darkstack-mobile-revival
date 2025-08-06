import logo from '@/assets/darkstack7-logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Company Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img src={logo} alt="DarkStack7" className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">
                  DARK<span className="text-primary">STACK</span>
                  <span className="text-primary">7</span>
                </span>
                <span className="text-sm text-accent font-medium">Cyber Defense</span>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-2">
                Professional Cybersecurity Services
              </p>
              <p className="text-xs text-muted-foreground">
                Strategic • Responsive • Reliable
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-muted-foreground mb-4 md:mb-0">
                © 2024 DarkStack7. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a>
                <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;