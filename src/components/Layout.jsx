import { Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Enhanced Header with glass effect */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-white/20 shadow-lg shadow-sky-100/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl md:text-3xl font-bold text-dark-blue">
              <span className="relative">
                MHE
                <span className="text-sky-blue">nterprise</span>
                <span className="absolute -top-1 -right-2 w-2 h-2 bg-sky-blue rounded-full animate-pulse"></span>
              </span>
            </div>
            
            <nav className="hidden md:flex gap-8 items-center">
              {['Home', 'Services', 'Pricing', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-gray-700 hover:text-sky-blue font-medium transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-blue group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button className="clay-button text-sm py-2 px-4">
                Get Started
              </button>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-700 hover:text-sky-blue">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      
      <main>{children}</main>
      
      {/* Enhanced Footer */}
      <footer className="bg-white/50 backdrop-blur-xl py-12 px-4 md:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-dark-blue mb-4">
                MHE<span className="text-sky-blue">nterprise</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Your trusted partner for modern, secure, and easy-to-manage ATM services across Canada. 
                We help businesses grow with reliable ATM solutions.
              </p>
              <div className="flex gap-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-sky-blue hover:shadow-lg transition-all"
                  >
                    <span className="text-xs font-medium">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-dark-blue mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Services', 'Pricing', 'FAQ', 'Support'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-sky-blue transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-dark-blue mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-sky-blue/10 flex items-center justify-center text-sky-blue text-sm">📍</span>
                  Canada
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-sky-blue/10 flex items-center justify-center text-sky-blue text-sm">📞</span>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-sky-blue/10 flex items-center justify-center text-sky-blue text-sm">✉️</span>
                  info@mhenterprise.ca
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 MHEnterprise. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-sky-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sky-blue transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-sky-blue transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
