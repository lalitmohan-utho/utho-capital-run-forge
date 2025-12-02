import { Award, Activity, FileText } from "lucide-react";

const FinishLine = () => {
  const perks = [
    {
      icon: Award,
      title: "Finisher Medals",
      description: "High-quality custom medals for all eligible finishers.",
      gradient: "hero-gradient",
    },
    {
      icon: Activity,
      title: "Recovery Zone",
      description: "Foam rollers, physiotherapists, and assisted stretching.",
      gradient: "tech-gradient",
    },
    {
      icon: FileText,
      title: "Digital Finisher Certificates",
      description: "Instantly downloadable post-event.",
      gradient: "green-gradient",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            Finish Line <span className="text-primary">Celebration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every finisher is a champion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-primary transition-smooth hover:shadow-orange overflow-hidden"
            >
              <div className={`absolute inset-0 ${perk.gradient} opacity-0 group-hover:opacity-5 transition-smooth`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl ${perk.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-lg`}>
                  <perk.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">{perk.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6 text-center">Event Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Warmup sessions with certified trainers",
                "Celebrity runners & sports icons",
                "Live DJ stage & high-energy music",
                "Photo booths & marathon walls",
                "Drone photography coverage",
                "Post-race refreshments & meals",
              ].map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-foreground font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinishLine;
