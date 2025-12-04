import { Mail } from "lucide-react";

const ContactStrip = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/20 via-accent/15 to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-3">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            For registrations and partnerships
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-8 hover:shadow-orange hover:border-primary transition-smooth">
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
                  href="mailto:thecapitalrun@utho.com"
                  className="text-primary font-semibold hover:underline"
                >
                  thecapitalrun@utho.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-8 hover:shadow-lg hover:shadow-accent/20 hover:border-accent transition-smooth">
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
                  href="mailto:sponsership.tcr@utho.com"
                  className="text-accent font-semibold hover:underline"
                >
                  sponsership.tcr@utho.com
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
