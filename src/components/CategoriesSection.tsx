import { Landmark, Home, Building2, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { sampleProperties } from "@/data/properties";

const getCount = (type: string) =>
  sampleProperties.filter((p) => p.type === type).length;

const categories = [
  { icon: Landmark, label: "Land", count: getCount("land"), type: "land" },
  {
    icon: Home,
    label: "Residential",
    count: getCount("residential"),
    type: "residential",
  },
  {
    icon: Building2,
    label: "Commercial",
    count: getCount("commercial"),
    type: "commercial",
  },
  {
    icon: Factory,
    label: "Industrial",
    count: getCount("industrial"),
    type: "industrial",
  },
];

const CategoriesSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <span className="block text-primary text-sm font-medium text-center tracking-widest uppercase mb-2">
        Our Categories
      </span>
      <h2 className="section-title">Explore Our Categories & Places</h2>
      <p className="section-subtitle">
        Discover the perfect property type that fits your needs and investment
        goals.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.type}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={`/properties?type=${cat.type}`}
              className="flex flex-col items-center p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <cat.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="font-display font-semibold text-card-foreground">
                {cat.label}
              </span>
              <span className="text-sm text-muted-foreground">
                {cat.count} Listings
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
