import { Button } from "@/components/ui/button";
import { useState } from "react";
import atm1 from "@/assets/atm-machine-1.jpg";
import atm2 from "@/assets/atm-machine-2.jpg";
import atm3 from "@/assets/atm-machine-3.jpg";

const machines = [
  {
    image: atm1,
    title: "NAUTILUS HYOSUNG HALO II ATM",
    description: "The HALO II provides the best value of any retail cash dispenser in the industry with added peace of mind from enhanced security features at an affordable price.",
  },
  {
    image:atm2,
    title: "NAUTILUS HYOSUNG 2700 CE ATM",
    description: "NH-2700CE is designed to provide 2nd to none reliability in the retail market locations with highest uptime and with minimum maintenance needs.",
  },
  {
    image: atm3,
    title: "NAUTILUS HYOSUNG FORCE MX2800SE ATM",
    description: "The Nautilus Hyosung Force ATM is a sleek designed option for any retailer or hotel. It is a free standing ATM.",
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

const ATMMachines = () => {

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
    <div className="mt-[105px]">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-foreground to-muted overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="container relative z-10 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-background mb-4">OUR ATM MACHINES</h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-background/80 text-lg max-w-2xl mx-auto">
            MH ATM offers ATM machines services to businesses, companies and events in all of Ontario. Your one-stop ATM Solution partner!
          </p>
        </div>
      </section>

      {/* ATM Cards */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10">
            {machines.map((machine, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-[0_12px_40px_-10px_hsl(var(--primary)/0.2)]">
                <div className="h-72 bg-section-alt flex items-center justify-center p-8">
                  <img
                    src={machine.image}
                    alt={machine.title}
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">{machine.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{machine.description}</p>
                  <Button className="bg-primary text-primary-foreground hover:bg-green-dark font-heading font-semibold px-6">
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="p-5">
         <div className="bg-card border border-border rounded-xl p-8 ">
                      <h3 className="font-heading font-bold text-3xl text-foreground mb-6 text-center my-3">
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
      </div>
    </div>
  );
};

export default ATMMachines;
