import { motion } from "framer-motion";
import hero2 from "@/assets/hero-2.jpg";

const stats = [
  { value: "50", label: "Listings", suffix: "+" },
  { value: "210", label: "Happy Users", suffix: "K" },
  { value: "450", label: "Properties Sold", suffix: "+" },
  { value: "100", label: "Awards Won", suffix: "+" },
];

const StatsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Oakberry A Real Estate Company
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With decades of experience in the real estate market, Oakberry has
            helped thousands of families find their perfect home. Our commitment
            to excellence and customer satisfaction sets us apart from the
            competition. We believe everyone deserves a place to call home.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl font-bold text-primary">
                  {stat.value}
                  <span className="text-lg">{stat.suffix}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img
            src={hero2}
            alt="About Oakberry"
            className="w-full h-80 md:h-96 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
