import { 
  Users, 
  TrendingUp, 
  Wifi, 
  Shield, 
  Headphones, 
  FileText,
  CheckCircle
} from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-sky-blue" />,
      title: "Increase Customer Footfall",
      description: "An on-site ATM encourages walk-in customers and keeps them in your store longer."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-sky-blue" />,
      title: "Generate Passive Income",
      description: "Earn a share of surcharge revenue on every successful cash withdrawal."
    },
    {
      icon: <Wifi className="w-8 h-8 text-sky-blue" />,
      title: "Complete Hands-Free Service",
      description: "We take care of installation, cash management, monitoring, and maintenance."
    },
    {
      icon: <Shield className="w-8 h-8 text-sky-blue" />,
      title: "Secure & Highly Reliable Network",
      description: "Our systems follow industry security standards and operate in compliance with Interac."
    },
    {
      icon: <Headphones className="w-8 h-8 text-sky-blue" />,
      title: "24/7 Technical & Customer Support",
      description: "Any issue is handled quickly by our support and technical teams, day or night."
    },
    {
      icon: <FileText className="w-8 h-8 text-sky-blue" />,
      title: "Fast & Paperless Onboarding",
      description: "Simple digital signup with no complicated paperwork or delays."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Image */}
        <div className="relative order-2 md:order-1">
          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-sky-blue/20 rounded-full blur-3xl -z-10 animate-float"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-dark-blue/20 rounded-full blur-3xl -z-10 animate-float-delayed"></div>
          
          <div className="clay-card p-2 hover-lift">
            <img 
              src="why_chose.png" 
              alt="MHEnterprise ATM Terminal" 
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Floating badges */}
          <div className="absolute -bottom-4 -right-4 clay-card px-4 py-3 animate-float-slow">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-dark-blue">Verified</span>
            </div>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="space-y-8 order-1 md:order-2">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose an{' '}
              <span className="gradient-text">MHEnterprise ATM Terminal?</span>
            </h2>
            
            <p className="text-xl text-gray-600">
              Bring more value, more customers, and more revenue to your store with MHEnterprise.
            </p>
          </div>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="clay-card p-5 hover-lift cursor-pointer group"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 p-3 bg-sky-blue/10 rounded-2xl group-hover:bg-sky-blue/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-dark-blue mb-1 group-hover:text-sky-blue transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
