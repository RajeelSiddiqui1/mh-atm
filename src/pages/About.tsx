import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  Building2,
  Clock,
  Coins,
  MapPin,
  Phone,
  Users,
  Check,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import heroAbout from "@/assets/hero-about.svg";
import heroCanada from "@/assets/hero-slider-canada.jpg";
import atmOntarioImage from "@/assets/atm-machines-rental-ontario.png";
import hyosungImage from "@/assets/Nautilus-Hyosung-Force.png";

const ontarioRegions = [
  { name: "Greater Toronto Area (GTA)", areas: "Downtown Toronto, North York, Scarborough, Etobicoke" },
  { name: "Peel Region", areas: "Mississauga, Brampton, Caledon" },
  { name: "York & Durham Regions", areas: "Markham, Vaughan, Richmond Hill, Oshawa, Pickering" },
  { name: "Northern Ontario Hub", areas: "Timmins, Sudbury, North Bay, Sault Ste. Marie" },
  { name: "Eastern Ontario", areas: "Ottawa, Kingston, Belleville, Cornwall" },
  { name: "Southwestern & Niagara", areas: "London, Kitchener-Waterloo, Hamilton, Windsor, Niagara" },
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: "100% Canadian Owned & Operated",
    desc: "Headquartered right here in Ontario since 2007. We understand the local Canadian market, regulations, and merchant needs intimately.",
  },
  {
    icon: Coins,
    title: "Highest Revenue Share Payouts",
    desc: "We believe in true partnership. We offer top-tier surcharge revenue sharing with transparent reporting and monthly direct deposit.",
  },
  {
    icon: Clock,
    title: "24/7 Rapid Local Dispatch",
    desc: "Our certified mobile technicians are on standby 24 hours a day, 7 days a week to ensure your ATM experiences zero downtime.",
  },
  {
    icon: Award,
    title: "Level 1 Vault & Interac Certified",
    desc: "All terminals comply with strict PCI-PTS standards, Interac Tap & Chip guidelines, and full insurance vault coverage.",
  },
];

const testimonials = [
  {
    quote: "MH ATM placed a brand new Nautilus Hyosung in our Mississauga convenience store in under 48 hours. Our cash sales went up by 25% and we haven't paid a dime for maintenance.",
    author: "Gurpreet S.",
    business: "QuickMart Convenience, Mississauga ON",
  },
  {
    quote: "The turnkey placement is truly zero hassle. They handle all cash loading, vault insurance, and send our revenue split directly to our bank account every month.",
    author: "Marcus T.",
    business: "The Crown Tavern, Downtown Toronto",
  },
  {
    quote: "Switching to MH ATM eliminated thousands in credit card processing fees for our diner. Their Ontario technician is always on call if we ever need anything.",
    author: "Elena R.",
    business: "Lakeside Diner, Hamilton ON",
  },
];

const About = () => {
  return (
    <div className="mt-[85px] sm:mt-[95px] min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* ─── Full-Bleed Background JPG Hero Banner ─── */}
      <section className="relative py-24 sm:py-32 text-white overflow-hidden min-h-[480px] flex items-center">
        {/* Full JPG Image Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCanada})` }}
        />
        {/* Dark Gradient Overlay for Maximum Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60 backdrop-blur-[1px]" />

        <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/90 text-white border border-red-400/40 text-xs font-heading font-bold uppercase tracking-wider backdrop-blur-md shadow-lg">
            <span>🍁 Proudly Canadian • Serving All Ontario Since 2007</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Ontario's Most Trusted Commercial ATM Provider
          </h1>
          <p className="text-slate-100 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Empowering businesses across Ontario with reliable, high-yield cash dispensing infrastructure, 24/7 vault management, and uncompromising Canadian customer service.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <Button
              asChild
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-heading font-bold px-8 py-6 rounded-xl shadow-xl shadow-emerald-950/50 text-base"
            >
              <a href="/#quote-form">Get Started Today →</a>
            </Button>
            <a
              href="tel:+18449399378"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-900/85 hover:bg-slate-900 text-white font-heading font-bold text-sm backdrop-blur-md border border-slate-700 shadow-xl transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>1-844-939-9378</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Canadian Heritage & Story Section ─── */}
      <section className="py-24 container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text & Heritage */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-heading font-bold uppercase">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              <span>Over 15 Years in Business</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 leading-tight">
              Leading the Ontario ATM Industry with Integrity and Technological Excellence
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Founded in Ontario in 2007, MH ATM was built on a single mission: to provide retail store owners, hospitality venues, and event organizers with seamless cash access that increases merchant profitability and eliminates costly debit interchange fees.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Over the last decade and a half, we have grown to operate more than 10,000 ATM terminals across Ontario and Canada. We partner with the world's leading ATM hardware manufacturers — including Nautilus Hyosung, Triton, and Genmega — to guarantee 99.9% uptime, maximum tamper resistance, and Interac® compliance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 text-sm block">Turnkey Vaulting</strong>
                  <p className="text-xs text-slate-500">We provide 100% of the cash so you never risk your own capital.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 text-sm block">Ontario Field Support</strong>
                  <p className="text-xs text-slate-500">Mobile certified technicians dispatched from local Ontario depots.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Canada Themed Showcase Image */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel-canada rounded-3xl p-6 border border-red-200 shadow-2xl relative overflow-hidden">
              {/* Flag Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-red-200/80 mb-4">
                <span className="text-xs font-bold text-red-700 flex items-center gap-1.5">
                  <span className="text-base">🍁</span> Canadian Registered ATM ISO
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 bg-red-100 text-red-800 rounded">
                  Level 1 PCI-PTS
                </span>
              </div>

              {/* High-res Image */}
              <div className="rounded-2xl overflow-hidden bg-white p-2 border border-slate-200 shadow-inner">
                <img
                  src={atmOntarioImage}
                  alt="MH ATM in Canadian Ontario Center"
                  className="w-full h-auto object-contain rounded-xl hover:scale-103 transition-transform duration-500 max-h-[300px] mx-auto"
                />
              </div>

              <div className="mt-4 p-4 rounded-xl bg-white/90 border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900">Ontario Regional Operations</p>
                  <p className="text-slate-500">Active monitoring 24/7/365</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  99.9% Uptime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Numbers / Impact Counters ─── */}
    

      {/* ─── Why Choose MH ATM (Core Pillars) ─── */}
      <section className="py-24 container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-2">
            The MH ATM Advantage
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mb-4">
            Why Ontario Merchants Choose MH ATM
          </h2>
          <p className="text-slate-600">
            We combine high-grade banking equipment with personalized, local customer service that big national conglomerates can't match.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, i) => (
            <div
              key={i}
              className="glass-panel p-6 rounded-2xl border border-slate-200 shadow-md hover:border-emerald-300 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                  <val.icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Ontario Service Coverage Areas ─── */}
      <section className="py-20 bg-slate-100/80 border-y border-slate-200">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-heading font-bold uppercase mb-2">
              <span>🍁 Full Geographic Coverage</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mb-3">
              Serving Businesses Across All Ontario
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              No matter where your retail store, restaurant, or commercial property is situated in Ontario, our mobile service fleet has you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ontarioRegions.map((region, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900 mb-1">
                    {region.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {region.areas}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Client Testimonials ─── */}
      <section className="py-24 container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-2">
            Merchant Testimonials
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mb-4">
            Trusted by Hundreds of Local Businesses
          </h2>
          <p className="text-slate-600">
            Hear directly from Ontario business owners who partnered with MH ATM to drive cash revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-panel p-8 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-yellow-400">
                  {"★".repeat(5)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6">
                <p className="font-heading font-bold text-slate-900 text-sm">{t.author}</p>
                <p className="text-xs text-slate-500">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Bottom Call to Action ─── */}
      <section className="py-16 bg-emerald-700 text-white text-center">
        <div className="container max-w-3xl space-y-6">
          <h3 className="font-heading font-black text-3xl sm:text-4xl">
            Ready to Install a High-Yield ATM in Your Venue?
          </h3>
          <p className="text-emerald-100 text-base">
            Get 100% free placement, complete vault cash management, and up to $1,000 signing bonus.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button
              asChild
              className="bg-white hover:bg-slate-100 text-emerald-800 font-heading font-black px-8 py-6 rounded-xl shadow-xl text-base"
            >
              <a href="/#quote-form">Claim Your Free ATM →</a>
            </Button>
            <a
              href="tel:+18449399378"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-emerald-800/80 hover:bg-emerald-800 text-white font-heading font-bold text-sm border border-emerald-600"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Call 1-844-939-9378</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
