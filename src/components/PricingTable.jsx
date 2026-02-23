import { Check, X, Star, TrendingUp, Shield, Clock, Headphones, Wifi } from 'lucide-react';

const PricingTable = () => {
  const plans = [
    {
      name: "ATM Rentals",
      price: "CAD $99",
      period: "/month",
      description: "Perfect for short-term or trial basis",
      features: [
        { name: "No hidden charges", included: true },
        { name: "Competitive rental rates", included: true },
        { name: "Maintenance included", included: true },
        { name: "Flexible contract terms", included: true },
        { name: "Ownership option", included: false },
        { name: "Revenue sharing", included: true, highlight: true },
        { name: "24/7 support", included: true },
        { name: "Free installation", included: true }
      ],
      popular: false,
      icon: <Clock className="w-6 h-6" />,
      bgGradient: "from-sky-blue/5 to-transparent",
      accentColor: "sky-blue"
    },
    {
      name: "ATM Purchases",
      price: "CAD $2,499",
      period: "one-time",
      description: "Best long-term investment",
      features: [
        { name: "Top-tier Housyung/Triton", included: true, highlight: true },
        { name: "Manufacturer warranty", included: true },
        { name: "Full technical support", included: true },
        { name: "Direct from manufacturer", included: true },
        { name: "Ownership benefits", included: true, highlight: true },
        { name: "Revenue sharing", included: true },
        { name: "24/7 support", included: true },
        { name: "Free installation", included: true }
      ],
      popular: true,
      icon: <Star className="w-6 h-6" />,
      bgGradient: "from-dark-blue/5 to-transparent",
      accentColor: "dark-blue"
    },
    {
      name: "Free Placement",
      price: "CAD $0",
      period: "forever",
      description: "Zero investment, maximum returns",
      features: [
        { name: "Brand-new ATM machine", included: true, highlight: true },
        { name: "Paperless onboarding", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Licensed tech support", included: true },
        { name: "Revenue sharing", included: true, highlight: true },
        { name: "Upgrade options later", included: true },
        { name: "24/7 support", included: true },
        { name: "Free installation", included: true }
      ],
      popular: false,
      icon: <TrendingUp className="w-6 h-6" />,
      bgGradient: "from-green-500/5 to-transparent",
      accentColor: "green"
    }
  ];

  const additionalBenefits = [
    { icon: <Shield className="w-5 h-5" />, text: "PCI Compliant" },
    { icon: <Wifi className="w-5 h-5" />, text: "Real-time Monitoring" },
    { icon: <Headphones className="w-5 h-5" />, text: "24/7 Support" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Revenue Sharing" }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-sky-blue/5 to-white"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-dark-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 clay-badge bg-sky-blue/10 text-sky-blue mb-4">
          <span className="w-2 h-2 bg-sky-blue rounded-full animate-pulse"></span>
          Pricing Plans
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Your Perfect{' '}
          <span className="gradient-text">ATM Solution</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Flexible plans designed to grow with your business. 
          No hidden fees, complete transparency.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-blue to-dark-blue mx-auto rounded-full mt-6"></div>
      </div>

      {/* Quick Benefits Bar */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {additionalBenefits.map((benefit, index) => (
          <div key={index} className="clay-card px-5 py-3 flex items-center gap-2 text-sm hover-lift">
            <span className="text-sky-blue">{benefit.icon}</span>
            <span className="text-gray-700 font-medium">{benefit.text}</span>
          </div>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative clay-card p-8 transition-all duration-500 
                       hover:scale-105 hover:shadow-2xl group
                       ${plan.popular ? 'ring-2 ring-sky-blue md:-translate-y-4' : ''}`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-sky-blue to-dark-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ⭐ Most Popular
                </div>
              </div>
            )}

            {/* Background Gradient on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                            rounded-2xl`}>
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-6">
                <div className="p-3 bg-sky-blue/10 rounded-2xl inline-block 
                              group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                              clay-card">
                  <span className="text-sky-blue">{plan.icon}</span>
                </div>
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-dark-blue mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-dark-blue">{plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-sm">
                {plan.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                      {feature.name}
                      {feature.highlight && (
                        <span className="ml-2 text-xs bg-sky-blue/10 text-sky-blue px-2 py-0.5 rounded-full">
                          included
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full clay-button text-center relative overflow-hidden group/btn
                                ${plan.popular ? '' : 'clay-button-secondary'}`}>
                <span className="relative z-10">
                  Get Started
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full 
                              group-hover/btn:translate-y-0 transition-transform duration-300">
                </div>
              </button>

              {/* Additional Info */}
              <p className="text-xs text-gray-500 text-center mt-4">
                No hidden charges • Cancel anytime
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mt-20 clay-card p-8 overflow-x-auto">
        <h3 className="text-2xl font-bold text-dark-blue mb-6 text-center">
          Detailed Plan Comparison
        </h3>
        
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-sky-blue/20">
              <th className="text-left py-4 px-4 text-dark-blue font-bold">Features</th>
              <th className="text-center py-4 px-4 text-dark-blue font-bold">ATM Rentals</th>
              <th className="text-center py-4 px-4 text-dark-blue font-bold">ATM Purchases</th>
              <th className="text-center py-4 px-4 text-dark-blue font-bold">Free Placement</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Monthly Cost",
              "Contract Length",
              "Maintenance Included",
              "Revenue Sharing",
              "Ownership",
              "Upgrade Options",
              "Installation",
              "24/7 Support",
              "Minimum Commitment"
            ].map((feature, idx) => (
              <tr key={idx} className="border-b border-gray-100 hover:bg-sky-blue/5 transition-colors">
                <td className="py-3 px-4 text-gray-700 font-medium">{feature}</td>
                <td className="text-center py-3 px-4">
                  {idx === 0 && "$99/month"}
                  {idx === 1 && "Monthly"}
                  {idx === 2 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 3 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 4 && <X className="w-5 h-5 text-red-300 mx-auto" />}
                  {idx === 5 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 6 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 7 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 8 && "No minimum"}
                </td>
                <td className="text-center py-3 px-4">
                  {idx === 0 && "$2,499"}
                  {idx === 1 && "N/A"}
                  {idx === 2 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 3 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 4 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 5 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 6 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 7 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 8 && "One-time payment"}
                </td>
                <td className="text-center py-3 px-4">
                  {idx === 0 && "$0"}
                  {idx === 1 && "Flexible"}
                  {idx === 2 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 3 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 4 && "Future option"}
                  {idx === 5 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 6 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 7 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 8 && "No commitment"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {[
          "✓ No Hidden Fees",
          "✓ PCI Compliant",
          "✓ Insured by CDIC",
          "✓ 100% Canadian",
          "✓ 500+ Locations"
        ].map((badge, index) => (
          <div key={index} className="clay-card px-5 py-2 text-sm text-gray-600 hover-lift">
            {badge}
          </div>
        ))}
      </div>

      {/* Floating Animated Elements */}
      <div className="hidden lg:block">
        <svg className="absolute top-40 left-10 w-16 h-16 text-sky-blue/10 animate-float" 
             viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
        </svg>
        <svg className="absolute bottom-40 right-10 w-20 h-20 text-dark-blue/10 animate-float-delayed" 
             viewBox="0 0 24 24" fill="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
        </svg>
      </div>
    </section>
  );
};

export default PricingTable;
