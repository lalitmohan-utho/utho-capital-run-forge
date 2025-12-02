import { Mail } from "lucide-react";

const ContactStrip = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 hover:shadow-orange transition-smooth">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Bulk Registrations</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For bulk registrations, write to:
                </p>
                <a
                  href="mailto:Registrations@thecapitalrun.com"
                  className="text-primary font-semibold hover:underline"
                >
                  Registrations@thecapitalrun.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 hover:shadow-lg hover:shadow-accent/20 transition-smooth">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Sponsorship Enquiries</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For sponsorship enquiries, write to:
                </p>
                <a
                  href="mailto:Sponsorship@thecapitalrun.com"
                  className="text-accent font-semibold hover:underline"
                >
                  Sponsorship@thecapitalrun.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
