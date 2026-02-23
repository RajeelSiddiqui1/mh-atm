import { ChevronRight, Shield, Clock, TrendingUp, Zap, Star, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const benefits = [
    { icon: <Shield className="w-4 h-4" />, text: "PCI Compliant" },
    { icon: <Clock className="w-4 h-4" />, text: "24/7 Support" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "Revenue Growth" },
    { icon: <Zap className="w-4 h-4" />, text: "Fast Setup" }
  ];

  const trustedLogos = [
    "Interac", "Visa", "Mastercard", "CDIC"
  ];

  return (
    <section className="bg-gradient-hero relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40"></div>
      
      {/* Floating decorative orbs */}
      <div className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-electric/40 animate-float"></div>
      <div className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-sky-blue/50 animate-float-delayed"></div>
      <div className="absolute bottom-32 left-[20%] w-4 h-4 rounded-full bg-cyan/30 animate-float"></div>
      <div className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-electric/30 animate-float-delayed"></div>
      
      {/* Gradient line accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric via-sky-blue to-cyan"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge-light animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
              <span>Trusted by 500+ Merchants Across Canada</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-white animate-slideUp">
              Power Your Business with{' '}
              <span className="relative">
                <span className="gradient-text">Smart ATM</span>
              </span>
              {' '}Solutions
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <span className="text-white font-semibold">MHEnterprise</span> delivers modern, secure, and hassle-free 
              ATM services. Increase foot traffic, boost revenue, and enhance customer convenience with 
              Canada's most trusted ATM partner.
            </p>
            
            {/* Benefits pills */}
            <div className="flex flex-wrap gap-3 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                >
                  <span className="text-sky-blue">{benefit.icon}</span>
                  {benefit.text}
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <button className="btn-primary flex items-center gap-2 text-base py-4 px-8">
                Get Free ATM Placement
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-ghost flex items-center gap-2 text-base py-4 px-8">
                View Pricing
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="pt-4 animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <p className="text-gray-500 text-sm mb-3">Trusted & Certified by</p>
              <div className="flex items-center gap-6">
                {trustedLogos.map((logo, index) => (
                  <span 
                    key={index}
                    className="text-gray-500 text-sm font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/5"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right - Hero Visual */}
          <div className="relative hidden lg:block">
            {/* Main image container with glow */}
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric/20 to-sky-blue/20 rounded-3xl blur-3xl scale-95"></div>
              
              {/* Image card */}
              <div className="relative glass-dark rounded-3xl p-3 animate-scaleIn">
                <img 
                  src="/hero.svg" 
                  alt="MHEnterprise ATM Machine" 
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Shimmer overlay */}
                <div className="absolute inset-0 rounded-2xl animate-shimmer pointer-events-none"></div>
              </div>

              {/* Floating Stats Card - Bottom Left */}
              <div className="absolute -bottom-6 -left-6 glass-dark rounded-2xl px-6 py-4 animate-float border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="icon-box icon-box-md rounded-xl bg-gradient-to-br from-electric to-sky-blue">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">$100M+</div>
                    <div className="text-xs text-gray-400">Transactions Processed</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Top Right */}
              <div className="absolute -top-4 -right-4 glass-dark rounded-xl px-4 py-3 animate-float-delayed border border-white/10">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald" />
                  <div>
                    <span className="text-sm font-semibold text-white block">PCI Compliant</span>
                    <span className="text-xs text-gray-400">Fully Secured</span>
                  </div>
                </div>
              </div>

              {/* Rating Badge - Top Left */}
              <div className="absolute top-8 -left-8 glass-dark rounded-xl px-4 py-2.5 animate-float border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber fill-amber" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-white">4.9/5</span>
                </div>
              </div>

              {/* Live indicator */}
              <div className="absolute bottom-8 right-4 flex items-center gap-2 glass-dark rounded-full px-4 py-2 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
                <span className="text-xs text-gray-300 font-medium">1,000+ ATMs Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave/curve */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 46.7C840 53.3 960 66.7 1080 70C1200 73.3 1320 66.7 1380 63.3L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
