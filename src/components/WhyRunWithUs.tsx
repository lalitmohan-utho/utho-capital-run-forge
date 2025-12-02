import { Heart, Zap, Users, Leaf } from "lucide-react";

const WhyRunWithUs = () => {
  const reasons = [
    {
      icon: Heart,
      number: "01",
      title: "Health Boost",
      description: "Promote fitness, wellness, and an active lifestyle.",
      color: "text-primary",
    },
    {
      icon: Zap,
      number: "02",
      title: "Innovation",
      description: "Experience a movement built on open-source tech and cloud innovation.",
      color: "text-primary",
    },
    {
      icon: Users,
      number: "03",
      title: "Be One of Us",
      description: "Join a mission-led runner community running for Bharat's future.",
      color: "text-primary",
    },
    {
      icon: Leaf,
      number: "04",
      title: "Green Impact",
      description: "Support eco-friendly, zero-waste race systems with every step.",
      color: "text-accent",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            Why Run <span className="text-primary">With Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than a race – it's a movement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border-2 border-border hover:border-primary transition-smooth bg-card hover:shadow-orange"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-muted/20 group-hover:text-primary/20 transition-smooth">
                {reason.number}
              </div>

              <div className={`w-16 h-16 rounded-xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                <reason.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3 relative z-10">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRunWithUs;
