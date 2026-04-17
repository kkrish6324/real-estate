import { ArrowRight, Building2, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Building2,
    title: "Curated premium listings",
    description:
      "Verified residential and commercial properties with complete details, clear pricing, and rich media.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted process",
    description:
      "Secure account flow, guided inquiry handling, and transparent communication from first click to final decision.",
  },
  {
    icon: Sparkles,
    title: "Smooth experience",
    description:
      "Fast property search, modern interface, and focused tools that help buyers and renters decide quickly.",
  },
];

const LearnMore = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 min-h-screen bg-muted">
        <section className="bg-dark-surface py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-xs md:text-sm mb-4">
              Learn More About Oakberry
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-dark-surface-foreground mb-5">
              Better Way To Discover Real Estate
            </h1>
            <p className="max-w-3xl mx-auto text-dark-surface-foreground/80 text-base md:text-lg">
              Oakberry combines elegant design with practical tools so you can
              explore properties, compare options, and connect with agents in
              one seamless flow.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h2 className="font-display text-xl font-semibold text-card-foreground mb-2">
                  {item.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 text-center shadow-sm">
            <h3 className="font-display text-3xl font-bold text-card-foreground mb-3">
              Ready to explore listings?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start browsing properties and filter by location, type, and
              budget.
            </p>
            <Link to="/properties">
              <Button size="lg" className="group">
                Explore Properties
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LearnMore;
