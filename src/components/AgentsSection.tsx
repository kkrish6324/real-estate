import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import agent3 from "@/assets/agent-3.jpg";

const agents = [
  {
    name: "Michael Johnson",
    role: "Senior Agent",
    image: agent1,
    phone: "+1 555-0101",
    email: "michael@oakberry.com",
  },
  {
    name: "Emily Rodriguez",
    role: "Property Advisor",
    image: agent2,
    phone: "+1 555-0102",
    email: "emily@oakberry.com",
  },
  {
    name: "Robert Williams",
    role: "Sales Manager",
    image: agent3,
    phone: "+1 555-0103",
    email: "robert@oakberry.com",
  },
];

const AgentsSection = () => (
  <section className="section-padding bg-dark-surface">
    <div className="container mx-auto">
      <span className="block text-primary text-sm font-medium text-center tracking-widest uppercase mb-2">
        Our Team
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-surface-foreground text-center mb-4">
        Our Agents
      </h2>
      <p className="text-dark-surface-foreground/60 text-center mb-12 max-w-2xl mx-auto">
        Meet the professionals dedicated to helping you find your perfect
        property.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {agents.map((agent, i) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group text-center"
          >
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-center gap-3">
                  <a
                    href={`tel:${agent.phone}`}
                    className="w-9 h-9 rounded-full bg-primary flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 text-primary-foreground" />
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="w-9 h-9 rounded-full bg-primary flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>
            <h3 className="font-display font-semibold text-dark-surface-foreground">
              {agent.name}
            </h3>
            <p className="text-sm text-dark-surface-foreground/60">
              {agent.role}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AgentsSection;
