import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import agent3 from "@/assets/agent-3.jpg";

const testimonials = [
  {
    name: "James Anderson",
    role: "Home Buyer",
    avatar: agent1,
    text: "Oakberry made our home buying journey smooth and stress-free. Their team went above and beyond to find us the perfect property.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Property Investor",
    avatar: agent2,
    text: "Exceptional service and deep market knowledge. I've purchased multiple properties through Oakberry and each experience has been outstanding.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "First-time Buyer",
    avatar: agent3,
    text: "As a first-time buyer, I was nervous about the process. Oakberry guided me every step of the way with patience and professionalism.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-muted">
    <div className="container mx-auto">
      <span className="block text-primary text-sm font-medium text-center tracking-widest uppercase mb-2">
        Testimonials
      </span>
      <h2 className="section-title">Clients We Help</h2>
      <p className="section-subtitle">
        Don't just take our word for it — hear from our satisfied clients.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border relative"
          >
            <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t.text}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-card-foreground text-sm">
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
