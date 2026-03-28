import { Video, Camera, Mic, Monitor, Zap, MapPin, Users, Palette, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    icon: Palette,
    title: "Content Creation & Branding",
    items: ["Visual storytelling (Photography & Videography)", "Brand identity design (Logos, Packaging, Guidelines)", "Copywriting & scriptwriting"],
  },
  {
    num: "02",
    icon: Zap,
    title: "Livestreaming & Broadcasting",
    items: ["Professional live streaming for events & conferences", "Multi-camera setups with real-time graphics", "Church & worship service broadcasting"],
  },
  {
    num: "03",
    icon: Video,
    title: "Event Video Coverage",
    items: ["Complete video documentation & highlight reels", "Wedding cinematography & shoots", "Drone & aerial photography"],
  },
  {
    num: "04",
    icon: Monitor,
    title: "LED Screens & Stage Branding",
    items: ["Dynamic visual displays & stage setups", "Custom stage design & fabrication", "Event branding & signage"],
  },
  {
    num: "05",
    icon: Mic,
    title: "Sound & PA Systems",
    items: ["Crystal clear audio for any event size", "Professional sound engineering", "Equipment rental & setup"],
  },
  {
    num: "06",
    icon: Megaphone,
    title: "Digital Marketing & Advertising",
    items: ["Social media management & strategy", "Paid media campaigns (Google, Meta, LinkedIn)", "SEO & website optimization"],
  },
  {
    num: "07",
    icon: Users,
    title: "Church & Corporate Media",
    items: ["Specialized religious event coverage", "Corporate communications & PR", "Hybrid & virtual event production"],
  },
  {
    num: "08",
    icon: MapPin,
    title: "Studio & Venue Access",
    items: ["Creative studio sessions for content", "Premium venues across Nigeria", "Marketing & branding shoot locations"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-primary" />
              <p className="text-primary font-medium tracking-widest uppercase text-xs">What We Offer</p>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground max-w-3xl">
              End-to-end media & <span className="italic font-light">creative solutions.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            "Making Brands Matter" is more than a slogan—here's how we make it happen.
          </p>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group border-t border-border/60 py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-6 items-start hover:bg-muted/20 transition-all duration-500 px-4 -mx-4 rounded-xl"
            >
              <div className="md:col-span-1 text-muted-foreground/40 font-display font-bold text-xs tracking-wider">
                {service.num}/
              </div>
              <div className="md:col-span-1 flex items-center">
                <service.icon className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="md:col-span-4 font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <ul className="md:col-span-6 space-y-1.5">
                {service.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary/60 mt-1 text-xs">—</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
