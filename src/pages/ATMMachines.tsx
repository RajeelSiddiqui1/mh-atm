import { Phone, Mail, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import atm1 from "@/assets/atm-machine-1.jpg";
import atm2 from "@/assets/atm-machine-2.jpg";
import atm3 from "@/assets/atm-machine-3.jpg";
import { Link } from "react-router-dom";

const ATMMachines = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
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
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/atm-machines" className="text-sm font-medium text-primary transition-colors">ATM Machines</Link>
              <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <Button className="bg-primary text-primary-foreground hover:bg-green-dark font-heading font-semibold px-6">Get A Quote!</Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-[105px] pb-20 bg-gradient-to-r from-green-dark to-primary">
        <div className="container">
          <div className="text-center">
            <h1 className="font-heading font-black text-4xl md:text-6xl text-primary-foreground mb-4">ATM Machines</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Choose the perfect ATM solution for your business. We offer flexible options to meet your needs.</p>
          </div>
        </div>
      </section>

      {/* ATM Options Section */}
      <section className="py-20 bg-section-alt">
        <div className="container">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground text-center mb-12">
            Need a ATM Machine?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-white text-2xl font-heading font-bold p-3 text-center">
                Option 1
              </div>
              <div className="text-muted-foreground text-lg p-3 text-center">
                We Supply ATM & Cash Load
              </div>
              <img
                src={atm1}
                alt="ATM Machine 1"
                className="w-full p-2 object-cover"
              />
              <div className="p-6">
                <p className="text-muted-foreground my-3 text-sm">
                  100% Passive No Capital Investment Required Share in ATM
                  Revenues FREE Service,Installation & Training FREE Processing
                  and Detailed Reporting Online Monitoring & Real Time Products
                </p>
                <h3 className="font-heading font-bold text-center py-3 text-lg text-foreground mb-2">
                ATM Ontario provides the vault cash and manages all aspects of the ATM for you. You share in the ATM surcharge revenue and gain all the benefits of offering an ATM.
                </h3>
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-white text-2xl font-heading font-bold p-3 text-center">
                Option 2
              </div>
              <div className="text-muted-foreground text-lg p-3 text-center">
               We Supply ATM & You Cash Load
              </div>
              <img
                src={atm2}
                alt="ATM Machine 2"
                className="w-full p-2 object-cover"
              />
              <div className="p-6">
                <p className="text-muted-foreground my-3 text-sm">
              ATM Ontario support & service for life.
No Purchase Required
FREE Service, Installation & Training
Online Monitoring & Real Time Reports
Cash Level Alerts sent to your phone
Processing and detailed reporting at no charge
                </p>
                <h3 className="font-heading font-bold text-center py-3 text-lg text-foreground mb-2">
                  ATM Ontario owns the ATM, you provide the vault cash and earn great returns.
                </h3>
              </div>
            </div>

            {/* Option 3 */}
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-white text-2xl font-heading font-bold p-3 text-center">
                Option 3
              </div>
              <div className="text-muted-foreground text-lg p-3 text-center">
                Own ATM & Cash Load
              </div>
              <img
                src={atm3}
                alt="ATM Machine 3"
                className="w-full p-2 object-cover"
              />
              <div className="p-6">
                <p className="text-muted-foreground my-3 text-sm">
                  Best Return on Investment! FREE Service, Installation &
                  Training Online Monitoring & Real Time Reports Cash Level
                  Alerts sent to your phone Financing Available
                </p>
                <h3 className="font-heading font-bold text-center py-3 text-lg text-foreground mb-2">
                  You own the ATM and provide the vault cash. Keep 100% of the
                  surcharge!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">Why Choose Our ATM Machines?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Secure Transactions",
              "24/7 Support",
              "Easy Installation",
              "Real-time Monitoring"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-xl p-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="font-heading font-semibold text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-dark to-primary">
        <div className="container text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to get your free quote and find the best ATM solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-foreground text-primary hover:bg-white font-heading font-semibold px-8 py-3">
              Get A Quote
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-heading font-semibold px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border">
        <div className="container py-16">
          <div className="grid md:grid-cols-4 gap-10">
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
              <p className="text-muted-foreground text-sm leading-relaxed">Your trusted ATM provider in Ontario. Over 15 years of experience serving businesses across the province.</p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/atm-machines" className="text-muted-foreground text-sm hover:text-primary transition-colors">ATM Machines</Link></li>
                <li><Link to="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-muted-foreground text-sm hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Maintenance</a></li>
                <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Cash Management</a></li>
                <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Transaction Processing</a></li>
                <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Equipment & Supplies</a></li>
                <li><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">Telecommunications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-foreground mb-4">Contact Info</h4>
              <div className="space-y-3">
                <a href="tel:+19055374333" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"><Phone className="w-4 h-4 text-primary" /> +1 905-537-4333</a>
                <a href="mailto:info@mhatm.ca" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"><Mail className="w-4 h-4 text-primary" /> info@mhatm.ca</a>
                <span className="flex items-center gap-3 text-muted-foreground text-sm"><MapPin className="w-4 h-4 text-primary" /> Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default ATMMachines;
