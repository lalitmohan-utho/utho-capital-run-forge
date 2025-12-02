import { Shield, Droplets, MapPin, Users, Briefcase, Monitor, Radio, Heart } from "lucide-react";

const RaceExperience = () => {
  const features = [
    { icon: Shield, text: "RFID-enabled bibs for perfect timing" },
    { icon: Heart, text: "Medical and emergency support units" },
    { icon: Droplets, text: "Hydration zones every 2 KM" },
    { icon: MapPin, text: "Refreshment booths along the route" },
    { icon: Briefcase, text: "Baggage van & secure bag counters" },
    { icon: Monitor, text: "Live results via SMS + digital screens" },
    { icon: Radio, text: "Route marshals & safety volunteers" },
    { icon: Users, text: "Cheer zones for motivation" },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,120,0,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground">
            Race Day <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            World-class facilities and support every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-primary hover:bg-primary/10 transition-smooth backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg hero-gradient flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-primary-foreground font-medium leading-relaxed pt-2">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaceExperience;
