import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = ["Home", "ATM Machines", "About Us", "Services", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-secondary border-b border-border">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+19055374333" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" /><span>+1 905-537-4333</span>
            </a>
            <span className="hidden md:flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />Ontario, Canada
            </span>
          </div>
          <span className="text-primary font-heading font-semibold text-xs tracking-widest uppercase">24 Hour Service</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-heading font-black text-primary-foreground text-lg">MH</span>
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-foreground leading-none block">MH ATM</span>
              <span className="text-xs text-primary font-medium">Human Services</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/atm-machines" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">ATM Machines</Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button className="bg-primary text-primary-foreground hover:bg-green-dark font-heading font-semibold px-6">Get A Quote!</Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-secondary border-t border-border px-6 py-4 space-y-3">
            <div className="flex justify-end mb-2">
              <ThemeToggle />
            </div>
            <Link to="/" className="block text-muted-foreground hover:text-primary py-2" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/atm-machines" className="block text-muted-foreground hover:text-primary py-2" onClick={() => setMobileOpen(false)}>ATM Machines</Link>
            <Link to="/about" className="block text-muted-foreground hover:text-primary py-2" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link to="/services" className="block text-muted-foreground hover:text-primary py-2" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link to="/contact" className="block text-muted-foreground hover:text-primary py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Button className="w-full bg-primary text-primary-foreground font-heading font-semibold mt-2">Get A Quote!</Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
