import { Users, DollarSign, Building, Globe } from 'lucide-react';

const NetworkStats = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      value: "500+",
      label: "Active Merchants",
      description: "Businesses trusting us across Canada",
      color: "from-sky-blue to-sky-600"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      value: "$100M+",
      label: "Transactions Processed",
      description: "Secure cash withdrawals handled",
      color: "from-dark-blue to-blue-700"
    },
    {
      icon: <Building className="w-8 h-8 text-white" />,
      value: "1,000+",
      label: "ATM Locations",
      description: "Growing network across provinces",
      color: "from-sky-500 to-sky-700"
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable network performance",
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="clay-card p-8 md:p-12 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-blue/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-dark-blue/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Network in <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            With <span className="font-semibold text-dark-blue">MHEnterprise</span>, you get a trusted ATM solution 
            designed to grow your business — safely, smoothly, and profitably.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="clay-card p-6 text-center hover-lift group cursor-default"
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} 
                              flex items-center justify-center shadow-lg
                              group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-dark-blue mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-sky-blue mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-gray-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Join hundreds of successful merchants who have transformed their business with MHEnterprise
          </p>
          <button className="clay-button">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default NetworkStats;
