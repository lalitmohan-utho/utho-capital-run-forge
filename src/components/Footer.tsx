import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">The Capital Run</h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              India's purpose-driven marathon where fitness, innovation, and sustainability unite.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-secondary-foreground/60">Email</p>
                  <a href="mailto:info@thecapitalrun.com" className="text-secondary-foreground/90 hover:text-primary transition-smooth">
                    info@thecapitalrun.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-secondary-foreground/60">Event Helpline</p>
                  <a href="tel:+911234567890" className="text-secondary-foreground/90 hover:text-primary transition-smooth">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-foreground">Venue</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-secondary-foreground/90 leading-relaxed">
                  Jawaharlal Nehru Stadium<br />
                  Pragati Vihar, Lodhi Road<br />
                  New Delhi - 110003
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-primary-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary flex items-center justify-center transition-smooth group"
              >
                <Facebook className="w-5 h-5 text-primary-foreground/80 group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary flex items-center justify-center transition-smooth group"
              >
                <Twitter className="w-5 h-5 text-primary-foreground/80 group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary flex items-center justify-center transition-smooth group"
              >
                <Instagram className="w-5 h-5 text-primary-foreground/80 group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary flex items-center justify-center transition-smooth group"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground/80 group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/70 text-sm text-center md:text-left">
              © 2025 The Capital Run. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-secondary-foreground/70">Powered by</span>
              <span className="text-primary font-bold text-lg">UTHO</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
