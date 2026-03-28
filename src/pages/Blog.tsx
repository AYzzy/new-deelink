import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import portfolioEvent from "@/assets/portfolio-event.jpg";
import portfolioBranding from "@/assets/portfolio-branding.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import portfolioStudio from "@/assets/portfolio-studio.jpg";

const posts = [
  {
    slug: "how-to-plan-event-media-coverage",
    title: "How to Plan Your Event Media Coverage Like a Pro",
    excerpt: "From selecting the right crew to choosing gear — a complete guide to making your next event unforgettable on camera.",
    image: portfolioEvent,
    category: "Events",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "why-branding-matters-for-nigerian-businesses",
    title: "Why Branding Matters More Than Ever for Nigerian Businesses",
    excerpt: "In a crowded market, your brand identity is what sets you apart. Here's how to build one that sticks.",
    image: portfolioBranding,
    category: "Branding",
    date: "Mar 5, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "livestreaming-church-services-guide",
    title: "The Complete Guide to Livestreaming Church Services",
    excerpt: "Multi-camera setups, audio tips, and streaming platforms — everything your church needs to reach a global audience.",
    image: portfolioCorporate,
    category: "Livestreaming",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "studio-session-tips-content-creators",
    title: "Studio Session Tips Every Content Creator Should Know",
    excerpt: "Lighting, angles, wardrobe, and mood — maximize your next studio session with these professional insights.",
    image: portfolioStudio,
    category: "Studio",
    date: "Feb 20, 2026",
    readTime: "3 min read",
    featured: false,
  },
];

const Blog = () => {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

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
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary" />
              <p className="text-primary font-medium tracking-widest uppercase text-xs">Blog</p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
              Insights & <span className="text-gradient italic font-light">Stories.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Tips, behind-the-scenes looks, and industry insights from the Deelink Connect team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 font-medium">
                      {featured.category}
                    </span>
                    <span className="text-muted-foreground text-xs">Featured</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-muted-foreground text-xs">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
