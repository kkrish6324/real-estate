import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Award, Home, Trophy } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Redefining Luxury Real Estate
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Oakberry was founded on a simple principle: to deliver exceptional
              service and unparalleled expertise in the luxury real estate
              market. We believe that finding your dream home should be an
              inspiring and seamless journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern Architecture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Since our inception, we have curated a pristine portfolio of the
                world's most magnificent properties. Our team of dedicated
                agents combines deep neighborhood knowledge with cutting-edge
                market analytics to serve you better.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are looking for a sprawling country estate, a chic
                downtown penthouse, or a waterfront sanctuary, Oakberry is your
                trusted partner in turning your real estate dreams into reality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Home, stat: "$2B+", label: "Property Sold" },
              { icon: Users, stat: "10k+", label: "Happy Clients" },
              { icon: Award, stat: "15+", label: "Years Experience" },
              { icon: Trophy, stat: "50+", label: "Industry Awards" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border shadow-sm"
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                  {item.stat}
                </h3>
                <p className="text-muted-foreground text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
