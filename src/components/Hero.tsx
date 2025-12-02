import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Download } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import RegistrationForm from "./RegistrationForm";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-01T05:30:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/60 to-primary/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,120,0,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-primary-foreground leading-tight">
              Running Towards
              <span className="block text-primary animate-pulse-slow">Innovation</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 font-light max-w-3xl mx-auto">
              Where fitness meets technology, and passion meets purpose.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/95 text-xl lg:text-2xl">
              <div className="flex items-center gap-2">
                <Calendar className="w-7 h-7 text-primary" />
                <span className="font-bold">1 March 2026</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-primary rounded-full" />
              <div className="flex items-center gap-2">
                <MapPin className="w-7 h-7 text-primary" />
                <span className="font-bold">Jawaharlal Nehru Stadium, New Delhi</span>
              </div>
            </div>
            <div className="flex justify-center">
              <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Super early bird – save up to 50% till 31 December 2025
              </span>
            </div>
          </div>

          <div className="bg-background/10 backdrop-blur-md border border-primary/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-primary-foreground/80 text-sm uppercase tracking-widest mb-4">Event Starts In</p>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-xl p-4 mb-2 border border-primary/40">
                    <span className="text-4xl lg:text-6xl font-bold text-primary-foreground">
                      {value.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-primary-foreground/80 text-sm uppercase tracking-wider font-medium">{unit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <RegistrationForm>
              <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto">
                Register Now
              </Button>
            </RegistrationForm>
            <a href="/The_Capital_Run.pdf" download="The Capital Run.pdf">
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto bg-background/20 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary">
                <Download className="w-5 h-5 mr-2" />
                Event Brochure
              </Button>
            </a>
          </div>

          <p className="text-primary-foreground/70 text-base italic pt-4">
            Be a catalyst for health, tech, and a greener tomorrow.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
