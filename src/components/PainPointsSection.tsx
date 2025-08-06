import { Shield, AlertTriangle, FileCheck, Users } from 'lucide-react';

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      text: "Need to identify security gaps exposed by a security incident"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Want to test and improve IR Capabilities"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      text: "Board mandate for security program evaluation"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Upcoming audit or compliance examination"
    }
  ];

  const outcomes = [
    "Comprehensive gap analysis completed",
    "IR capabilities tested and improved", 
    "Security roadmap developed",
    "Team training and preparedness enhanced",
    "Cyber Insurance requirements for a tabletop exercise are met (due care)"
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Pain Points */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-destructive/20 border border-destructive/30 rounded-lg">
              <h2 className="text-lg md:text-xl font-bold text-destructive">Pain Points</h2>
            </div>
            
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-card/50 rounded-lg border border-border/50 hover:border-destructive/30 transition-colors"
                >
                  <div className="flex-shrink-0 p-2 bg-destructive/10 rounded-lg text-destructive">
                    {point.icon}
                  </div>
                  <p className="text-foreground leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-lg">
              <h2 className="text-lg md:text-xl font-bold text-accent">Outcomes</h2>
            </div>
            
            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-card/50 rounded-lg border border-border/50 hover:border-accent/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-1 bg-accent/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <p className="text-foreground leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;