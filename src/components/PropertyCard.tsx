import { useState } from "react";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@/data/properties";
import LoginPopup from "@/components/LoginPopup";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleOpenProperty = () => {
    const isLoggedIn = Boolean(localStorage.getItem("token"));
    if (!isLoggedIn) {
      setShowLoginPopup(true);
      return;
    }

    navigate(`/property/${property.id}`);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpenProperty}
        className="group block w-full text-left rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300"
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <Badge className="absolute top-3 left-3 capitalize">
            {property.type}
          </Badge>
          <div className="absolute bottom-3 right-3 bg-primary text-primary-foreground font-bold text-sm px-3 py-1 rounded-md">
            ${property.price.toLocaleString()}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-display font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors mb-1">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
            <MapPin className="w-3.5 h-3.5" />
            {property.location}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-3">
            {property.bedrooms && (
              <span className="flex items-center gap-1">
                <Bed className="w-4 h-4" /> {property.bedrooms}
              </span>
            )}
            {property.bathrooms && (
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" /> {property.bathrooms}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Maximize className="w-4 h-4" /> {property.area} sqft
            </span>
          </div>
        </div>
      </button>
      <LoginPopup
        open={showLoginPopup}
        onOpenChange={setShowLoginPopup}
        onSuccess={() => navigate(`/property/${property.id}`)}
        title="Login to view property details"
        description="You can browse listings, but details open after login."
      />
    </>
  );
};

export default PropertyCard;
