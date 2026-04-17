import { useState, useEffect, useCallback } from "react";
import {
  Search,
  MapPin,
  Home,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Your Property Is\nOur Priority",
    subtitle:
      "Find your dream home with our expert guidance and extensive property listings across the nation.",
  },
  {
    image: hero2,
    title: "Luxury Living\nRedefined",
    subtitle:
      "Discover premium properties and penthouses in the most sought-after locations worldwide.",
  },
  {
    image: hero3,
    title: "Find Your\nPerfect Home",
    subtitle:
      "Browse thousands of properties tailored to your lifestyle and budget. Your journey starts here.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const navigate = useNavigate();

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % slides.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchLocation) params.set("location", searchLocation);
    if (searchType) params.set("type", searchType);
    if (searchPrice) params.set("price", searchPrice);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative h-[85vh] md:h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Real estate slide ${i + 1}`}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-dark-surface/60" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
          Welcome to Oakberry
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-dark-surface-foreground text-center leading-tight whitespace-pre-line mb-6">
          {slides[current].title}
        </h1>
        <p className="text-dark-surface-foreground/80 text-center max-w-xl mb-10 text-base md:text-lg">
          {slides[current].subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <Button
            size="lg"
            onClick={() => navigate("/properties")}
            className="min-w-[220px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0"
          >
            Explore Properties
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/learn-more")}
            className="min-w-[220px] border-2 border-white/80 bg-white/15 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-foreground hover:shadow-2xl active:translate-y-0"
          >
            Learn More
          </Button>
        </div>

        {/* Search bar */}
        <div className="w-full max-w-4xl bg-background rounded-xl shadow-2xl p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2">
              <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Location"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2">
              <Home className="w-4 h-4 text-muted-foreground shrink-0" />
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="bg-transparent text-sm text-foreground outline-none w-full"
              >
                <option value="">Property Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>
            <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2">
              <DollarSign className="w-4 h-4 text-muted-foreground shrink-0" />
              <select
                value={searchPrice}
                onChange={(e) => setSearchPrice(e.target.value)}
                className="bg-transparent text-sm text-foreground outline-none w-full"
              >
                <option value="">Price Range</option>
                <option value="0-500000">Under $500K</option>
                <option value="500000-1000000">$500K - $1M</option>
                <option value="1000000-5000000">$1M - $5M</option>
                <option value="5000000+">$5M+</option>
              </select>
            </div>
            <Button onClick={handleSearch} className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-dark-surface-foreground hover:bg-background/40 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-dark-surface-foreground hover:bg-background/40 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary w-8" : "bg-dark-surface-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
