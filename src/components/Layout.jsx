import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== TOP BAR ===== */}
      <div className="bg-gradient-dark text-white/80 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} />
              <span>+1 (555) 123-4567</span>
            </a>
            <a href="mailto:info@mhenterprise.ca" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} />
              <span>info@mhenterprise.ca</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="badge-light text-xs">🇨🇦 Serving All of Canada</span>
            <div className="flex items-center gap-3">
              {['Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="hover:text-sky-blue transition-colors text-xs"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass shadow-lg shadow-black/[0.03] py-2' 
            : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src="/logo-2.png" 
                alt="MHEnterprise" 
                className={`w-auto transition-all duration-300 ${scrolled ? 'h-14' : 'h-18'}`}
              />
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="relative px-4 py-2 text-gray-600 hover:text-dark-blue font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-electric to-sky-blue rounded-full transition-all duration-300 group-hover:w-6"></span>
                </a>
              ))}
              
              {/* Services Dropdown */}
              <ServicesDropdown />
              
              <div className="ml-4 flex items-center gap-3">
                <a href="#contact" className="text-gray-600 hover:text-electric font-medium transition-colors px-3 py-2">
                  Login
                </a>
                <button className="btn-primary flex items-center gap-2 text-sm">
                  Get Started
                  <ExternalLink size={16} />
                </button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden animate-slideDown">
            <div className="px-4 sm:px-6 py-6 bg-white border-t border-gray-100 shadow-xl">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    className="block px-4 py-3 text-gray-700 hover:text-electric hover:bg-electric/5 font-medium rounded-xl transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#" 
                  className="block px-4 py-3 text-gray-700 hover:text-electric hover:bg-electric/5 font-medium rounded-xl transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
              </nav>
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  Get Started <ExternalLink size={16} />
                </button>
                <button className="btn-secondary w-full">
                  Login
                </button>
              </div>
              {/* Mobile contact info */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-500 text-sm">
                  <Phone size={16} className="text-electric" />
                  +1 (555) 123-4567
                </a>
                <a href="mailto:info@mhenterprise.ca" className="flex items-center gap-3 text-gray-500 text-sm">
                  <Mail size={16} className="text-electric" />
                  info@mhenterprise.ca
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* ===== MAIN CONTENT ===== */}
      <main>{children}</main>
      
      {/* ===== PREMIUM FOOTER ===== */}
      <footer className="bg-gradient-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-electric/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl"></div>
        
        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            {/* Company Info - Takes more space */}
            <div className="lg:col-span-5">
              <div className="mb-6">
                <img 
                  src="/logo-2.png" 
                  alt="MHEnterprise" 
                  className="h-16 w-auto brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md text-[0.95rem]">
                Your trusted partner for modern, secure, and easy-to-manage ATM services across Canada. 
                We help businesses grow with reliable ATM solutions and dedicated support.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { name: 'FB', label: 'Facebook' },
                  { name: 'TW', label: 'Twitter' },
                  { name: 'LI', label: 'LinkedIn' },
                  { name: 'IG', label: 'Instagram' }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-electric/20 hover:text-electric hover:border-electric/30 transition-all duration-300"
                    title={social.label}
                  >
                    <span className="text-xs font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3.5">
                {['About Us', 'Our Services', 'Pricing', 'Careers', 'Blog'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-[0.9rem] flex items-center gap-2 group">
                      <span className="w-0 h-px bg-electric transition-all duration-300 group-hover:w-3"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-3.5">
                {['Free Placement', 'ATM Rentals', 'ATM Purchase', 'Maintenance', 'Support'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-[0.9rem] flex items-center gap-2 group">
                      <span className="w-0 h-px bg-sky-blue transition-all duration-300 group-hover:w-3"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-start gap-3 group">
                    <div className="icon-box icon-box-sm rounded-lg bg-white/5 border border-white/10 group-hover:bg-electric/20 group-hover:border-electric/30 transition-all flex-shrink-0 mt-0.5">
                      <MapPin size={16} className="text-gray-400 group-hover:text-electric transition-colors" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-[0.9rem]">
                      Serving all provinces across Canada
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:+15551234567" className="flex items-center gap-3 group">
                    <div className="icon-box icon-box-sm rounded-lg bg-white/5 border border-white/10 group-hover:bg-electric/20 group-hover:border-electric/30 transition-all flex-shrink-0">
                      <Phone size={16} className="text-gray-400 group-hover:text-electric transition-colors" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-[0.9rem]">
                      +1 (555) 123-4567
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@mhenterprise.ca" className="flex items-center gap-3 group">
                    <div className="icon-box icon-box-sm rounded-lg bg-white/5 border border-white/10 group-hover:bg-electric/20 group-hover:border-electric/30 transition-all flex-shrink-0">
                      <Mail size={16} className="text-gray-400 group-hover:text-electric transition-colors" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-[0.9rem]">
                      info@mhenterprise.ca
                    </span>
                  </a>
                </li>
              </ul>

              {/* Newsletter */}
              <div className="mt-8">
                <p className="text-gray-400 text-sm mb-3">Subscribe to our newsletter</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-electric/50 transition-colors"
                  />
                  <button className="btn-primary py-2.5 px-4 text-sm">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 MHEnterprise. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== SCROLL TO TOP ===== */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl btn-primary flex items-center justify-center animate-fadeIn shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Layout;
