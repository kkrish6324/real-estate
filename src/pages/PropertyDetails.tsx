import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  ArrowLeft,
  Check,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sampleProperties } from "@/data/properties";
import { useState } from "react";
import { toast } from "sonner";
import LoginPopup from "@/components/LoginPopup";
import { getApiBase } from "@/lib/apiUrl";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = sampleProperties.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [showLoginPopup, setShowLoginPopup] = useState(true);
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInquiryAction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!property) return;

    setLoading(true);
    try {
      const response = await fetch(
        `${getApiBase()}/inquiries/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            propertyId: property.id,
            propertyTitle: property.title,
          }),
        },
      );

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Failed to submit inquiry");

      toast.success("Message sent! The agent will contact you shortly.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-20 text-center min-h-screen">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            Property Not Found
          </h1>
          <Link to="/properties">
            <Button>Back to Listings</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  if (!isLoggedIn) {
    return (
      <>
        <Navbar />
        <main className="pt-20 md:pt-24 min-h-screen bg-muted">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="font-display text-2xl font-bold text-foreground mb-3">
              Login required
            </h1>
            <p className="text-muted-foreground mb-6">
              Please sign in to view full property details.
            </p>
            <Link to="/properties">
              <Button>Back to Listings</Button>
            </Link>
          </div>
        </main>
        <LoginPopup
          open={showLoginPopup}
          onOpenChange={setShowLoginPopup}
          title="Login to open property page"
          description="This page unlocks after successful sign in."
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 min-h-screen bg-muted">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/properties"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Listings
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Images & Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={property.images[activeImage]}
                  alt={property.title}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
              {property.images.length > 1 && (
                <div className="flex gap-3">
                  {property.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`rounded-lg overflow-hidden border-2 transition-colors ${
                        i === activeImage
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-20 h-16 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Details */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="mb-2 capitalize">{property.type}</Badge>
                    <h1 className="font-display text-2xl md:text-3xl font-bold text-card-foreground">
                      {property.title}
                    </h1>
                    <div className="flex items-center gap-1 text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" /> {property.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl font-bold text-primary">
                      ${property.price.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 py-4 border-y border-border my-4">
                  {property.bedrooms && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Bed className="w-5 h-5" />
                      <div>
                        <div className="font-semibold text-card-foreground">
                          {property.bedrooms}
                        </div>
                        <div className="text-xs">Bedrooms</div>
                      </div>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Bath className="w-5 h-5" />
                      <div>
                        <div className="font-semibold text-card-foreground">
                          {property.bathrooms}
                        </div>
                        <div className="text-xs">Bathrooms</div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Maximize className="w-5 h-5" />
                    <div>
                      <div className="font-semibold text-card-foreground">
                        {property.area}
                      </div>
                      <div className="text-xs">Sq Ft</div>
                    </div>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">
                  Description
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {property.description}
                </p>

                <h3 className="font-display font-semibold text-lg text-card-foreground mb-3">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary" /> {amenity}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Contact */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-28">
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-4">
                  Interested in this property?
                </h3>
                <form className="space-y-3" onSubmit={handleInquiryAction}>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your Name"
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-transparent text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Your Email"
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-transparent text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Phone Number"
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-transparent text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Your Message"
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-transparent text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                  <Button className="w-full" size="lg" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
                <div className="mt-4 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Call Agent
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PropertyDetails;
