import { ChevronRight, Shield, Clock, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const benefits = [
    { icon: <Shield className="w-5 h-5" />, text: "Secure & Reliable" },
    { icon: <Clock className="w-5 h-5" />, text: "24/7 Support" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Revenue Growth" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 clay-badge bg-sky-blue/10 text-sky-blue">
            <span className="w-2 h-2 bg-sky-blue rounded-full animate-pulse"></span>
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
                className="flex items-center gap-2 text-gray-600 bg-white/60 px-4 py-2 rounded-xl"
              >
                <span className="text-sky-blue">{benefit.icon}</span>
                {benefit.text}
              </div>
            ))}
          </div>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <button className="clay-button flex items-center gap-2">
              Get Started <ChevronRight size={20} />
            </button>
            <button className="clay-button-secondary flex items-center gap-2">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Right Image with enhanced effects */}
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-sky-blue/20 rounded-full blur-3xl -z-10 animate-float"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-dark-blue/20 rounded-full blur-3xl -z-10 animate-float-delayed"></div>
          
          {/* Main card */}
          <div className="clay-card p-2 hover-lift">
            <img 
              src="/hero.png" 
              alt="MHEnterprise ATM Machine" 
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Floating stats card */}
          <div className="absolute -bottom-6 -left-6 clay-card px-6 py-4 animate-float-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-blue/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-sky-blue" />
              </div>
              <div>
                <div className="text-2xl font-bold text-dark-blue">$100M+</div>
                <div className="text-sm text-gray-500">Transactions Processed</div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 clay-card px-4 py-2 animate-float">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-sky-blue" />
              <span className="text-sm font-medium text-dark-blue">PCI Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
