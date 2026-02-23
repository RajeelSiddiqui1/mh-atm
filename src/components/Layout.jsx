import { Menu } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Flat Header */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Image */}
            <div>
              <img 
                src="/logo-2.png" 
                alt="MHEnterprise" 
                className="h-25 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex gap-8 items-center">
              <a href="#" className="text-gray-700 hover:text-sky-blue font-medium transition-colors">
                Home
              </a>
              
              {/* Services Dropdown - Replace the old Services link */}
              <ServicesDropdown />
              
              <a href="#" className="text-gray-700 hover:text-sky-blue font-medium transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-sky-blue font-medium transition-colors">
                Contact
              </a>
              
              <button className="flat-button">
                Get Started
              </button>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      
      <main>{children}</main>
      
      {/* Flat Footer */}
      <footer className="bg-white border-t-2 border-gray-200 py-12 px-4 md:px-8">
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
                {['FB', 'TW', 'LI', 'IG'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-sky-100 hover:text-sky-blue transition-colors"
                  >
                    <span className="text-xs font-medium">{social}</span>
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
                <li>📍 Canada</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>✉️ info@mhenterprise.ca</li>
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