import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold text-foreground">
              Deelink <span className="text-primary">Connect</span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              End-to-end media solutions, creative studio sessions, and branding excellence. 
              Powered by Deelink Media's 10+ years of experience.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Services</Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Blog</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:08083990808" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" /> 08083990808
              </a>
              <a href="mailto:hello@deelinkconnect.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" /> hello@deelinkconnect.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Serving Nigeria & Beyond
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Deelink Connect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
