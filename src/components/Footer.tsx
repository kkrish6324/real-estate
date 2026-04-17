import { Link } from "react-router-dom";
import {
  Home,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { contactInfo } from "@/config/contactInfo";

const Footer = () => (
  <footer className="bg-dark-surface text-dark-surface-foreground">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Home className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold">Oakberry</span>
          </Link>
          <p className="text-dark-surface-foreground/60 text-sm leading-relaxed mb-4">
            Your trusted partner in finding the perfect property. We've been
            helping families find their dream homes since 2005.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-dark-surface-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Social media"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-dark-surface-foreground/60">
            {["Home", "Properties", "About Us", "Contact", "Blog"].map(
              (link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-dark-surface-foreground/60">
            {[
              "Buy Property",
              "Sell Property",
              "Rent Property",
              "Property Valuation",
              "Investment",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Have a Question?</h4>
          <ul className="space-y-3 text-sm text-dark-surface-foreground/60">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              <span>
                {contactInfo.addressLine1}
                <br />
                {contactInfo.addressLine2}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-primary" />
              {contactInfo.phone}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              <span>
                {contactInfo.emails[0]}
                <br />
                {contactInfo.emails[1]}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-dark-surface-foreground/10">
      <div className="container mx-auto px-4 py-4 text-center text-sm text-dark-surface-foreground/40">
        © 2026 Oakberry. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
