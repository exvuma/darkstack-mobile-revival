import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/darkstack7-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Response Services', href: '#services' },
    { label: 'Resources & Links', href: '#resources' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="DarkStack7" className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">
                DARK<span className="text-primary">STACK</span>
                <span className="text-primary">7</span>
              </span>
              <span className="text-xs text-accent font-medium">Cyber Defense</span>
            </div>
          </div>

          {/* Report Incident Button */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex bg-primary/10 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Report Incident
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 bg-primary/10 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Report Incident
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;