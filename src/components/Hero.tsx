  import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-camera.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional cinema camera in studio"
          className="w-full h-full object-cover"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        {/* Warm accent glow */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-20 md:pb-28">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-primary" />
            <p className="text-primary font-medium tracking-widest uppercase text-xs">
              Creative Media & Branding Studio
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl sm:text-7xl md:text-[6.5rem] font-bold text-foreground leading-[0.9] mb-8 tracking-tight"
          >
            Making Your
            <br />
            <span className="text-gradient">Brand Story</span>
            <br />
            <span className="italic font-light">Unforgettable.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            A world-class 360° media and creative studio, rooted in Nigeria. 
            From livestreaming to branding, studio sessions to stage design—we 
            connect you to verified media professionals & creative spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/book">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-base gap-3 glow-primary rounded-full">
                Start a Project <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="https://www.instagram.com/p/DV8OYP3CKvE/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 text-foreground hover:bg-muted/50 px-10 py-7 text-base gap-3 rounded-full backdrop-blur-sm"
              >
                <Play className="w-5 h-5 fill-primary text-primary" /> Watch Showreel
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right-side floating stat */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="hidden lg:flex absolute bottom-28 right-6 flex-col items-end gap-1"
        >
          <span className="text-5xl font-display font-bold text-foreground">10+</span>
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Years of Excellence</span>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
