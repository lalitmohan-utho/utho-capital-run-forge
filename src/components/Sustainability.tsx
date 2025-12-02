import { Droplet, Trash2, Package, Footprints } from "lucide-react";

const Sustainability = () => {
  const pledges = [
    {
      icon: Droplet,
      title: "BYOB (Bring Your Own Bottle)",
      description: "Eliminate single-use plastics — refill stations available every 2 KM.",
    },
    {
      icon: Trash2,
      title: "Smart Waste Disposal",
      description: "Color-coded bins across the venue for effective waste segregation.",
    },
    {
      icon: Package,
      title: "Eco-Friendly Race Kits",
      description: "Designed with sustainable packaging and minimal plastic.",
    },
    {
      icon: Footprints,
      title: "Leave Only Footprints",
      description: "Commit to a greener, healthier planet through responsible running.",
    },
  ];

  return (
    <section id="sustainability" className="py-20 bg-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(74,222,128,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Run <span className="text-accent">Clean</span>, Run <span className="text-accent">Green</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every stride towards sustainability counts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pledges.map((pledge, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border-2 border-accent/20 hover:border-accent transition-smooth hover:shadow-lg hover:shadow-accent/20 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full green-gradient flex items-center justify-center group-hover:scale-110 transition-smooth shadow-lg">
                <pledge.icon className="w-10 h-10 text-accent-foreground" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{pledge.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pledge.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-accent/10 border-2 border-accent/30 rounded-2xl p-8 max-w-3xl">
            <p className="text-2xl font-bold text-accent mb-4">Our Green Commitment</p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The Capital Run is proud to be a zero-waste event. Together, we're not just running for fitness
              – we're running for a sustainable future for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
