import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Phone, CheckCircle2 } from "lucide-react";
import atm1 from "@/assets/atm-machine-1.jpg";
import atm2 from "@/assets/atm-machine-2.jpg";
import hyosungForce from "@/assets/Nautilus-Hyosung-Force.png";
import heroCanadaJpg from "@/assets/hero-slider-canada.jpg";

const machines = [
  {
    image: atm1,
    title: "NAUTILUS HYOSUNG HALO II ATM",
    badge: "Most Popular Retail Choice",
    description:
      "The HALO II provides the best value of any retail cash dispenser in the industry with added peace of mind from enhanced security features at an affordable price.",
  },
  {
    image: atm2,
    title: "NAUTILUS HYOSUNG 2700 CE ATM",
    badge: "High-Capacity Workhorse",
    description:
      "NH-2700CE is designed to provide 2nd to none reliability in the retail market locations with highest uptime and with minimum maintenance needs.",
  },
  {
    image: hyosungForce,
    title: "NAUTILUS HYOSUNG FORCE MX2800SE ATM",
    badge: "Ultra-Modern Flagship",
    description:
      "The Nautilus Hyosung Force ATM is a sleek designed option for any retailer or hotel. It is a free standing ATM with modern high-definition display and enhanced security.",
  },
];

const businessTypes = [
  "Convenience Store",
  "Gas Station",
  "Bar / Tavern / Nightclub",
  "Restaurant",
  "Liquor Store",
  "Hotel / Motel",
  "Fast Food Restaurant",
  "Entertainment Venue",
  "Retail Store",
  "Office Building",
  "Shopping Mall",
  "Event / Festival",
  "Other",
];

const ATMMachines = () => {
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
    <div className="mt-[85px] sm:mt-[95px] min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* ─── Full JPG Hero Banner ─── */}
      <section className="relative py-20 sm:py-28 text-white overflow-hidden min-h-[460px] flex items-center">
        {/* Full JPG Image Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCanadaJpg})` }}
        />
        {/* Dark Slate & Emerald Gradient Overlay for Perfect Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/75 backdrop-blur-[1px]" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-heading font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>🍁 Certified Canadian Commercial ATM Fleet</span>
              </div>
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                OUR ATM MACHINES
              </h1>
              <p className="text-slate-100 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                MH ATM offers certified, high-yield Nautilus Hyosung &amp; Triton ATM machines to businesses, retail stores, and entertainment venues across all of Ontario.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-2">
                <Button
                  asChild
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-heading font-bold px-8 py-6 rounded-xl shadow-xl shadow-emerald-500/30 text-base"
                >
                  <a href="#quote-form">Get Free Quote Now →</a>
                </Button>
                <a
                  href="tel:+18449399378"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm backdrop-blur-md border border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Toll-Free: 1-844-939-9378</span>
                </a>
              </div>
            </div>

            {/* Right: Floating Trust Badges Card with High Contrast */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-6 rounded-3xl border border-slate-700/80 bg-slate-950/85 backdrop-blur-xl shadow-2xl space-y-4 text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-white font-bold text-sm font-heading">Hardware Specifications</span>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold border border-emerald-500/30">
                    OEM BRAND NEW
                  </span>
                </div>
                <div className="space-y-3 text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold text-sm">✓</span>
                    <span className="text-xs text-slate-200 font-medium">10.1" High Definition Color LCD Displays</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold text-sm">✓</span>
                    <span className="text-xs text-slate-200 font-medium">Level 1 UL-291 Reinforced Vault Construction</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold text-sm">✓</span>
                    <span className="text-xs text-slate-200 font-medium">Interac® Tap, EMV Chip &amp; Contactless Ready</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold text-sm">✓</span>
                    <span className="text-xs text-slate-200 font-medium">Free Delivery, Bolting &amp; Rigging Across Ontario</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>🍁 100% Canadian Owned</span>
                  <span className="text-emerald-400 font-bold">24/7 Field Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ATM Cards Grid (Clean & Aesthetic 3-Column UI) ─── */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {machines.map((machine, i) => (
              <div
                key={i}
                className="glass-panel rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Frame */}
                  <div className="h-72 bg-gradient-to-b from-white to-slate-100 flex items-center justify-center p-8 border-b border-slate-200 relative overflow-hidden">
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-heading font-bold text-[11px] border border-emerald-200">
                      {machine.badge}
                    </span>
                    <img
                      src={machine.image}
                      alt={machine.title}
                      className="max-h-full object-contain group-hover:scale-108 transition-transform duration-500 drop-shadow-md"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-8 text-center">
                    <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                      {machine.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {machine.description}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-8 text-center">
                  <Button
                    asChild
                    className="w-full bg-emerald-600 text-white hover:bg-emerald-700 font-heading font-bold px-6 py-3 rounded-xl shadow-md transition-all"
                  >
                    <a href="#quote-form">Read More &amp; Get Quote</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Free Quote Form ─── */}
      <section id="quote-form" className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container max-w-4xl">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl">
            <h3 className="font-heading font-black text-3xl text-slate-900 mb-2 text-center">
              Get Your Free Quote
            </h3>
            <p className="text-slate-500 text-sm text-center mb-8">
              Fill out the form below and our Ontario ATM specialist will contact you within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fade-up">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-heading font-black text-2xl text-slate-900">
                  Thank You, {formData.firstName || "Customer"}!
                </h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Your quote request has been received. We will contact you at <strong>{formData.phone || "your number"}</strong> shortly.
                </p>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  variant="outline"
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-100"
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
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Business / Store Name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main Street"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Toronto, Mississauga, etc."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="province"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Province
                    </label>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      placeholder="Ontario"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select Business Type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.ca"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(905) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="comment"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Comments
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any specific requests or requirements..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
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
                    className="text-xs text-slate-600 leading-normal"
                  >
                    I am also interested in receiving tips, new product information, and offers about my ATM services
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700 font-heading font-extrabold py-4 text-base rounded-xl shadow-lg shadow-emerald-600/20"
                >
                  Submit Request →
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ATMMachines;
