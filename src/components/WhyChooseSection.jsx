import { 
  Users, 
  TrendingUp, 
  Wifi, 
  Shield, 
  Headphones, 
  FileText,
  CheckCircle,
  Award
} from 'lucide-react';
import { AnimateOnScroll } from '../hooks/useScrollAnimation';

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Increase Customer Footfall",
      description: "An on-site ATM encourages walk-in customers and keeps them in your store longer.",
      iconColor: "text-electric bg-electric/10",
      accent: "bg-electric"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Generate Passive Income",
      description: "Earn a share of surcharge revenue on every successful cash withdrawal.",
      iconColor: "text-emerald bg-emerald/10",
      accent: "bg-emerald"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Complete Hands-Free Service",
      description: "We take care of installation, cash management, monitoring, and maintenance.",
      iconColor: "text-sky-blue bg-sky-blue/10",
      accent: "bg-sky-blue"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable Network",
      description: "Our systems follow industry security standards and operate in compliance with Interac.",
      iconColor: "text-amber bg-amber/10",
      accent: "bg-amber"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Technical Support",
      description: "Any issue is handled quickly by our support and technical teams, day or night.",
      iconColor: "text-rose bg-rose/10",
      accent: "bg-rose"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Fast & Paperless Onboarding",
      description: "Simple digital signup with no complicated paperwork or delays.",
      iconColor: "text-cyan bg-cyan/10",
      accent: "bg-cyan"
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Image */}
          <AnimateOnScroll animation="fadeLeft" className="relative order-2 lg:order-1">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric/10 to-sky-blue/10 rounded-3xl blur-3xl scale-90"></div>
            
            <div className="relative">
              {/* Main image */}
              <div className="premium-card p-3 hover-lift">
                <img 
                  src="why_chose.png" 
                  alt="MHEnterprise ATM Terminal" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-5 -right-5 premium-card px-5 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="icon-box icon-box-sm rounded-lg bg-emerald/10">
                    <CheckCircle className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-dark-blue block">Verified Partner</span>
                    <span className="text-xs text-gray-400">Interac Certified</span>
                  </div>
                </div>
              </div>

              {/* Award Badge */}
              <div className="absolute -top-4 -left-4 premium-card px-4 py-2.5 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber" />
                  <span className="text-sm font-semibold text-dark-blue">#1 in Canada</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          
          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <AnimateOnScroll animation="fadeRight">
              <div>
                <div className="badge badge-primary mb-4">
                  <Award size={14} />
                  Why Choose Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                  Why Choose an{' '}
                  <span className="gradient-text">MHEnterprise ATM?</span>
                </h2>
                
                <p className="text-lg text-gray-500 leading-relaxed">
                  Bring more value, more customers, and more revenue to your store with Canada's most trusted ATM partner.
                </p>
              </div>
            </AnimateOnScroll>
            
            {/* Feature cards - 2 column grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <AnimateOnScroll 
                  key={index} 
                  animation="scaleIn" 
                  delay={index * 80}
                >
                  <div className="group premium-card p-5 cursor-default relative overflow-hidden h-full">
                    {/* Accent line */}
                    <div className={`absolute top-0 left-0 w-full h-0.5 ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <div className={`icon-box icon-box-md rounded-xl ${feature.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-dark-blue mb-2 text-[0.95rem]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
