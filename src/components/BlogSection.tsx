import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    image: blog1,
    title: "Top 10 Interior Design Trends for Modern Homes",
    date: "March 15, 2026",
    category: "Design",
  },
  {
    image: blog2,
    title: "Essential Tips for First-Time Home Buyers in 2026",
    date: "March 10, 2026",
    category: "Buying Guide",
  },
  {
    image: blog3,
    title: "Real Estate Investment: Where to Put Your Money",
    date: "March 5, 2026",
    category: "Investment",
  },
];

const BlogSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <span className="block text-primary text-sm font-medium text-center tracking-widest uppercase mb-2">
        Latest News
      </span>
      <h2 className="section-title">Recent Blog</h2>
      <p className="section-subtitle">
        Stay up to date with our latest articles and real estate insights.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="overflow-hidden aspect-[16/10]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="text-primary font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
              </div>
              <h3 className="font-display font-semibold text-card-foreground group-hover:text-primary transition-colors mb-3">
                {post.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
