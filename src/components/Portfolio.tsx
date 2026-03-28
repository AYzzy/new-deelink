import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolioBranding from "@/assets/portfolio-branding.jpg";
import portfolioEvent from "@/assets/portfolio-event.jpg";
import portfolioStudio from "@/assets/portfolio-studio.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import studioSpace from "@/assets/studio-space.jpg";

const projects = [
  {
    image: portfolioBranding,
    title: "Brand Identity Design",
    category: "Branding",
    size: "large",
  },
  {
    image: portfolioEvent,
    title: "Live Event Production",
    category: "Events & LED",
    size: "small",
  },
  {
    image: portfolioStudio,
    title: "Content Studio Session",
    category: "Studio",
    size: "small",
  },
  {
    image: portfolioCorporate,
    title: "Corporate Video Production",
    category: "Video",
    size: "large",
  },
  {
    image: studioSpace,
    title: "Studio & Sound Design",
    category: "Sound & PA",
    size: "full",
  },
];

const Portfolio = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-primary" />
              <p className="text-primary font-medium tracking-widest uppercase text-xs">
                Our Work
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              Featured <span className="italic font-light">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Every project is a story waiting to be told. Here's a glimpse into how we 
            bring brands, events, and creative visions to life.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                project.size === "large" ? "md:row-span-2 aspect-[3/4]" :
                project.size === "full" ? "md:col-span-2 aspect-[21/9]" :
                "aspect-[4/3]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary text-xs tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.category}
                </p>
                <div className="flex items-end justify-between">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
                    <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
