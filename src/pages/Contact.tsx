import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  Navigation,
  MessageSquare,
} from "lucide-react";
import heroContact from "@/assets/hero-contact.svg";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"scarborough" | "mississauga" | "timmins">("scarborough");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "New ATM Placement",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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
            {/* Left: Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-heading font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>🍁 3 Ontario Regional Hubs &amp; 24/7 Dispatch</span>
              </div>
              <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-5xl text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                Contact MH ATM
              </h1>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Get in touch with Ontario's leading commercial ATM specialists. Operating three central facilities across Scarborough, Mississauga, and Timmins with 24/7 mobile vault dispatch province-wide.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3.5 pt-2">
                <a
                  href="tel:+18449399378"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-heading font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Toll-Free: 1-844-939-9378</span>
                </a>
                <a
                  href="tel:+14374102121"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm backdrop-blur-md border border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Direct: (437) 410-2121</span>
                </a>
              </div>
            </div>

            {/* Right: Dark Frosted Glass Contact Showcase */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-4 sm:p-5 border border-slate-700/80 bg-slate-950/85 backdrop-blur-xl shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5 font-heading">
                    <span>📍</span> 3 Regional Facilities
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[11px] border border-emerald-500/30">
                    24/7 ACTIVE DISPATCH
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-inner group">
                  <img
                    src={heroContact}
                    alt="MH ATM Scarborough Mississauga and Timmins Facilities"
                    className="w-full h-52 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                  <span>🏢 Scarborough • Mississauga • Timmins</span>
                  <span className="text-emerald-400 font-bold">&lt; 4-Hour Rapid Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Key Contact Info Cards (3 Facilities + Phone Support) ─── */}
      <section className="py-16 -mt-8 relative z-20 container px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Location 1: Scarborough */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 inline-block">
                EAST GTA HUB
              </span>
              <h3 className="font-heading font-black text-lg text-slate-900">Scarborough Facility</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                3001 Markham Road, Unit #20<br />
                Scarborough, ON M1X 1L6<br />
                Canada
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=3001+Markham+Road+Unit+20+Scarborough+ON"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions →</span>
            </a>
          </div>

          {/* Location 2: Mississauga */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 inline-block">
                WEST GTA HUB
              </span>
              <h3 className="font-heading font-black text-lg text-slate-900">Mississauga Facility</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                7015 Tranmere Drive, Unit #2<br />
                Mississauga, ON L5S 1T7<br />
                Canada
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=7015+Tranmere+Drive+Unit+2+Mississauga+ON"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions →</span>
            </a>
          </div>

          {/* Location 3: Timmins */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 inline-block">
                NORTHERN ONTARIO HUB
              </span>
              <h3 className="font-heading font-black text-lg text-slate-900">Timmins Facility</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                380 Pine Street South<br />
                Timmins, ON P4N 2J9<br />
                Canada
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=380+Pine+Street+South+Timmins+ON"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions →</span>
            </a>
          </div>

          {/* Phone Numbers & Email */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-lg text-slate-900">Phone &amp; Inquiries</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-500 block text-[11px]">Toll-Free Dispatch:</span>
                  <a href="tel:+18449399378" className="text-emerald-700 font-heading font-extrabold text-base hover:underline block">
                    1-844-939-9378
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Direct / GTA Line:</span>
                  <a href="tel:+14374102121" className="text-slate-900 font-heading font-bold hover:text-emerald-700 block">
                    (437) 410-2121
                  </a>
                </div>
                <div className="pt-1">
                  <span className="text-slate-500 block text-[11px]">Email:</span>
                  <a href="mailto:info@mhatm.ca" className="text-slate-900 font-bold hover:text-emerald-700 block">
                    info@mhatm.ca
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>24/7 Dispatch Across All Ontario</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact Form & 3 Interactive Location Maps Grid ─── */}
      <section className="py-16 container">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl">
              <div className="mb-8">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                  Send Us a Message
                </span>
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                  How Can We Help You Today?
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Fill out the details below and our Ontario team will get back to you promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fade-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading font-black text-2xl text-slate-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <strong>{formData.name || "Customer"}</strong>. Your inquiry has been received by our operations dispatch. We will call or email you back shortly.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    variant="outline"
                    className="border-emerald-600 text-emerald-700 hover:bg-emerald-100 mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
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
                        placeholder="(437) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Store or Venue Name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Inquiry Topic *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="New ATM Placement">Free Turnkey ATM Placement (With $1,000 Signing Bonus)</option>
                      <option value="Merchant Cash Loading">Merchant Cash Loading Program</option>
                      <option value="Buy or Lease Machine">Buy or Lease an ATM Machine</option>
                      <option value="Cash Vault Services">Cash Vault Management &amp; Replenishment</option>
                      <option value="Technical Support">Technical Support / Repair Dispatch</option>
                      <option value="Supplies & Paper">ATM Paper &amp; Supplies Order</option>
                      <option value="General Question">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your location, questions, or requirements..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-extrabold py-4 text-base rounded-xl shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to MH ATM →</span>
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right: 3 Interactive Location Maps with Tab Switcher */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 border border-slate-200 shadow-xl overflow-hidden space-y-4">
              {/* 3 Location Tabs */}
              <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveTab("scarborough")}
                  className={`flex-1 py-2 px-2 rounded-lg font-heading font-bold text-[11px] sm:text-xs transition-all flex items-center justify-center gap-1 ${
                    activeTab === "scarborough"
                      ? "bg-white text-emerald-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>📍 Scarborough</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("mississauga")}
                  className={`flex-1 py-2 px-2 rounded-lg font-heading font-bold text-[11px] sm:text-xs transition-all flex items-center justify-center gap-1 ${
                    activeTab === "mississauga"
                      ? "bg-white text-emerald-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>📍 Mississauga</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("timmins")}
                  className={`flex-1 py-2 px-2 rounded-lg font-heading font-bold text-[11px] sm:text-xs transition-all flex items-center justify-center gap-1 ${
                    activeTab === "timmins"
                      ? "bg-white text-emerald-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>📍 Timmins</span>
                </button>
              </div>

              {/* Map 1: Scarborough */}
              {activeTab === "scarborough" && (
                <div className="space-y-4 animate-fade-up">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                    <div>
                      <h4 className="font-heading font-black text-slate-900 text-sm">
                        Scarborough Facility (East GTA)
                      </h4>
                      <p className="text-[11px] text-slate-500">3001 Markham Road, Unit #20, Scarborough</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      Open 24/7
                    </span>
                  </div>

                  <div className="h-64 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                    <iframe
                      title="MH ATM Scarborough Facility"
                      src="https://maps.google.com/maps?q=3001+Markham+Road+Unit+20+Scarborough+ON&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span>📍 3001 Markham Road, Unit #20, Scarborough</span>
                    <a
                      href="https://maps.google.com/?q=3001+Markham+Road+Unit+20+Scarborough+ON"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      Get Directions ↗
                    </a>
                  </div>
                </div>
              )}

              {/* Map 2: Mississauga */}
              {activeTab === "mississauga" && (
                <div className="space-y-4 animate-fade-up">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                    <div>
                      <h4 className="font-heading font-black text-slate-900 text-sm">
                        Mississauga Facility (West GTA)
                      </h4>
                      <p className="text-[11px] text-slate-500">7015 Tranmere Drive, Unit #2, Mississauga</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">
                      Open 24/7
                    </span>
                  </div>

                  <div className="h-64 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                    <iframe
                      title="MH ATM Mississauga Facility"
                      src="https://maps.google.com/maps?q=7015+Tranmere+Drive+Unit+2+Mississauga+ON&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span>📍 7015 Tranmere Drive, Unit #2, Mississauga</span>
                    <a
                      href="https://maps.google.com/?q=7015+Tranmere+Drive+Unit+2+Mississauga+ON"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      Get Directions ↗
                    </a>
                  </div>
                </div>
              )}

              {/* Map 3: Timmins */}
              {activeTab === "timmins" && (
                <div className="space-y-4 animate-fade-up">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                    <div>
                      <h4 className="font-heading font-black text-slate-900 text-sm">
                        Timmins Facility (Northern Ontario Hub)
                      </h4>
                      <p className="text-[11px] text-slate-500">380 Pine Street South, Timmins, ON</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">
                      Open 24/7
                    </span>
                  </div>

                  <div className="h-64 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                    <iframe
                      title="MH ATM Timmins Facility"
                      src="https://maps.google.com/maps?q=380+Pine+Street+South+Timmins+ON&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span>📍 380 Pine Street South, Timmins, ON P4N 2J9</span>
                    <a
                      href="https://maps.google.com/?q=380+Pine+Street+South+Timmins+ON"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      Get Directions ↗
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Emergency Assistance Box with Both Numbers */}
            <div className="glass-panel-emerald rounded-3xl p-6 border border-emerald-200 shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    24/7 Emergency Dispatch
                  </span>
                  <p className="font-heading font-black text-2xl text-slate-900">
                    1-844-939-9378
                  </p>
                  <p className="text-xs text-slate-600">
                    Direct GTA Line: <strong>(437) 410-2121</strong>
                  </p>
                </div>
                <a
                  href="tel:+18449399378"
                  className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 flex-shrink-0"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Toll-Free</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
