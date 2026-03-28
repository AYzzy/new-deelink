import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Tell us your vision",
    description: "Share your event needs, brand story, or creative project details with us.",
  },
  {
    num: "02",
    title: "We assemble the team",
    description: "Get matched with verified, skilled professionals near your location.",
  },
  {
    num: "03",
    title: "Excellence in action",
    description: "Your project is executed with cinematic quality and creative precision.",
  },
  {
    num: "04",
    title: "Seamless delivery",
    description: "You pay us, we handle the pros. Final deliverables polished and on time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-12 h-px bg-primary" />
            <p className="text-primary font-medium tracking-widest uppercase text-xs">How It Works</p>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Simple. Seamless. <span className="italic font-light">Stellar.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-8 h-full hover:border-primary/30 transition-colors duration-500">
                <div className="text-6xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors mb-4">
                  {step.num}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
