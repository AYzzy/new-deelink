import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ArrowRight, CheckCircle, Phone, Mail, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Message Received!
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Our team will reach out within 24 hours. We can't wait to bring your vision to life.
            </p>
            <Button onClick={() => navigate("/")} variant="outline" className="border-border text-foreground">
              Back to Home
            </Button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <Send className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-xs font-medium tracking-widest uppercase">Get in Touch</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
              Let's Create <span className="text-gradient italic font-light">Together.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Have an event coming up? Need a creative team? Drop us a message and let's make it unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto">

            {/* Contact Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Contact Information</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Reach out through any channel below, or fill out the form and we'll get back to you.
                </p>
              </div>

              <div className="space-y-6">
                <a href="tel:08083990808" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Phone / WhatsApp</p>
                    <p className="text-muted-foreground text-sm">08083990808</p>
                  </div>
                </a>

                <a href="mailto:hello@deelinkconnect.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">hello@deelinkconnect.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Location</p>
                    <p className="text-muted-foreground text-sm">Lagos, Nigeria & Beyond</p>
                  </div>
                </div>
              </div>

              {/* Decorative card */}
              <div className="glass rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <p className="text-foreground font-display font-semibold mb-2 relative z-10">Quick Response</p>
                <p className="text-muted-foreground text-sm relative z-10">
                  We typically respond within 2–4 hours during business days. For urgent requests, call or WhatsApp us directly.
                </p>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-10 space-y-7">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-foreground text-sm">Full Name *</Label>
                    <Input
                      required
                      placeholder="Your name"
                      className="bg-muted/50 border-border text-foreground h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground text-sm">Email Address *</Label>
                    <Input
                      required
                      type="email"
                      placeholder="you@email.com"
                      className="bg-muted/50 border-border text-foreground h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-foreground text-sm">Phone Number *</Label>
                    <Input
                      required
                      placeholder="08083990808"
                      className="bg-muted/50 border-border text-foreground h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground text-sm">Event Type *</Label>
                    <Select required>
                      <SelectTrigger className="bg-muted/50 border-border text-foreground h-12 rounded-xl">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="conference">Conference / Seminar</SelectItem>
                        <SelectItem value="church">Church Service</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="concert">Concert / Show</SelectItem>
                        <SelectItem value="brand-shoot">Brand / Studio Shoot</SelectItem>
                        <SelectItem value="birthday">Birthday / Private Party</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-foreground text-sm">Event Location *</Label>
                    <Input
                      required
                      placeholder="e.g. Lagos, Abuja, Port Harcourt"
                      className="bg-muted/50 border-border text-foreground h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground text-sm">Event Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-muted/50 border-border h-12 rounded-xl",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-base gap-2 rounded-xl glow-primary font-medium"
                >
                  Send Message <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
