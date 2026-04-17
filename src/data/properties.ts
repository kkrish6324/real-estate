import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: "land" | "residential" | "commercial" | "industrial";
  images: string[];
  amenities: string[];
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  createdAt: string;
}

export const sampleProperties: Property[] = [
  {
    id: "1",
    title: "Modern Villa with Pool",
    description:
      "A stunning modern villa featuring open-plan living, infinity pool, and panoramic garden views. Perfect for luxury family living.",
    price: 850000,
    location: "Beverly Hills, CA",
    type: "residential",
    images: [property1, property3],
    amenities: ["Swimming Pool", "Garden", "Garage", "Smart Home", "Security"],
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    createdAt: "2026-03-01",
  },
  {
    id: "2",
    title: "Downtown Luxury Apartment",
    description:
      "Elegant city apartment with floor-to-ceiling windows offering breathtaking skyline views. Modern finishes throughout.",
    price: 425000,
    location: "Manhattan, NY",
    type: "residential",
    images: [property2, property5],
    amenities: ["Gym", "Concierge", "Rooftop Terrace", "Parking"],
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    createdAt: "2026-02-15",
  },
  {
    id: "3",
    title: "Beachfront Paradise Villa",
    description:
      "Tropical beachfront property with private pool and direct ocean access. An exclusive island retreat.",
    price: 1200000,
    location: "Malibu, CA",
    type: "residential",
    images: [property3, property1],
    amenities: ["Beach Access", "Pool", "Garden", "BBQ Area", "Guest House"],
    bedrooms: 6,
    bathrooms: 5,
    area: 5500,
    createdAt: "2026-02-20",
  },
  {
    id: "4",
    title: "Premium Office Tower",
    description:
      "Grade A commercial office space in the heart of the financial district. High-speed connectivity and modern amenities.",
    price: 2500000,
    location: "Chicago, IL",
    type: "commercial",
    images: [property4, property6],
    amenities: ["Conference Rooms", "Parking", "24/7 Security", "Cafeteria"],
    area: 12000,
    createdAt: "2026-01-10",
  },
  {
    id: "5",
    title: "Gourmet Kitchen Penthouse",
    description:
      "Exquisite penthouse featuring a chef's kitchen with premium appliances, marble countertops, and stunning city views.",
    price: 675000,
    location: "San Francisco, CA",
    type: "residential",
    images: [property5, property2],
    amenities: ["Chef Kitchen", "Wine Cellar", "Terrace", "Gym"],
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    createdAt: "2026-03-05",
  },
  {
    id: "6",
    title: "Skyline Terrace Suite",
    description:
      "Luxury suite with expansive terrace overlooking the city skyline. Perfect blend of indoor and outdoor living.",
    price: 950000,
    location: "Miami, FL",
    type: "residential",
    images: [property6, property5],
    amenities: ["Terrace", "Pool", "Spa", "Valet Parking", "Lounge"],
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    createdAt: "2026-03-10",
  },
  {
    id: "7",
    title: "Prime Development Land",
    description:
      "10 acres of prime development land located securely near the rapidly expanding metropolitan zone. Fully zoned and approved for immediate construction.",
    price: 3200000,
    location: "Austin, TX",
    type: "land",
    images: [property1, property4],
    amenities: ["Zoned for Residential", "Utilities Present", "Highway Access"],
    area: 435600,
    createdAt: "2026-03-12",
  },
  {
    id: "8",
    title: "Mohali Industrial Warehouse",
    description:
      "Heavy-duty industrial warehouse facility strategically located near the highway. Features loading docks, tall ceilings, and heavy power capabilities.",
    price: 1850000,
    location: "Phase 8, SAS Nagar, Mohali",
    type: "industrial",
    images: [property6, property3],
    amenities: [
      "Loading Docks",
      "Heavy Power",
      "Tall Ceilings",
      "Security Fencing",
    ],
    area: 25000,
    createdAt: "2026-03-22",
  },
  {
    id: "9",
    title: "Riverfront Residential Plot",
    description:
      "A serene, unobstructed riverfront land parcel perfect for building a dream estate. Located securely in a highly sought-after private area.",
    price: 550000,
    location: "Seattle, WA",
    type: "land",
    images: [property3, property2],
    amenities: ["River Access", "Private Road"],
    area: 85000,
    createdAt: "2026-04-01",
  },
  {
    id: "10",
    title: "Boutique Retail Space",
    description:
      "Charming retail space on a high-traffic corner with massive window frontage. Ideal for a cafe, boutique clothing, or local business.",
    price: 780000,
    location: "Brooklyn, NY",
    type: "commercial",
    images: [property2, property4],
    amenities: ["Glass Frontage", "High Ceilings", "Basement Storage"],
    area: 2300,
    createdAt: "2026-04-05",
  },
  {
    id: "11",
    title: "Advanced Logistics Center",
    description:
      "Modern logistics processing center built for efficient freight distribution. Complete with automated racking features.",
    price: 4500000,
    location: "Denver, CO",
    type: "industrial",
    images: [property4, property1],
    amenities: ["Automated Racking", "Security Gate", "Truck Scale"],
    area: 60000,
    createdAt: "2026-04-10",
  },
  {
    id: "12",
    title: "Valley View Farmland",
    description:
      "Sprawling scenic agricultural land offering breathtaking valley views. Perfectly suited for farming operations or sub-dividing.",
    price: 1100000,
    location: "Napa Valley, CA",
    type: "land",
    images: [property5, property6],
    amenities: ["Irrigation Rights", "Fenced", "Barn access"],
    area: 1500000,
    createdAt: "2026-04-15",
  },
];
