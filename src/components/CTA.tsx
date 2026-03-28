import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-camera.jpg";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="studio background"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-background/70 to-black/70" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[160px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
        >
          <div className="glass rounded-3xl p-10 sm:p-12 border border-border/40">
            <p className="text-green-400 font-bold uppercase tracking-widest text-xs mb-3">
              Stay Connected
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Drop a line and join the crew.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              Want a custom media strategy? Shoot us a message and we’ll give your brand a magnetic presence.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@greymaxx.com"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-full border border-primary/40 text-primary bg-primary/10 hover:bg-primary/20 transition"
              >
                <span className="font-medium">info@deelinkconnect.com</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:08083990808"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-full border border-white/15 text-foreground bg-muted hover:bg-muted/80 transition"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">080 8399 0808</span>
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-10 sm:p-12 border border-border/40">
            <h3 className="text-foreground text-xl md:text-2xl font-bold mb-6">Social quick links</h3>
            <ul className="space-y-4">
              {[
                { label: "01 / Facebook", href: "#" },
                { label: "02 / Instagram", href: "#" },
                { label: "03 / X (Twitter)", href: "#" },
                { label: "04 / LinkedIn", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between px-5 py-4 rounded-xl border border-border/40 hover:bg-primary/10 transition"
                  >
                    <span className="text-foreground font-semibold">{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-sm text-muted-foreground">
              Our not-so-secret formula: fast response, creative energy, and a friendly project kickoff.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
