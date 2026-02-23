import { Package, CreditCard, Gift, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { AnimateOnScroll } from '../hooks/useScrollAnimation';

const FlexibleOptions = () => {
  const options = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "ATM Rentals",
      description: "Looking for short- or long-term ATM solutions? We offer Canada's most competitive rental rates with no hidden charges.",
      features: ["No hidden charges", "Flexible terms", "Maintenance included", "Quick setup"],
      gradient: "from-electric to-purple-500",
      iconBg: "bg-electric/10 text-electric",
      tag: "Flexible"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "ATM Purchases",
      description: "Purchasing your own ATM machine can be a great investment. MHEnterprise offers top-tier machines with full technical support.",
      features: ["Direct from manufacturer", "Full warranty", "Technical support", "Best ROI"],
      gradient: "from-sky-blue to-cyan",
      iconBg: "bg-sky-blue/10 text-sky-blue",
      tag: "Best Value",
      featured: true
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Free Placement",
      description: "Start with our Free ATM Placement Program across Canada. You'll receive a brand-new ATM machine at no cost.",
      features: ["Zero upfront cost", "Dedicated manager", "24/7 support", "Revenue sharing"],
      gradient: "from-emerald to-teal-400",
      iconBg: "bg-emerald/10 text-emerald",
      tag: "Most Popular"
    }
  ];

  return (
    <section className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fadeUp">
          <div className="section-header">
            <div className="badge badge-primary mb-4">
              <Sparkles size={14} />
              Flexible Plans
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Flexible Options to{' '}
              <span className="gradient-text">Fit Your Business</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Choose the perfect ATM solution that aligns with your business goals and budget
            </p>
            <div className="gradient-divider"></div>
          </div>
        </AnimateOnScroll>

        {/* Options Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="flipUp" 
              delay={index * 150}
            >
              <div
                className={`group relative premium-card p-8 overflow-hidden h-full ${
                  option.featured ? 'ring-2 ring-sky-blue/30 md:-translate-y-4' : ''
                }`}
              >
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${option.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Tag */}
                <div className="mb-6 flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl ${option.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    {option.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    option.featured 
                      ? 'bg-sky-blue/10 text-sky-blue border border-sky-blue/20' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {option.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-dark-blue mb-3">
                  {option.title}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-6 text-[0.95rem]">
                  {option.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <a 
                  href="#" 
                  className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-3 ${
                    option.featured ? 'text-sky-blue' : 'text-electric'
                  }`}
                >
                  Learn more <ArrowRight size={18} />
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlexibleOptions;
