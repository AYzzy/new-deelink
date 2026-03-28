import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Video, Camera, Mic, Monitor, Zap, MapPin, Users, Palette, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    icon: Palette,
    title: "Content Creation & Branding",
    desc: "From visual storytelling to full brand identity design — logos, packaging, guidelines, copywriting, and scriptwriting. We build brands that resonate.",
    items: ["Photography & Videography", "Brand Identity Design", "Copywriting & Scriptwriting"],
  },
  {
    num: "02",
    icon: Zap,
    title: "Livestreaming & Broadcasting",
    desc: "Professional multi-camera live streaming for events, conferences, and worship services with real-time graphics and worldwide reach.",
    items: ["Multi-Camera Setups", "Real-Time Graphics", "Worship Broadcasting"],
  },
  {
    num: "03",
    icon: Video,
    title: "Event Video Coverage",
    desc: "Complete video documentation, highlight reels, wedding cinematography, and drone aerial photography for any occasion.",
    items: ["Highlight Reels", "Wedding Cinematography", "Drone Footage"],
  },
  {
    num: "04",
    icon: Monitor,
    title: "LED Screens & Stage Branding",
    desc: "Dynamic LED visual displays, custom stage design and fabrication, plus full event branding and signage solutions.",
    items: ["LED Displays", "Stage Design", "Event Signage"],
  },
  {
    num: "05",
    icon: Mic,
    title: "Sound & PA Systems",
    desc: "Crystal clear audio for any event size — professional sound engineering, equipment rental, and complete setup.",
    items: ["Sound Engineering", "Equipment Rental", "Full PA Setup"],
  },
  {
    num: "06",
    icon: Megaphone,
    title: "Digital Marketing & Advertising",
    desc: "Social media management, paid media campaigns across Google, Meta and LinkedIn, SEO, and website optimization.",
    items: ["Social Media Strategy", "Paid Ad Campaigns", "SEO & Web"],
  },
  {
    num: "07",
    icon: Users,
    title: "Church & Corporate Media",
    desc: "Specialized coverage for religious events, corporate communications, PR, and hybrid virtual event production.",
    items: ["Church Coverage", "Corporate PR", "Virtual Events"],
  },
  {
    num: "08",
    icon: MapPin,
    title: "Studio & Venue Access",
    desc: "Creative studio sessions for content creation, premium venues across Nigeria, and location scouting for shoots.",
    items: ["Studio Sessions", "Venue Access", "Location Scouting"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary" />
              <p className="text-primary font-medium tracking-widest uppercase text-xs">Our Services</p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Everything you need to <span className="text-gradient italic font-light">stand out.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              End-to-end media solutions, creative studio sessions, branding excellence, 
              and event coverage. All under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-2xl p-8 md:p-10 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-muted-foreground/30 font-display font-bold text-sm tracking-wider">{service.num}/</span>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {service.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-muted-foreground mb-6">Need something custom? We've got you covered.</p>
            <Link to="/contact">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors glow-primary inline-flex items-center gap-2">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
