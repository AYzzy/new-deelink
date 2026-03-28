import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How do we begin working with you?",
    a: "Just reach out via our booking form or WhatsApp. We'll schedule a discovery session to understand your goals and recommend the perfect team.",
  },
  {
    q: "Can I book your studio for content creation?",
    a: "Absolutely! Our creative studio is fully equipped for photography, videography, brand shoots, and marketing sessions. Book a slot through our form.",
  },
  {
    q: "What's your typical turnaround time?",
    a: "Timelines vary by project. We're transparent from day one and always deliver on time. Most event edits are ready within 5-7 business days.",
  },
  {
    q: "Do you serve locations outside Lagos?",
    a: "Yes! We have verified crew members across Nigeria and can deploy teams to any state. We also handle events abroad.",
  },
  {
    q: "Can you handle branding and marketing campaigns?",
    a: "Definitely. We offer end-to-end branding—from identity design to social media strategy, paid ads, and content creation.",
  },
  {
    q: "How does payment work?",
    a: "You pay Deelink Connect directly. We handle all crew payments, logistics, and coordination so you can focus on your event.",
  },
];

const FAQ = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="font-display text-foreground hover:text-primary text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
