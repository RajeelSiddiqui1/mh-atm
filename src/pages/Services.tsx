import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  Coins,
  Cpu,
  Network,
  Wrench,
  Layers,
  X,
  Clock,
  Award,
  Zap,
  Lock,
  Check,
  Send,
  Building2,
} from "lucide-react";
import serviceCashMgmt from "@/assets/service-cash-management.svg";
import serviceTransProc from "@/assets/service-transaction-processing.svg";
import serviceEquip from "@/assets/service-equipment-supplies.svg";
import serviceTelecom from "@/assets/service-telecommunications.svg";
import serviceMaint from "@/assets/service-maintenance.svg";
import heroServices from "@/assets/hero-services.svg";

/* ─── Services Data matching client screenshots ─── */
const servicesList = [
  {
    id: "cash-management",
    title: "CASH MANAGEMENT",
    tagline: "Cash Management That Makes Sense",
    image: serviceCashMgmt,
    badge: "100% Turnkey Vault Cash",
    summary:
      "Are you considering investing in an MH ATM, but concerned about cash management? Although ATM money management can represent the most costly aspect of your monthly expenses, MH ATM offers support and guidance that set you up for success! By utilizing MH ATM to manage and load cash in your ATM, it reduces the amount of time that you have to dedicate to the ATM and allows you to focus on other priorities/business.",
    details: {
      overview:
        "Cash vaulting and management with MH ATM removes the risk, hassle, and time commitment of loading your own funds into the machine. We supply 100% of the working capital, fully insured under Canadian banking transit policies.",
      benefits: [
        "Zero merchant capital required — we fund the vault completely",
        "100% insured against loss, theft, and tampering by tier-1 Canadian carriers",
        "Armored courier scheduling & intelligent algorithm-based cash refills",
        "Real-time mobile phone balance alerts and automated revenue reporting",
        "Monthly direct-deposit surcharge royalties sent to your bank account",
      ],
      suitableFor:
        "High-traffic bars, restaurants, entertainment venues, nightclubs, shopping plazas, and retail merchants who prefer 100% hands-off passive revenue.",
    },
  },
  {
    id: "transaction-processing",
    title: "TRANSACTION PROCESSING",
    tagline: "Reliable, Secure Transaction Processing",
    image: serviceTransProc,
    badge: "Interac® & PCI-PTS Certified",
    summary:
      "Efficient transaction processing means greater profitability for your ATM. At MH ATM, our transaction processing systems are managed by TNS, with their own state-of-the-art switch. Delivering integrated solutions for self-service banking and payment processing, the switch is supported by a secure, stable platform that is trusted by customers worldwide.",
    details: {
      overview:
        "Our high-speed transaction gateway links your ATM directly to Interac, Visa, Mastercard, Cirrus, Plus, and all major Canadian and international debit networks. With sub-second authorization times, your customers enjoy frictionless cash dispensing.",
      benefits: [
        "Direct connection to all Canadian financial institutions and credit unions",
        "Next-business-day Electronic Funds Transfer (EFT) surcharge payouts",
        "Level 1 PCI-PTS physical and digital data encryption compliance",
        "Detailed online portal with downloadable tax statements and daily audit logs",
        "No hidden gateway surcharges, batch fees, or statement administration costs",
      ],
      suitableFor:
        "All business owners looking for maximum transaction uptime, transparent payout accounting, and zero processing deductions.",
    },
  },
  {
    id: "equipment-and-supplies",
    title: "EQUIPMENT AND SUPPLIES",
    tagline: "ATM Equipment - Find The Best ATM At MH ATM",
    image: serviceEquip,
    badge: "OEM Parts & Bulk Supplies",
    summary:
      "Our formula for growth and success is simple: Responsiveness + innovation = satisfied ATM customers. At MH ATM, we respond to our clients' needs by continuously investing in leading ATM equipment, software and hardware. Our strong alliances with Nautilus Hyosung, Triton Systems, NCR and Wincor-Nixdorf, the premiere manufacturers of white label ATMs in North America, has made us the industry leaders in ATM sales in Canada.",
    details: {
      overview:
        "We stock extensive inventories of factory-certified replacement parts, high-capacity cassettes, electronic locks, high-brightness LED toppers, and premium thermal receipt paper rolls at our central Ontario distribution hub.",
      benefits: [
        "Direct manufacturer pricing on Nautilus Hyosung, Triton, and Genmega units",
        "Bulk wholesale thermal paper rolls with rapid delivery across Ontario",
        "Heavy-duty cash dispenser modules and upgradeable multi-cassettes",
        "High-security digital electronic locks (S&G, Cencon, Mas-Hamilton)",
        "EMV contactless Tap bezels, lighted signage toppers, and security anchors",
      ],
      suitableFor:
        "Business owners seeking hardware upgrades, replacement parts, or bulk receipt paper for existing or newly deployed ATM machines.",
    },
  },
  {
    id: "telecommunications",
    title: "TELECOMMUNICATIONS",
    tagline: "From Telecommunications To Support - ATM Solutions From MH ATM",
    image: serviceTelecom,
    badge: "4G/5G Wireless Cellular",
    summary:
      "No two clients are the same. Every business owner comes to us with a unique set of circumstances and goals for an ATM deployment. Our ability to respond to our clients' needs and develop flexible ATM solutions extends beyond the ATM to include how they communicate. From dial-up on a standard phone line to wireless communications, to incorporating with your existing network over DirectIP, MH ATM can provide the best solution for your business needs. From the choice of ATM to marketing strategies to customized telecommunications, our experienced team at MH ATM can set you up for success.",
    details: {
      overview:
        "Eliminate expensive dedicated telephone landline bills ($80–$120/month) with our pre-programmed, high-speed 4G/5G wireless ATM cellular modems. Works straight out of the box anywhere with cellular reception.",
      benefits: [
        "Eliminates traditional copper phone line costs entirely",
        "Multi-carrier dual-SIM redundancy (Bell, Rogers, Telus) for maximum uptime",
        "Encrypted IP VPN tunnels protecting customer card data in transit",
        "Plug-and-play installation — no store router or Wi-Fi configuration required",
        "Fast 1–2 second card authorization speeds vs 15–30 seconds on dial-up",
      ],
      suitableFor:
        "Venues without accessible phone jacks, temporary festival organizers, mobile pop-ups, and stores looking to save on landline bills.",
    },
  },
  {
    id: "maintenance",
    title: "MAINTENANCE",
    tagline: "Count On Our Professional, Proactive Approach",
    image: serviceMaint,
    badge: "24/7 Ontario Field Service",
    summary:
      "When you're in partnership with MH ATM, concerns about maintenance or ATM repair can be put to rest with our multi-pronged, proactive approach to service and support. In addition to timely ATM repair, we also regularly perform preventative maintenance to keep them running smoothly. When you deploy an MH ATM, we guarantee prompt and professional maintenance for ATMs.",
    details: {
      overview:
        "Our dedicated team of certified mobile technicians covers the entire province of Ontario. With 24/7 automated machine monitoring, we frequently detect and resolve potential issues before customers even notice.",
      benefits: [
        "24/7/365 emergency field dispatch with rapid on-site response",
        "Comprehensive annual preventative inspections, cleaning, and firmware updates",
        "Complete coverage for dispenser belts, pick tires, card readers, and mainboards",
        "Toll-free 24-hour merchant support desk for immediate telephone assistance",
        "Zero repair bills or surprise maintenance invoices on all placement programs",
      ],
      suitableFor:
        "Every retail venue that demands continuous 99.9% uptime and dependable local Ontario technician support.",
    },
  },
];

const Services = () => {
  const [activeModal, setActiveModal] = useState<any | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("Cash Management");

  const openServiceModal = (service: any) => {
    setActiveModal(service);
    setSelectedService(service.title);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="mt-[85px] sm:mt-[95px] min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* ─── Hero Banner with 2-Column Responsive Layout ─── */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.15),transparent_65%)]" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-heading font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Comprehensive Ontario ATM Solutions</span>
              </div>
              <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-5xl text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                Our Services &amp; Solutions
              </h1>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                From complete turnkey cash management and certified transaction processing to equipment supplies, 4G telecommunications, and 24/7 proactive maintenance.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-2">
                <Button
                  asChild
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-heading font-bold px-8 py-6 rounded-xl shadow-lg shadow-emerald-500/30"
                >
                  <a href="#services-grid">Explore All Services</a>
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

            {/* Right: Dark Frosted Glass Services Showcase */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-4 sm:p-5 border border-slate-700/80 bg-slate-950/85 backdrop-blur-xl shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5 font-heading">
                    <span>🍁</span> Full-Stack ATM Infrastructure
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[11px] border border-emerald-500/30">
                    5 CORE PILLARS
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-inner group bg-slate-900">
                  <img
                    src={serviceCashMgmt}
                    alt="Canadian Currency Cash Management and Vaulting"
                    className="w-full h-52 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>100% Cash Vaulting</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Interac® EFT Switch</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>4G/5G LTE Gateways</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>24/7 Field Techs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Cards List ─── */}
      <section id="services-grid" className="py-24 container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-2">
            Everything Your ATM Needs
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mb-4">
            Tailored ATM Services for Ontario Merchants
          </h2>
          <p className="text-slate-600">
            Click on any service card below or click <strong>SERVICE DETAILS &gt;&gt;</strong> to view full technical specifications, merchant benefits, and inquiry options.
          </p>
        </div>

        <div className="space-y-12">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              onClick={() => openServiceModal(service)}
              className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl overflow-hidden grid lg:grid-cols-12 gap-8 items-center cursor-pointer hover:border-emerald-400 hover:shadow-2xl transition-all group hover:-translate-y-1"
            >
              {/* Left: Text & Info */}
              <div
                className={`lg:col-span-7 space-y-4 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-heading font-bold text-xs">
                    {service.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    Service 0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold italic text-slate-500 mt-1">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.summary}
                </p>

               
              </div>

              {/* Right: Generated Image */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Interactive Service Detail Modal ─── */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fade-up">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 pr-8">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-heading font-bold text-xs inline-block mb-2">
                {activeModal.badge}
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                {activeModal.title}
              </h3>
              <p className="text-sm font-semibold italic text-emerald-700 mt-1">
                {activeModal.tagline}
              </p>
            </div>

            {/* Modal Image */}
            <div className="rounded-xl overflow-hidden border border-slate-200 mb-6">
              <img
                src={activeModal.image}
                alt={activeModal.title}
                className="w-full h-48 sm:h-60 object-cover"
              />
            </div>

            {/* Detailed Content */}
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-6">
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 mb-2">
                  Service Overview:
                </h4>
                <p className="text-slate-600">{activeModal.details.overview}</p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 mb-3">
                  Key Features & Business Advantages:
                </h4>
                <div className="space-y-2.5">
                  {activeModal.details.benefits.map((benefit: string, i: number) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium">
                <strong>Ideal Venue Profile:</strong> {activeModal.details.suitableFor}
              </div>

              {/* Action Buttons inside Modal */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <a
                  href="tel:+18449399378"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-emerald-700"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call Dispatch: 1-844-939-9378</span>
                </a>
                <div className="flex gap-3">
                  <Button
                    onClick={closeModal}
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 text-xs"
                  >
                    Close
                  </Button>
                  <Button
                    asChild
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs px-6"
                  >
                    <a href="#service-inquiry" onClick={closeModal}>
                      Inquire About This Service →
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Fast Service Inquiry Section ─── */}
      <section id="service-inquiry" className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container max-w-4xl">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                Direct Ontario Service Desk
              </span>
              <h3 className="font-heading font-black text-3xl text-slate-900">
                Request Service or Technician Dispatch
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Have a question or need cash loading, supplies, processing, or repair? We respond within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fade-up">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-heading font-black text-2xl text-slate-900">
                  Service Request Logged!
                </h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you. Your inquiry for <strong>{selectedService}</strong> has been dispatched to our Ontario service supervisor.
                </p>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  variant="outline"
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-100"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Store / Restaurant Name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="manager@business.ca"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(905) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service Required *
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Cash Management">Cash Management (Turnkey Loading & Vaulting)</option>
                    <option value="Transaction Processing">Transaction Processing (Interac / Visa / MC Gateway)</option>
                    <option value="Equipment and Supplies">Equipment and Supplies (Parts, Paper, Cassettes)</option>
                    <option value="Telecommunications">Telecommunications (4G/5G Wireless Cellular Modems)</option>
                    <option value="Maintenance">Maintenance & Preventative Repair</option>
                    <option value="Multiple Services">Multiple / Complete Turnkey Program</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Current ATM Model & Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current setup or what support you require..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-extrabold py-4 text-base rounded-xl shadow-lg shadow-emerald-600/20"
                >
                  Submit Service Request →
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
