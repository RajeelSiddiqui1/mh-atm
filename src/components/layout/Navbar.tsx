import { useState } from "react";
import {
  Phone,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "ATM Machines", path: "/atm-machines" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Info Ribbon */}
        <div className="bg-slate-900 text-slate-100 text-xs py-2 border-b border-slate-800">
          <div className="container flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <a
                href="tel:+18449399378"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Toll-Free: 1-844-939-9378</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a
                href="tel:+14374102121"
                className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct: (437) 410-2121</span>
              </a>
              <span className="hidden lg:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-[11px] font-semibold">
                🍁 100% Canadian Owned &amp; Operated
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold uppercase tracking-wider text-[11px]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                24/7 Vault Active
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
          <div className="container flex items-center justify-between py-3.5">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                <span className="font-heading font-black text-white text-xl tracking-tighter">
                  MH
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-xl text-slate-900 leading-none">
                    MH ATM
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                    ONTARIO
                  </span>
                </div>
                <span className="text-[11px] text-emerald-700 font-semibold tracking-wide">
                  Financial Machine Services
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-semibold transition-all relative py-1 ${
                      active
                        ? "text-emerald-700 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-emerald-600 after:rounded-full"
                        : "text-slate-600 hover:text-emerald-700 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-500 after:transition-all hover:after:w-full"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+18449399378"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all border border-slate-200"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Toll-Free</span>
              </a>
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold px-6 py-2.5 rounded-lg shadow-md shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-700/30 transition-all"
              >
                <Link to="/#quote-form" className="flex items-center gap-2">
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {mobileOpen && (
            <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200 px-6 py-5 space-y-4 shadow-xl animate-fade-up">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2.5 px-3 rounded-lg font-semibold text-sm transition-colors ${
                      isActive(link.path)
                        ? "bg-emerald-50 text-emerald-700 font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-emerald-700"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
                <a
                  href="tel:+18449399378"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-slate-200 font-semibold text-slate-800 hover:bg-slate-50 text-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Toll-Free: 1-844-939-9378</span>
                </a>
                <a
                  href="tel:+14374102121"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-slate-100 font-semibold text-slate-700 hover:bg-slate-200 text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct: (437) 410-2121</span>
                </a>
                <Button
                  asChild
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold py-3 text-sm rounded-lg shadow-md shadow-emerald-700/20"
                >
                  <Link to="/#quote-form" onClick={() => setMobileOpen(false)}>
                    Get Free Quote Now
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Navbar;