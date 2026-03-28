import { motion } from "framer-motion";
import studioSpace from "@/assets/studio-space.jpg";

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "500+", label: "Events Covered" },
  { value: "50+", label: "Media Professionals" },
  { value: "100%", label: "Client Satisfaction" },
];

const Stats = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background image */}
          <img
            src={studioSpace}
            alt="Fully equipped studio"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />

          <div className="relative z-10 p-10 md:p-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-primary" />
                  <p className="text-primary font-medium tracking-widest uppercase text-xs">
                    Driven by Results
                  </p>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Built for <span className="italic font-light">Excellence.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Powered by Deelink Media's decade of experience in media production, branding, 
                  and creative storytelling. Our numbers speak for themselves—and our clients speak for us.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="font-display text-5xl md:text-6xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
