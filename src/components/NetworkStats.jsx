import { Users, DollarSign, Building, Globe } from 'lucide-react';

const NetworkStats = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Active Merchants",
      description: "Businesses trusting us across Canada",
      color: "bg-sky-blue"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "$100M+",
      label: "Transactions Processed",
      description: "Secure cash withdrawals handled",
      color: "bg-dark-blue"
    },
    {
      icon: <Building className="w-8 h-8" />,
      value: "1,000+",
      label: "ATM Locations",
      description: "Growing network across provinces",
      color: "bg-sky-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable network performance",
      color: "bg-blue-600"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flat-card p-8 md:p-12">
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
              className="flat-card p-6 text-center hover-scale cursor-default"
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl ${stat.color} 
                              flex items-center justify-center`}>
                <span className="text-white">{stat.icon}</span>
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
            Join hundreds of successful merchants with MHEnterprise
          </p>
          <button className="flat-button">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default NetworkStats;
