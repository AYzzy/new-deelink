import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-camera.jpg";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="w-12 h-px bg-primary" />
            <p className="text-primary font-medium tracking-widest uppercase text-xs">Let's Create</p>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to tell your <br /><span className="text-gradient italic">brand story?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            Whether it's a live event, a studio session, or a full branding campaign—we've got the crew, 
            the gear, and the vision to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-base gap-3 glow-primary rounded-full">
                Start a Project <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:08083990808">
              <Button size="lg" variant="outline" className="border-border/50 text-foreground hover:bg-muted/50 px-12 py-7 text-base gap-3 rounded-full">
                <Phone className="w-5 h-5" /> 08083990808
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
