import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Phone,
  Sparkles,
  Coins,
  ArrowRight,
  Award,
} from "lucide-react";
import slider1 from "@/assets/slider-1.png";
import slider2 from "@/assets/slider-2.png";
import slider3 from "@/assets/slider-3.png";
import sliderCanada from "@/assets/hero-slider-canada.jpg";
import atmImage from "@/assets/atm-machines-rental-ontario.png";
import atmSmall from "@/assets/atm.png";
import hyosungForce from "@/assets/Nautilus-Hyosung-Force.png";
import atmMachine1 from "@/assets/atm-machine-1.jpg";

/* ─── Slides Data ─── */
const slides = [
  {
    image: sliderCanada,
    badge: "🍁 #1 ATM OPERATOR IN ONTARIO, CANADA",
    title: "Next-Gen ATM Solutions for Ontario Businesses",
    description:
      "Maximize store foot traffic and generate 100% passive surcharge revenue with zero upfront cost, free installation, and 24/7 Canadian vault management.",
    cta: "Request Free Placement",
    bonus: "$1,000 Signing Bonus Available",
  },
  {
    image: slider2,
    badge: "⚡ EMV CHIP & CONTACTLESS TAP ENABLED",
    title: "Empowered with the Best Financial Technology",
    description:
      "Reliable Nautilus Hyosung & Genmega cash dispensers featuring 99.9% uptime, tamper-proof vaults, and real-time mobile portal monitoring.",
    cta: "Explore Our ATM Fleet",
    bonus: "Zero Maintenance Invoices",
  },
  {
    image: slider3,
    badge: "🇨🇦 OVER 10,000+ ATMS DEPLOYED",
    title: "Making Cash Accessible Across All Ontario",
    description:
      "Serving convenience stores, gas stations, restaurants, bars, and festivals across the GTA, Ottawa, Hamilton, and Southwestern Ontario.",
    cta: "See Service Areas",
    bonus: "24/7 Emergency Local Dispatch",
  },
  {
    image: slider1,
    badge: "💰 100% PASSIVE INCOME STREAM",
    title: "Eliminate Your Credit & Debit Terminal Fees",
    description:
      "Encourage cash purchases in your venue, reduce card interchange costs, and earn monthly direct-deposit profit sharing without lifting a finger.",
    cta: "Calculate Revenue",
    bonus: "Turnkey Cash Loading Included",
  },
];

const businessTypes = [
  "Convenience Store",
  "Gas Station",
  "Bar / Tavern / Nightclub",
  "Restaurant / Food Court",
  "Liquor Store / Beer Store",
  "Hotel / Motel / Hospitality",
  "Fast Food / Drive-thru",
  "Entertainment & Gaming Venue",
  "Retail Store / Mall",
  "Event / Festival / Pop-up",
  "Cannabis Dispensary",
  "Other Commercial Venue",
];



/* ─── Page Component ─── */
const Index = () => {
  const [current, setCurrent] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    province: "Ontario",
    postalCode: "",
    businessType: "",
    email: "",
    phone: "",
    comment: "",
    interestedInTips: true,
  });

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* ─── Hero Slider ─── */}
      <section className="relative h-[88vh] min-h-[640px] max-h-[820px] overflow-hidden mt-[85px] sm:mt-[95px] bg-slate-950">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
            />

            {/* Gradient Overlays for High Contrast & Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

            {/* Slide Content */}
            <div className="relative z-10 container h-full flex items-center">
              <div className="max-w-3xl py-12">
                {i === current && (
                  <>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-heading font-bold uppercase tracking-wider mb-5 animate-fade-up shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{slide.badge}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] animate-fade-up-delay-1 drop-shadow-md">
                      {slide.title}
                    </h1>

                    {/* Subtitle / Description */}
                    <p className="text-lg sm:text-xl text-slate-200 mt-5 mb-8 animate-fade-up-delay-2 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Action Row & Floating Perks */}
                    <div className="flex flex-wrap items-center gap-4 animate-fade-up-delay-2">
                      <Button
                        asChild
                        className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-heading font-black text-base sm:text-lg px-8 py-6 rounded-xl shadow-lg shadow-emerald-500/30 transition-all hover:scale-105"
                      >
                        <a href="#quote-form" className="flex items-center gap-2">
                          <span>{slide.cta}</span>
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      </Button>
                      <a
                        href="tel:+18449399378"
                        className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm backdrop-blur-md border border-white/20 transition-all"
                      >
                        <Phone className="w-4 h-4 text-emerald-400" />
                        <span>1-844-939-9378</span>
                      </a>
                    </div>

                    {/* Bonus Tag */}
                    <div className="mt-6 flex items-center gap-2 text-emerald-300 text-xs font-semibold animate-fade-up-delay-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span>Special Program: {slide.bonus}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-emerald-500 text-white hover:text-slate-950 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-emerald-500 text-white hover:text-slate-950 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 bg-slate-900/60 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current ? "bg-emerald-400 w-8" : "bg-white/40 w-2.5 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ─── Highlights Stats Strip ─── */}
      

      {/* ─── 24 Hour Service / Get Free Quote Section with Canadian Flag mixture ─── */}
      <section id="quote-form" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-heading font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>24 Hour Emergency & Placement Support</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-4 tracking-tight">
              Get a Free ATM Machine for Your Ontario Business
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              MH ATM provides complete turnkey ATM solutions to businesses, companies, and special events across all of Ontario. Choose your ideal program and get started in under 48 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Canadian Flag + ATM Machine Visual Showcase */}
            <div className="lg:col-span-6 space-y-6">
              <div className="glass-panel-canada rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-red-200/80 shadow-xl">
                {/* Canadian Flag Header Accent */}
                <div className="flex items-center justify-between pb-4 border-b border-red-200/60 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇨🇦</span>
                    <div>
                      <h4 className="font-heading font-black text-slate-900 text-base">
                        Ontario ATM Network Operations
                      </h4>
                      <p className="text-xs text-red-600 font-bold uppercase tracking-wider">
                        Official Service Provider
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-[11px] font-bold border border-red-200">
                    Active in GTA & Beyond
                  </span>
                </div>

                {/* ATM Image Container with clean presentation */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-white/90 to-slate-50/90 p-4 border border-slate-200 shadow-inner group">
                  <img
                    src={atmImage}
                    alt="ATM Machines Rental Ontario with Canadian Flag"
                    className="w-full h-auto object-contain rounded-lg group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 glass-panel rounded-lg p-3 flex items-center justify-between border border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-bold text-slate-800">
                        24/7 Rapid Cash Vault Dispatch
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      Zero Fees
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="mt-6 grid sm:grid-cols-2 gap-3.5">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Free Delivery, Rigging & Installation</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Vault Cash Fully Provided & Insured</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Direct Monthly Surcharge Revenue</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Up to $1,000 Upfront Signing Bonus</span>
                  </div>
                </div>
              </div>

              {/* Direct Assistance Box */}
              <div className="glass-panel-emerald rounded-2xl p-5 flex items-center justify-between border border-emerald-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-800 font-bold uppercase tracking-wider">
                      Need Urgent ATM Placement?
                    </p>
                    <p className="text-slate-900 font-heading font-black text-lg">
                      1-844-939-9378
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+18449399378"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Right: Glassmorphism Quote Form */}
            <div className="lg:col-span-6">
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl relative">
                <div className="mb-6">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                    Free Consultation & Placement
                  </span>
                  <h3 className="font-heading font-black text-2xl text-slate-900">
                    Request Your Free ATM Machine
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    No obligations. Our Ontario team will contact you within 24 hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fade-up">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-heading font-black text-2xl text-slate-900">
                      Thank You, {formData.firstName || "Customer"}!
                    </h4>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Your ATM placement request has been received. Our Ontario account specialist will call you at <strong>{formData.phone || "your number"}</strong> to confirm details.
                    </p>
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      variant="outline"
                      className="border-emerald-600 text-emerald-700 hover:bg-emerald-100 mt-2"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-xs"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Smith"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Business / Venue Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Ontario Mart"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-xs"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="businessType"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Business Type *
                        </label>
                        <select
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          required
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-xs"
                        >
                          <option value="">Select Type</option>
                          {businessTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.ca"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-xs"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(905) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          City in Ontario *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          placeholder="Toronto, Mississauga, etc."
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-xs"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="postalCode"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          Postal Code
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          placeholder="M5V 2T6"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="comment"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Additional Notes / Foot Traffic Details
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Estimated daily customers, special events, or placement preferences..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-xs resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="interestedInTips"
                        name="interestedInTips"
                        checked={formData.interestedInTips}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label
                        htmlFor="interestedInTips"
                        className="text-xs text-slate-500 leading-normal"
                      >
                        I want to receive the $1,000 signing bonus promotion and Ontario merchant ATM revenue updates.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-extrabold py-4 text-base rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:shadow-emerald-600/30"
                    >
                      Submit Quote Request →
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Need a ATM Machine? 3 Programs Grid with 3 Distinct Machine Visuals ─── */}
      <section id="business-options" className="py-24 bg-slate-100/80 border-y border-slate-200/80 relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-heading font-bold uppercase tracking-wider mb-3">
              <Coins className="w-3.5 h-3.5 text-emerald-700" />
              <span>Choose Your Revenue Model</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-4 tracking-tight">
              Need an ATM Machine? 3 Flexible Options
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Whether you want 100% passive cash management or maximize your ROI by loading your own cash, MH ATM provides customized programs for every business in Ontario.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* ─── OPTION 1: Complete Turnkey Solution ─── */}
            <div className="glass-panel rounded-2xl border-2 border-emerald-500/80 shadow-xl p-8 flex flex-col justify-between relative glass-card-interactive">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white font-heading font-black text-xs uppercase tracking-wider shadow-md">
                ⭐ Most Popular Option
              </div>

              <div>
                <div className="text-center mb-6 pt-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                    Option 01
                  </span>
                  <h3 className="font-heading font-black text-2xl text-slate-900 mt-1">
                    Turnkey Free Placement
                  </h3>
                  <p className="text-xs font-bold text-slate-500 mt-1">
                    We Supply ATM & Provide All Vault Cash
                  </p>
                </div>

                {/* Machine Image 1 */}
                <div className="h-56 bg-slate-50 rounded-xl p-4 flex items-center justify-center border border-slate-200 mb-6 shadow-inner">
                  <img
                    src={atmSmall}
                    alt="Turnkey ATM Machine Option"
                    className="max-h-full object-contain drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>100% Passive:</strong> Zero capital investment or cash required</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Full Cash Vaulting:</strong> We stock and insure all money</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Free Installation:</strong> Hardware, setup, & supplies included</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Revenue Share:</strong> Monthly surcharge direct deposit</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 mb-5 text-center font-medium">
                  Ideal for high-traffic bars, restaurants, clubs, & retail venues.
                </div>
                <Button
                  asChild
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold py-3.5 rounded-xl shadow-md"
                >
                  <a href="#quote-form">Select Option 1 →</a>
                </Button>
              </div>
            </div>

            {/* ─── OPTION 2: Merchant Cash Load ─── */}
            <div className="glass-panel rounded-2xl border border-slate-200 shadow-lg p-8 flex flex-col justify-between glass-card-interactive">
              <div>
                <div className="text-center mb-6">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Option 02
                  </span>
                  <h3 className="font-heading font-black text-2xl text-slate-900 mt-1">
                    Merchant Cash Load
                  </h3>
                  <p className="text-xs font-bold text-slate-500 mt-1">
                    We Supply ATM & You Load Daily Cash
                  </p>
                </div>

                {/* Machine Image 2: Hyosung Force */}
                <div className="h-56 bg-slate-50 rounded-xl p-4 flex items-center justify-center border border-slate-200 mb-6 shadow-inner">
                  <img
                    src={hyosungForce}
                    alt="Nautilus Hyosung Force Cash Machine"
                    className="max-h-full object-contain drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Free Machine Hardware:</strong> No equipment purchase required</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Use Daily Register Cash:</strong> Eliminate bank deposit trips</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>High Surcharge Payout:</strong> Earn up to 85% surcharge share</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Mobile Alerts:</strong> Real-time low cash SMS warnings</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-5 text-center font-medium">
                  Ideal for convenience stores, gas stations, & cash-heavy businesses.
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-slate-300 text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 font-heading font-bold py-3.5 rounded-xl"
                >
                  <a href="#quote-form">Select Option 2 →</a>
                </Button>
              </div>
            </div>

            {/* ─── OPTION 3: ATM Purchase & Complete Ownership ─── */}
            <div className="glass-panel rounded-2xl border border-slate-200 shadow-lg p-8 flex flex-col justify-between glass-card-interactive">
              <div>
                <div className="text-center mb-6">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Option 03
                  </span>
                  <h3 className="font-heading font-black text-2xl text-slate-900 mt-1">
                    Own ATM & Keep 100%
                  </h3>
                  <p className="text-xs font-bold text-slate-500 mt-1">
                    Purchase Machine & Retain All Surcharge
                  </p>
                </div>

                {/* Machine Image 3: Halo II */}
                <div className="h-56 bg-slate-50 rounded-xl p-4 flex items-center justify-center border border-slate-200 mb-6 shadow-inner">
                  <img
                    src={atmMachine1}
                    alt="Nautilus Hyosung Halo II Ownership"
                    className="max-h-full object-contain drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>100% Surcharge Ownership:</strong> Keep all fees collected</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Free Processing For Life:</strong> Zero transaction fees deducted</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Financing Available:</strong> Low monthly lease-to-own terms</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Full Warranty & Support:</strong> Dedicated Ontario technicians</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-5 text-center font-medium">
                  Ideal for established businesses looking for maximum lifetime returns.
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-slate-300 text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 font-heading font-bold py-3.5 rounded-xl"
                >
                  <a href="#quote-form">Select Option 3 →</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
