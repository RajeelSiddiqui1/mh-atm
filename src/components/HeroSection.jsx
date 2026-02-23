import { ChevronRight, Shield, Clock, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const benefits = [
    { icon: <Shield className="w-5 h-5" />, text: "Secure & Reliable" },
    { icon: <Clock className="w-5 h-5" />, text: "24/7 Support" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Revenue Growth" }
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-block bg-sky-100 text-sky-blue px-4 py-1 rounded-full text-sm font-medium">
            Trusted by 500+ Merchants
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            Power Your Business with{' '}
            <span className="gradient-text">MHEnterprise ATM Solutions</span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold text-dark-blue">MHEnterprise</span> is your reliable partner 
            for modern, secure, and easy-to-manage ATM services. With strong industry experience 
            and a growing nationwide presence, we help businesses increase foot traffic, boost 
            on-site revenue, and improve customer convenience.
          </p>
          
          <p className="text-gray-600">
            Whether you operate a convenience store, petrol station, shopping mall, or retail outlet, 
            our mission is simple — to support your business growth with{' '}
            <span className="font-semibold text-sky-blue">free ATM placement</span>,{' '}
            <span className="font-semibold text-sky-blue">affordable rental plans</span>, and{' '}
            <span className="font-semibold text-sky-blue">complete end-to-end service</span>.
          </p>
          
          {/* Benefits icons */}
          <div className="flex flex-wrap gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 text-gray-600 bg-gray-100 px-4 py-2 rounded-lg"
              >
                <span className="text-sky-blue">{benefit.icon}</span>
                {benefit.text}
              </div>
            ))}
          </div>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <button className="flat-button flex items-center gap-2">
              Get Started <ChevronRight size={20} />
            </button>
            <button className="flat-button-secondary flex items-center gap-2">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="relative">
          {/* Flat card */}
          <div className="flat-card p-2 hover-scale">
            <img 
              src="/hero.svg" 
              alt="MHEnterprise ATM Machine" 
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Stats card */}
          <div className="absolute -bottom-4 -left-4 flat-card px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-blue flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-dark-blue">$100M+</div>
                <div className="text-xs text-gray-500">Transactions</div>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="absolute -top-4 -right-4 flat-card px-3 py-2">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-sky-blue" />
              <span className="text-sm font-medium text-dark-blue">PCI Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
