import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "ATM Machines", path: "/atm-machines" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Upper Trust Strip */}
     

      <div className="container py-14">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md shadow-emerald-600/30">
                <span className="font-heading font-black text-white text-lg">MH</span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-white text-xl block leading-none">MH ATM</span>
                <span className="text-xs text-emerald-400 font-semibold tracking-wide">Ontario ATM Services</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ontario's premier provider of commercial and retail ATM solutions. Offering turnkey placement, vault cash management, and maximum revenue sharing across Ontario since 2007.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>24/7 Vault Monitoring Active</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Quick Navigation</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-400 text-sm hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <span className="text-emerald-500 text-xs">›</span>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/#quote-form" className="text-slate-400 text-sm hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 text-xs">›</span>
                  Free Quote Request
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 text-sm hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 text-xs">›</span>
                  Request Technician Dispatch
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Ontario Locations */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Ontario Facilities &amp; Contact</h4>
            <div className="space-y-3 mb-4">
              <a href="tel:+18449399378" className="flex items-center gap-3 text-slate-300 text-sm hover:text-emerald-400 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Toll-Free: 1-844-939-9378</span>
              </a>
              <a href="tel:+14374102121" className="flex items-center gap-3 text-slate-300 text-sm hover:text-emerald-400 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Direct / GTA: (437) 410-2121</span>
              </a>
              <a href="mailto:info@mhatm.ca" className="flex items-center gap-3 text-slate-300 text-sm hover:text-emerald-400 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@mhatm.ca</span>
              </a>
              
              {/* Scarborough Facility */}
              <a
                href="https://maps.google.com/?q=3001+Markham+Road+Unit+20+Scarborough+ON"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-300 text-xs hover:text-emerald-400 transition-colors pt-1"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Scarborough:</strong> 3001 Markham Road, Unit #20
                </span>
              </a>

              {/* Mississauga Facility */}
              <a
                href="https://maps.google.com/?q=7015+Tranmere+Drive+Unit+2+Mississauga+ON"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-300 text-xs hover:text-emerald-400 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Mississauga:</strong> 7015 Tranmere Drive, Unit #2
                </span>
              </a>

              {/* Timmins Facility */}
              <a
                href="https://maps.google.com/?q=380+Pine+Street+South+Timmins+ON"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-300 text-xs hover:text-emerald-400 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Timmins:</strong> 380 Pine Street South
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-5">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} MH ATM Human Services. All rights reserved. Registered ATM ISO in Ontario, Canada.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <span className="text-slate-400">🍁 Canadian Owned & Operated</span>
            <span className="text-emerald-400">Interac® Member</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

