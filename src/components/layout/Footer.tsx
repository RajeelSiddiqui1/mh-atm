import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = ["Home", "ATM Machines", "About Us", "Services", "Contact"];
const footerServices = ["Maintenance", "Cash Management", "Transaction Processing", "Equipment & Supplies", "Telecommunications"];

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-heading font-black text-primary-foreground text-lg">MH</span>
              </div>
              <div>
                <span className="font-heading font-bold text-foreground block leading-none">MH ATM</span>
                <span className="text-xs text-primary">Human Services</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted ATM provider in Ontario. Over 15 years of experience serving businesses across the province.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item}>
                  {item === "Home" && <Link to="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">{item}</Link>}
                  {item === "ATM Machines" && <Link to="/atm-machines" className="text-muted-foreground text-sm hover:text-primary transition-colors">{item}</Link>}
                  {item === "About Us" && <Link to="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">{item}</Link>}
                  {item !== "Home" && item !== "About Us" && item !== "ATM Machines" && (
                    <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">{item}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {footerServices.map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+19055374333" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +1 905-537-4333
              </a>
              <a href="mailto:info@mhatm.ca" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> info@mhatm.ca
              </a>
              <span className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" /> Ontario, Canada
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">© 2024 MH ATM Human Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-xs hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground text-xs hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
