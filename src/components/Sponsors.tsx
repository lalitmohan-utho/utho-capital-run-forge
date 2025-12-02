import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Sponsors = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            Fuel the Run. <span className="text-primary">Power the Nation.</span>
          </h2>
          <p className="text-xl text-muted-foreground">Partner with Purpose</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-12 text-center mb-8">
            <div className="mb-8">
              <div className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded-lg text-sm uppercase tracking-wider font-bold mb-4">
                Lead Technology Partner
              </div>
              <div className="text-6xl font-bold text-primary mb-2">UTHO</div>
              <p className="text-muted-foreground">Cloud Innovation Platform</p>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-lg text-foreground/80 italic max-w-2xl mx-auto leading-relaxed">
                "Utho proudly presents The Capital Run 2025 — India's purpose-driven marathon where fitness,
                innovation, and sustainability unite. This December, let's run for health, run for technology,
                and run for Bharat."
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/Sponsorship_Deck.pdf" download="Sponsorship Deck.pdf">
              <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-auto">
                <Download className="w-5 h-5 mr-2" />
                Download Sponsorship Deck
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">Join us in building India's most innovative marathon</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto opacity-50">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-video bg-muted/50 rounded-lg border border-border flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Partner {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
