import { useState, useEffect, useCallback } from "react";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from "@/assets/slider-1.png";
import slider2 from "@/assets/slider-2.png";
import slider3 from "@/assets/slider-3.png";
import atmImage from "@/assets/atm-machines-rental-ontario.png";
import atmSmall from "@/assets/atm.png";

/* ─── Data ─── */


const slides = [
  {
    image: slider1,
    subtitle: "#1 ATM Operator",
    title: "in Ontario.",
    description: "",
  },
  {
    image: slider2,
    subtitle: "The Best People,",
    title: "empowered with the Best Technology.",
    description: "",
  },
  {
    image: slider3,
    subtitle: "Making cash",
    title: "accessible",
    description: "with over 10,000 ATMs.",
  },
];





const businessTypes = [
  "Bar / Tavern",
  "Restaurant",
  "Gas Station",
  "Convenience Store",
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

/* ─── Page ─── */

const Index = () => {
  
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    businessType: "",
    email: "",
    phone: "",
    comment: "",
    interestedInTips: false,
  });

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
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
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ─── Header ─── */}
 

      {/* ─── Hero Slider ─── */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden mt-[105px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
            <div className="relative z-10 container h-full flex items-center">
              <div className="max-w-xl">
                {i === current && (
                  <>
                    <p className="text-primary font-heading font-semibold text-lg mb-2 animate-fade-up italic">
                      {slide.subtitle}
                    </p>
                    <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight animate-fade-up-delay-1">
                      {slide.title}
                    </h1>
                    {slide.description && (
                      <p className="text-xl md:text-2xl text-muted-foreground mt-4 animate-fade-up-delay-2">
                        {slide.description}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-muted-foreground/40"}`}
            />
          ))}
        </div>
      </section>

      {/* ─── Services Cards ─── */}
      {/* <section className="py-20 bg-section-alt">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCards.map((service, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-8 text-center group hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_-10px_hsl(var(--primary)/0.3)]">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                <a href="#" className="inline-block mt-4 text-primary text-sm font-semibold hover:underline">read more &raquo;</a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ─── Partner CTA ─── */}
      {/* <section className="py-20 bg-gradient-to-r from-green-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--green-glow)/0.3),transparent_60%)]" />
        <div className="container relative z-10 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">Partner with the Leader in ATM Service</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Offering up to <span className="font-bold text-primary-foreground">$1000 Signing Bonus</span>. Bring more cash to your business. Eliminate your Debit and Visa bill.
          </p>
          <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-heading font-semibold px-8 py-6 text-lg">Contact Us</Button>
        </div>
      </section> */}

      {/* ─── Need ATM Form Section ─── */}
      <section className="py-20 bg-section-alt">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative ">
              <h2 className="font-heading font-black text-4xl md:text-5xl text-primary mb-4">
                24 Hour Service!
              </h2>
              <p className="text-xl text-muted-foreground mb-2">
                Need a ATM Machine?
              </p>
              <p className="text-muted-foreground mb-6">
                ATM Ontario offers ATM machines services to businesses,
                companies and events in all of Ontario. Choose your option
                below.
              </p>
              <img
                src={atmImage}
                alt="ATM Machines Rental Ontario"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            {/* Form */}
            <div className="bg-card border border-border rounded-xl p-8 ">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                Get Your Free Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-foreground mb-1"
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
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-foreground mb-1"
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
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="province"
                      className="block text-sm font-medium text-foreground mb-1"
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
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="postalCode"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                      className="block text-sm font-medium text-foreground mb-1"
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
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-1"
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
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Comments
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="interestedInTips"
                    name="interestedInTips"
                    checked={formData.interestedInTips}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-input text-primary focus:ring-ring"
                  />
                  <label
                    htmlFor="interestedInTips"
                    className="text-sm text-muted-foreground"
                  >
                    I am also interested in receiving tips, new product
                    information, and offers about my ATM services
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-green-dark font-heading font-semibold py-3 text-lg"
                >
                  Submit Request
                </Button>
              </form>
            </div>
            {/* Image with Text */}
          </div>
        </div>
      </section>

      {/* ─── ATM Options ─── */}
      {/* <section className="py-24 bg-background">
        <div className="container">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase text-center mb-2">ATM OPTIONS</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-16">We offer 3 ATM & Cash Load Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {atmOptions.map((option, i) => (
              <div key={i} className={`rounded-xl border p-8 relative transition-all hover:-translate-y-1 ${option.highlighted ? "border-primary bg-primary/5 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]" : "border-border bg-card"}`}>
                {option.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider">Most Popular</div>
                )}
                <p className="text-primary font-heading font-bold text-sm mb-1">{option.number}</p>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{option.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{option.description}</p>
                <ul className="space-y-3 mb-8">
                  {option.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full font-heading font-semibold ${option.highlighted ? "bg-primary text-primary-foreground hover:bg-green-dark" : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"}`}>Get a Quote</Button>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">*Some restrictions apply. Please contact us for more information.</p>
        </div>
      </section> */}

      {/* ─── ATM Images Section ─── */}
      <section className="py-20 bg-section-alt">
        <div className="container">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground text-center mb-12">
            Need a ATM Machine?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-white text-2xl font-heading font-bold p-3 text-center">
                Option 1
              </div>
              <div className="text-muted-foreground text-lg p-3 text-center">
                We Supply ATM & Cash Load
              </div>
              <img
                src={atmSmall}
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

            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-white text-2xl font-heading font-bold p-3 text-center">
                Option 2
              </div>
              <div className="text-muted-foreground text-lg p-3 text-center">
               We Supply ATM & You Cash Load
              </div>
              <img
                src={atmSmall}
                alt="ATM Machine 1"
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

            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-white text-2xl font-heading font-bold p-3 text-center">
                Option 3
              </div>
              <div className="text-muted-foreground text-lg p-3 text-center">
                Own ATM & Cash Load
              </div>
              <img
                src={atmSmall}
                alt="ATM Machine 1"
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

    

   
    </div>
  );
};

export default Index;
