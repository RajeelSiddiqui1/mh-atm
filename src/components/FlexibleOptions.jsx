import { Package, CreditCard, Gift, ArrowRight, CheckCircle } from 'lucide-react';

const FlexibleOptions = () => {
  const options = [
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "ATM Rentals",
      description: "Looking for short- or long-term ATM solutions? We offer Canada's most competitive rental rates with no hidden charges.",
      features: ["No hidden charges", "Flexible terms", "Maintenance included"],
      iconBg: "bg-sky-100 text-sky-blue"
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "ATM Purchases",
      description: "Purchasing your own ATM machine can be a great investment. MHEnterprise offers top-tier machines with full technical support.",
      features: ["Direct from manufacturer", "Full warranty", "Technical support"],
      iconBg: "bg-dark-blue text-white"
    },
    {
      icon: <Gift className="w-10 h-10" />,
      title: "Free Placement",
      description: "Start with our Free ATM Placement Program across Canada. You'll receive a brand-new ATM machine at no cost.",
      features: ["Zero upfront cost", "Dedicated manager", "24/7 support"],
      iconBg: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-12">
        <div className="inline-block bg-sky-100 text-sky-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
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
            className="flat-card p-8 hover-scale cursor-pointer"
          >
            {/* Icon */}
            <div className="mb-6">
              <div className={`p-4 rounded-xl inline-block ${option.iconBg}`}>
                {option.icon}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-4">
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
              className="inline-flex items-center gap-2 text-sky-blue font-semibold hover:gap-3 transition-all"
            >
              Learn more <ArrowRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlexibleOptions;
