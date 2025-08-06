import { Button } from '@/components/ui/button';
import { Shield, Search, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      number: "1",
      icon: <Shield className="w-8 h-8" />,
      title: "Incident Response (IR)",
      description: "On-demand IR Commander for active breaches. Board-level briefings, forensic leadership, regulatory guidance, threat validation, and executive crisis communication.",
      color: "primary"
    },
    {
      number: "2", 
      icon: <Search className="w-8 h-8" />,
      title: "Insider Threat Investigations",
      description: "Comprehensive insider threat investigations, behavioral analysis, digital forensics, and remediation for trusted insider or 3rd party contractor incidents.",
      color: "accent"
    },
    {
      number: "3",
      icon: <Users className="w-8 h-8" />,
      title: "Table Top Exercises (TTX)",
      description: "We deliver custom incident response (IR) readiness scenarios designed to reflect the real threats your organization may face. Our approach includes detailed gap analysis",
      color: "primary"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Strategic Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions tailored to your organization's needs
            </p>
          </div>

          <div className="grid gap-8 md:gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-card/50 border border-border/50 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-cyber"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Service Number & Icon */}
                  <div className="flex items-center space-x-4 md:flex-col md:space-x-0 md:space-y-4 md:items-center">
                    <div className={`
                      flex items-center justify-center w-16 h-16 rounded-full border-2 text-2xl font-bold
                      ${service.color === 'primary' 
                        ? 'border-primary text-primary bg-primary/10' 
                        : 'border-accent text-accent bg-accent/10'
                      }
                    `}>
                      {service.number}
                    </div>
                    <div className={`
                      p-3 rounded-lg
                      ${service.color === 'primary' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent/10 text-accent'
                      }
                    `}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      More Info
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;