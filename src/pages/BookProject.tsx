import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const services = [
  "Livestreaming & Broadcasting",
  "Event Video Coverage",
  "Wedding Shoots",
  "LED Screens & Stage Branding",
  "Drone & Photography",
  "Sound & PA Systems",
  "Church & Corporate Media",
  "Content Creation & Branding",
  "Digital Marketing",
  "Studio Session",
  "Venue / Location",
];

const BookProject = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Booking Submitted!",
      description: "We'll reach out within 24 hours to confirm your booking.",
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
              Booking Received!
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Our team will reach out within 24 hours to confirm your booking and discuss details.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate("/")} variant="outline" className="border-border text-foreground">
                Back to Home
              </Button>
              <a href="https://wa.me/2348083990808">
                <Button className="bg-primary text-primary-foreground gap-2">
                  <Phone className="w-4 h-4" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">Start a Project</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Book Your Media Crew
              </h1>
              <p className="text-muted-foreground text-lg mb-12">
                Tell us about your event, brand shoot, or creative project and we'll match you with the best team.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-foreground">Full Name *</Label>
                  <Input required placeholder="Your name" className="bg-muted border-border text-foreground" />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Phone / WhatsApp *</Label>
                  <Input required placeholder="08083990808" className="bg-muted border-border text-foreground" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-foreground">Email</Label>
                  <Input type="email" placeholder="you@email.com" className="bg-muted border-border text-foreground" />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Event Type</Label>
                  <Select>
                    <SelectTrigger className="bg-muted border-border text-foreground">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="conference">Conference / Seminar</SelectItem>
                      <SelectItem value="church">Church Service</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="concert">Concert / Show</SelectItem>
                      <SelectItem value="brand-shoot">Brand / Studio Shoot</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-foreground">Event Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-muted border-border",
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
                <div className="space-y-2">
                  <Label className="text-foreground">Location / City *</Label>
                  <Input required placeholder="e.g. Lagos, Abuja" className="bg-muted border-border text-foreground" />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-foreground">Services Needed *</Label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm border transition-all",
                        selectedServices.includes(service)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-muted text-muted-foreground border-border hover:border-primary/50"
                      )}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Tell us your story / Additional details</Label>
                <Textarea
                  placeholder="Describe your vision, your brand story, or any specific requirements..."
                  className="bg-muted border-border text-foreground min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base gap-2 glow-primary">
                Submit Booking <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookProject;
