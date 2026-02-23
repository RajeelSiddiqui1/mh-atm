import { Users, DollarSign, Building, Globe, ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '../hooks/useScrollAnimation';

const NetworkStats = () => {
  const stats = [
    {
      icon: <Users className="w-7 h-7" />,
      value: "500+",
      label: "Active Merchants",
      description: "Businesses trusting us across Canada",
      gradient: "from-electric to-purple-500"
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      value: "$100M+",
      label: "Transactions Processed",
      description: "Secure cash withdrawals handled",
      gradient: "from-sky-blue to-cyan"
    },
    {
      icon: <Building className="w-7 h-7" />,
      value: "1,000+",
      label: "ATM Locations",
      description: "Growing network across provinces",
      gradient: "from-emerald to-teal-400"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable network performance",
      gradient: "from-amber to-orange-400"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="bg-gradient-dark relative py-24 md:py-32">
        {/* Decorative elements */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-blue/30 to-transparent"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-[5%] w-64 h-64 bg-electric/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-sky-blue/5 rounded-full blur-3xl"></div>
        
        <div className="section-container relative z-10">
          {/* Header */}
          <AnimateOnScroll animation="fadeUp">
            <div className="text-center mb-16">
              <div className="badge-light mb-4 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
                Live Network Stats
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white leading-tight">
                Our Network in <span className="gradient-text">Numbers</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                With <span className="font-semibold text-white">MHEnterprise</span>, you get a trusted ATM solution 
                designed to grow your business — safely, smoothly, and profitably.
              </p>
            </div>
          </AnimateOnScroll>
          
          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="scaleUp" 
                delay={index * 120}
              >
                <div className="group relative">
                  <div className="glass-dark rounded-2xl p-8 text-center border border-white/5 hover:border-white/15 transition-all duration-500 hover:-translate-y-2">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} 
                                    flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white">{stat.icon}</span>
                    </div>
                    
                    {/* Value */}
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <div className="text-base font-semibold text-gray-300 mb-2">
                      {stat.label}
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-500">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* CTA Section */}
          <AnimateOnScroll animation="fadeUp" delay={300}>
            <div className="mt-16 text-center">
              <div className="glass-dark inline-flex flex-col sm:flex-row items-center gap-6 rounded-2xl px-10 py-8 border border-white/5">
                <p className="text-gray-300 text-lg">
                  Join hundreds of successful merchants with <span className="text-white font-semibold">MHEnterprise</span>
                </p>
                <button className="btn-primary flex items-center gap-2 whitespace-nowrap">
                  Start Your Journey
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default NetworkStats;
