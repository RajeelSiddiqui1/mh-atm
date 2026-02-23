import { Package, CreditCard, Gift, ArrowRight, CheckCircle } from 'lucide-react';

const FlexibleOptions = () => {
  const options = [
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "ATM Rentals",
      description: "Looking for short- or long-term ATM solutions? We offer Canada's most competitive rental rates with no hidden charges. It's an easy way to start earning more without the burden of ownership.",
      features: ["No hidden charges", "Flexible terms", "Maintenance included"],
      bgColor: "from-sky-400/20 to-sky-600/10",
      iconBg: "bg-sky-blue/20 text-sky-blue"
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "ATM Purchases",
      description: "Purchasing your own ATM machine can be a great investment. MHEnterprise offers top-tier Housyung and Triton machines, direct from the manufacturer, backed by full technical support, warranty, and maintenance.",
      features: ["Direct from manufacturer", "Full warranty", "Technical support"],
      bgColor: "from-dark-blue/20 to-blue-800/10",
      iconBg: "bg-dark-blue/20 text-dark-blue"
    },
    {
      icon: <Gift className="w-10 h-10" />,
      title: "Free Placement",
      description: "Start with our Free ATM Placement Program, available across Canada. You'll receive a brand-new ATM machine at no cost to you with paperless onboarding and dedicated account manager.",
      features: ["Zero upfront cost", "Dedicated manager", "24/7 support"],
      bgColor: "from-green-400/20 to-emerald-600/10",
      iconBg: "bg-green-500/20 text-green-600"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-dark-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 clay-badge bg-sky-blue/10 text-sky-blue mb-4">
          <span className="w-2 h-2 bg-sky-blue rounded-full animate-pulse"></span>
          Flexible Plans
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Flexible Options to{' '}
          <span className="gradient-text">Fit Your Business</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Choose the perfect ATM solution that aligns with your business goals and budget
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-blue to-dark-blue mx-auto rounded-full mt-6"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {options.map((option, index) => (
          <div
            key={index}
            className="clay-card p-8 hover-lift group relative overflow-hidden cursor-pointer"
          >
            {/* Animated gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${option.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
              {/* Icon with animation */}
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className={`p-4 rounded-2xl inline-block ${option.iconBg} clay-card`}>
                  {option.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-dark-blue mb-4 group-hover:text-sky-blue transition-colors">
                {option.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {option.description}
              </p>

              {/* Features list */}
              <ul className="space-y-3 mb-6">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-sky-blue" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sky-blue font-semibold group-hover:gap-3 transition-all"
              >
                Learn more <ArrowRight size={18} />
              </a>
            </div>

            {/* Animated bottom border on hover */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-sky-blue to-dark-blue group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* Floating SVG Icons - Animated */}
      <div className="hidden lg:block">
        <svg className="absolute top-40 left-0 w-16 h-16 text-sky-blue/20 animate-float" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        
        <svg className="absolute bottom-40 right-0 w-20 h-20 text-dark-blue/20 animate-float-delayed" viewBox="0 0 24 24" fill="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};

export default FlexibleOptions;
