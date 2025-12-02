import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Clock, Users, Target } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

const RaceCategories = () => {
  const categories = [
    {
      icon: Trophy,
      distance: "21 KM",
      name: "Half Marathon",
      age: "16+",
      startTime: "5:30 AM",
      highlight: "Prizes: Cash awards + finisher medals",
      gradient: "hero-gradient",
    },
    {
      icon: Target,
      distance: "10 KM",
      name: "Impact Run",
      age: "16+",
      startTime: "6:30 AM",
      highlight: "Prizes: Cash awards + finisher medals",
      gradient: "tech-gradient",
    },
    {
      icon: Clock,
      distance: "5 KM",
      name: "Speed Run",
      age: "14+",
      startTime: "7:00 AM",
      highlight: "Prizes: Cash awards + finisher medals",
      gradient: "green-gradient",
    },
    {
      icon: Users,
      distance: "2.5 KM",
      name: "Fun Run",
      age: "Open for all",
      startTime: "7:30 AM",
      highlight: "Prizes: Finisher medal",
      gradient: "hero-gradient",
    },
  ];

  return (
    <section id="categories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            Choose Your <span className="text-primary">Challenge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four distances, one mission – Find your pace, push your limits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 border-border hover:border-primary transition-smooth hover:shadow-orange cursor-pointer"
            >
              <div className={`absolute inset-0 ${category.gradient} opacity-0 group-hover:opacity-10 transition-smooth`} />
              
              <div className="p-6 space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl ${category.gradient}`}>
                    <category.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{category.distance}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">Age: {category.age}</p>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-semibold">Start: {category.startTime}</span>
                </div>

                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-medium text-accent">{category.highlight}</p>
                </div>

                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                  Know More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <RegistrationForm>
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
              Register Now
            </Button>
          </RegistrationForm>
        </div>
      </div>
    </section>
  );
};

export default RaceCategories;
