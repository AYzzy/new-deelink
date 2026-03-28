import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Users, Zap, Globe, Target, Heart } from "lucide-react";
import studioSpace from "@/assets/studio-space.jpg";

const values = [
  { icon: Target, title: "Precision", desc: "Every frame, every angle, every detail — we obsess over quality so you don't have to." },
  { icon: Heart, title: "Passion", desc: "We genuinely love what we do. That energy shows up in every project we deliver." },
  { icon: Zap, title: "Innovation", desc: "Cutting-edge gear, fresh creative approaches, and a hunger to push boundaries." },
  { icon: Globe, title: "Reach", desc: "Based in Nigeria, serving clients across West Africa and beyond." },
];

const stats = [
  { num: "500+", label: "Events Covered" },
  { num: "10+", label: "Years Experience" },
  { num: "200+", label: "Happy Clients" },
  { num: "50+", label: "Crew Members" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary" />
              <p className="text-primary font-medium tracking-widest uppercase text-xs">About Us</p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              We don't just capture moments — we <span className="text-gradient italic font-light">craft legacies.</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              Deelink Connect is a full-service creative media company built to serve brands, 
              churches, events, and visionaries across Nigeria. With over a decade of experience, 
              we bring unmatched energy, precision, and artistry to every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image + Story */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src={studioSpace} alt="Deelink Studio" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 max-w-[200px]">
                <p className="font-display text-4xl font-bold text-primary">10+</p>
                <p className="text-muted-foreground text-sm">Years of creative excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    What started as a passion for videography has grown into one of Nigeria's 
                    most trusted creative media companies. From our humble beginnings with a single 
                    camera, we've built a network of 50+ talented professionals across the country.
                  </p>
                  <p>
                    We've covered everything from intimate studio sessions and brand shoots to 
                    massive conferences, weddings, and worship experiences — always with the same 
                    commitment to excellence that defined us from day one.
                  </p>
                  <p>
                    Today, Deelink Connect is more than a media company. We're a creative partner 
                    that helps brands tell their stories, churches amplify their message, and events 
                    become unforgettable experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-foreground font-semibold">Making Brands Matter</p>
                  <p className="text-muted-foreground text-sm">Our tagline. Our mission. Our promise.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">{stat.num}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Our core values shape every project, every interaction, and every decision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="relative z-10">
              <Users className="w-10 h-10 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to work with us?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Whether you're planning an event, building a brand, or need a creative partner — we're here for you.
              </p>
              <a href="/contact">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors glow-primary">
                  Get in Touch
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
