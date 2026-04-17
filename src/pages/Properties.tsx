import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { sampleProperties } from "@/data/properties";

const Properties = () => {
  const [searchParams] = useSearchParams();
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [priceRange, setPriceRange] = useState(searchParams.get("price") || "");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return sampleProperties.filter((p) => {
      if (
        location &&
        !p.location.toLowerCase().includes(location.toLowerCase())
      )
        return false;
      if (type && p.type !== type) return false;
      if (priceRange) {
        const [min, max] = priceRange.split("-").map(Number);
        if (max && (p.price < min || p.price > max)) return false;
        if (!max && priceRange.includes("+") && p.price < min) return false;
      }
      return true;
    });
  }, [location, type, priceRange]);

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 min-h-screen bg-muted">
        {/* Header */}
        <div className="bg-dark-surface py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-dark-surface-foreground mb-2">
              Property Listings
            </h1>
            <p className="text-dark-surface-foreground/60">
              Browse all available properties
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Filters */}
          <div className="bg-card rounded-xl border border-border p-4 mb-8">
            <div className="flex items-center justify-between mb-4 md:hidden">
              <span className="font-semibold text-foreground">Filters</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-4 gap-3 ${showFilters ? "block" : "hidden md:grid"}`}
            >
              <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search location..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
                />
              </div>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border border-border rounded-lg px-3 py-2 text-sm text-foreground bg-transparent outline-none"
              >
                <option value="">All Types</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
                <option value="industrial">Industrial</option>
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="border border-border rounded-lg px-3 py-2 text-sm text-foreground bg-transparent outline-none"
              >
                <option value="">Any Price</option>
                <option value="0-500000">Under $500K</option>
                <option value="500000-1000000">$500K - $1M</option>
                <option value="1000000-5000000">$1M - $5M</option>
                <option value="5000000+">$5M+</option>
              </select>
              <Button
                onClick={() => {
                  setLocation("");
                  setType("");
                  setPriceRange("");
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Results */}
          <p className="text-sm text-muted-foreground mb-4">
            {filtered.length} properties found
          </p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                No properties found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Properties;
