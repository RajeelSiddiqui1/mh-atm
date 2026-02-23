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
      borderColor: "border-gray-200"
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
      borderColor: "border-sky-blue"
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
      borderColor: "border-gray-200"
    }
  ];

  const additionalBenefits = [
    { icon: <Shield className="w-5 h-5" />, text: "PCI Compliant" },
    { icon: <Wifi className="w-5 h-5" />, text: "Real-time Monitoring" },
    { icon: <Headphones className="w-5 h-5" />, text: "24/7 Support" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Revenue Sharing" }
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block bg-sky-100 text-sky-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
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
          <div key={index} className="flat-card px-5 py-2 flex items-center gap-2 text-sm hover-scale">
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
            className={`relative flat-card p-8 hover-scale 
                       ${plan.popular ? 'ring-2 ring-sky-blue' : ''}`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-sky-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ⭐ Most Popular
                </div>
              </div>
            )}

            {/* Icon */}
            <div className="mb-6">
              <div className="p-3 bg-gray-100 rounded-xl inline-block">
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
                      <span className="ml-2 text-xs bg-sky-100 text-sky-blue px-2 py-0.5 rounded-full">
                        included
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className={`w-full flat-button ${plan.popular ? '' : 'flat-button-secondary'}`}>
              Get Started
            </button>

            {/* Additional Info */}
            <p className="text-xs text-gray-500 text-center mt-4">
              No hidden charges • Cancel anytime
            </p>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mt-20 flat-card p-8 overflow-x-auto">
        <h3 className="text-2xl font-bold text-dark-blue mb-6 text-center">
          Detailed Plan Comparison
        </h3>
        
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-gray-200">
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
              <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700 font-medium">{feature}</td>
                <td className="text-center py-3 px-4">
                  {idx === 0 && "$99/month"}
                  {idx === 1 && "Monthly"}
                  {idx === 2 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 3 && <Check className="w-5 h-5 text-green-500 mx-auto" />}
                  {idx === 4 && <X className="w-5 h-5 text-gray-300 mx-auto" />}
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
                  {idx === 8 && "One-time"}
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
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {[
          "✓ No Hidden Fees",
          "✓ PCI Compliant",
          "✓ Insured by CDIC",
          "✓ 100% Canadian",
          "✓ 500+ Locations"
        ].map((badge, index) => (
          <div key={index} className="flat-card px-4 py-2 text-sm text-gray-600 hover-scale">
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
