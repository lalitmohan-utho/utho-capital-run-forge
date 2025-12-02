import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const TeamRegistration = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,120,0,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full hero-gradient shadow-orange animate-float">
            <Users className="w-12 h-12 text-primary-foreground" />
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
              Run <span className="text-primary">Together</span>. Build <span className="text-accent">Together</span>.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bring your team, company, or community. Experience the power of collective achievement and make
              a lasting impact together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            {[
              { title: "Team Discounts", description: "Special rates for groups of 10+" },
              { title: "Custom Bibs", description: "Branded race numbers for your team" },
              { title: "Corporate Packages", description: "Complete event solutions" },
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border-2 border-border hover:border-primary transition-smooth">
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
            Register Your Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamRegistration;
