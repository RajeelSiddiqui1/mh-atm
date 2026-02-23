import { Check, X, Star, TrendingUp, Shield, Clock, Headphones, Wifi, Sparkles, ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '../hooks/useScrollAnimation';

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
      gradient: "from-electric to-purple-500",
      iconBg: "bg-electric/10 text-electric"
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
      gradient: "from-sky-blue to-cyan",
      iconBg: "bg-sky-blue/10 text-sky-blue"
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
      gradient: "from-emerald to-teal-400",
      iconBg: "bg-emerald/10 text-emerald"
    }
  ];

  const additionalBenefits = [
    { icon: <Shield className="w-4 h-4" />, text: "PCI Compliant" },
    { icon: <Wifi className="w-4 h-4" />, text: "Real-time Monitoring" },
    { icon: <Headphones className="w-4 h-4" />, text: "24/7 Support" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "Revenue Sharing" }
  ];

  return (
    <section id="pricing" className="section-padding bg-mesh relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-sky-blue/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        {/* Header */}
        <AnimateOnScroll animation="fadeUp">
          <div className="section-header">
            <div className="badge badge-primary mb-4">
              <Sparkles size={14} />
              Pricing Plans
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Choose Your Perfect{' '}
              <span className="gradient-text">ATM Solution</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Flexible plans designed to grow with your business. 
              No hidden fees, complete transparency.
            </p>
            <div className="gradient-divider"></div>
          </div>
        </AnimateOnScroll>

        {/* Quick Benefits Bar */}
        <AnimateOnScroll animation="fadeUp" delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="premium-card px-5 py-2.5 flex items-center gap-2 text-sm">
                <span className="text-electric">{benefit.icon}</span>
                <span className="text-gray-600 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="flipUp" 
              delay={index * 150}
            >
              <div
                className={`group relative premium-card overflow-hidden ${
                  plan.popular ? 'md:-translate-y-6 ring-2 ring-sky-blue/30' : ''
                }`}
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${plan.gradient}`}></div>
                
                <div className="p-8">
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-5 right-5">
                      <div className="bg-gradient-to-r from-sky-blue to-cyan text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                        <Star size={12} className="fill-white" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`p-3.5 rounded-2xl inline-block ${plan.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {plan.icon}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-xl font-bold text-dark-blue mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-dark-blue">{plan.price}</span>
                    <span className="text-gray-400 ml-1 text-sm">{plan.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 mb-8 text-sm">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-emerald/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-emerald" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-3 h-3 text-gray-300" />
                          </div>
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-600' : 'text-gray-400'}`}>
                          {feature.name}
                          {feature.highlight && (
                            <span className="ml-2 text-xs bg-electric/10 text-electric px-2 py-0.5 rounded-full font-medium">
                              included
                            </span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'btn-primary' 
                      : 'btn-secondary'
                  }`}>
                    Get Started
                    <ArrowRight size={16} />
                  </button>

                  {/* Additional Info */}
                  <p className="text-xs text-gray-400 text-center mt-4">
                    No hidden charges • Cancel anytime
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Comparison Table */}
        <AnimateOnScroll animation="fadeUp" delay={200}>
          <div className="mt-24 premium-card overflow-hidden">
            {/* Table header */}
            <div className="bg-gradient-to-r from-dark-blue to-navy p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Detailed Plan Comparison
              </h3>
              <p className="text-gray-400 text-sm">Compare all features side by side</p>
            </div>
            
            <div className="p-8 overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="text-left py-4 px-4 text-dark-blue font-bold text-sm">Features</th>
                    <th className="text-center py-4 px-4 text-dark-blue font-bold text-sm">ATM Rentals</th>
                    <th className="text-center py-4 px-4 text-sm">
                      <span className="text-sky-blue font-bold">ATM Purchases</span>
                      <span className="block text-xs text-gray-400 font-normal mt-0.5">Recommended</span>
                    </th>
                    <th className="text-center py-4 px-4 text-dark-blue font-bold text-sm">Free Placement</th>
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
                    <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-4 text-gray-600 font-medium text-sm">{feature}</td>
                      <td className="text-center py-4 px-4 text-sm">
                        {idx === 0 && <span className="font-semibold text-dark-blue">$99/month</span>}
                        {idx === 1 && <span className="text-gray-500">Monthly</span>}
                        {idx === 2 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 3 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 4 && <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mx-auto"><X className="w-3.5 h-3.5 text-gray-300" /></div>}
                        {idx === 5 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 6 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 7 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 8 && <span className="text-gray-500">No minimum</span>}
                      </td>
                      <td className="text-center py-4 px-4 bg-sky-blue/[0.02] text-sm">
                        {idx === 0 && <span className="font-semibold text-dark-blue">$2,499</span>}
                        {idx === 1 && <span className="text-gray-500">N/A</span>}
                        {idx === 2 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 3 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 4 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 5 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 6 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 7 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 8 && <span className="text-gray-500">One-time</span>}
                      </td>
                      <td className="text-center py-4 px-4 text-sm">
                        {idx === 0 && <span className="font-bold text-emerald">$0</span>}
                        {idx === 1 && <span className="text-gray-500">Flexible</span>}
                        {idx === 2 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 3 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 4 && <span className="text-gray-500 text-xs">Future option</span>}
                        {idx === 5 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 6 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 7 && <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-emerald" /></div>}
                        {idx === 8 && <span className="text-gray-500 text-xs">No commitment</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Trust Badges */}
        <AnimateOnScroll animation="fadeIn" delay={300}>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {[
              "✓ No Hidden Fees",
              "✓ PCI Compliant",
              "✓ Insured by CDIC",
              "✓ 100% Canadian",
              "✓ 500+ Locations"
            ].map((badge, index) => (
              <div key={index} className="premium-card px-5 py-2.5 text-sm text-gray-500 font-medium">
                {badge}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PricingTable;
