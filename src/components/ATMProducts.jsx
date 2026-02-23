import { Star, ShoppingCart, Eye, Flame, Sparkles, ArrowRight, Badge, Zap, Shield, CheckCircle } from 'lucide-react';
import { AnimateOnScroll, StaggerChildren } from '../hooks/useScrollAnimation';

const ATMProducts = () => {
  const hotSellingATMs = [
    {
      id: 1,
      name: "Hyosung Halo II",
      image: "/hero.svg",
      price: "CAD $2,499",
      originalPrice: "CAD $3,199",
      rating: 4.9,
      reviews: 128,
      tag: "🔥 Best Seller",
      tagColor: "bg-rose/10 text-rose border-rose/20",
      features: ["10.1\" Touchscreen", "EMV Compliant", "ADA Compliant", "Wireless Ready"],
      badge: "hot",
      description: "The most popular ATM in Canada. Perfect for retail stores, gas stations, and convenience stores."
    },
    {
      id: 2,
      name: "Triton Argo 12.0",
      image: "/hero.svg",
      price: "CAD $2,899",
      originalPrice: "CAD $3,499",
      rating: 4.8,
      reviews: 96,
      tag: "⚡ New Arrival",
      tagColor: "bg-electric/10 text-electric border-electric/20",
      features: ["12\" HD Display", "NFC Enabled", "Cloud Connected", "Anti-Skimming"],
      badge: "new",
      description: "Next-gen ATM with cutting-edge technology. Features NFC tap-to-withdraw and cloud management."
    },
    {
      id: 3,
      name: "Genmega Onyx W",
      image: "/hero.svg",
      price: "CAD $1,999",
      originalPrice: "CAD $2,599",
      rating: 4.7,
      reviews: 84,
      tag: "💰 Best Value",
      tagColor: "bg-emerald/10 text-emerald border-emerald/20",
      features: ["7\" Touchscreen", "Compact Design", "Low Power", "Easy Maintenance"],
      badge: "value",
      description: "Affordable yet powerful. Ideal for small businesses looking for a reliable ATM solution."
    },
    {
      id: 4,
      name: "Hyosung Force",
      image: "/hero.svg",
      price: "CAD $3,299",
      originalPrice: "CAD $3,999",
      rating: 4.9,
      reviews: 67,
      tag: "🏆 Premium",
      tagColor: "bg-amber/10 text-amber border-amber/20",
      features: ["15\" Full HD", "Biometric Ready", "4,000 Note Cassette", "Remote Management"],
      badge: "premium",
      description: "Enterprise-grade ATM for high-traffic locations. Maximum capacity and premium features."
    }
  ];

  const categories = [
    { name: "All ATMs", active: true },
    { name: "Best Sellers", active: false },
    { name: "New Arrivals", active: false },
    { name: "Budget Friendly", active: false },
    { name: "Premium", active: false }
  ];

  return (
    <section className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-amber/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fadeUp">
          <div className="section-header">
            <div className="badge badge-primary mb-4">
              <Flame size={14} />
              Hot Selling ATMs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Our <span className="gradient-text">Top ATM Machines</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Explore Canada's most trusted ATM machines. From budget-friendly to premium enterprise solutions.
            </p>
            <div className="gradient-divider"></div>
          </div>
        </AnimateOnScroll>

        {/* Category Filters */}
        <AnimateOnScroll animation="fadeUp" delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  cat.active 
                    ? 'btn-primary py-2.5 px-5' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-electric/30 hover:text-electric hover:shadow-md'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotSellingATMs.map((atm, index) => (
            <AnimateOnScroll 
              key={atm.id} 
              animation="flipUp" 
              delay={index * 120}
            >
              <div className="group premium-card overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 overflow-hidden">
                  {/* Tag */}
                  <div className={`absolute top-4 left-4 z-10 text-xs font-semibold px-3 py-1.5 rounded-full border ${atm.tagColor}`}>
                    {atm.tag}
                  </div>
                  
                  {/* Discount badge */}
                  <div className="absolute top-4 right-4 z-10 bg-rose text-white text-xs font-bold px-2 py-1 rounded-lg">
                    SAVE {Math.round((1 - parseFloat(atm.price.replace(/[^0-9.]/g, '')) / parseFloat(atm.originalPrice.replace(/[^0-9.]/g, ''))) * 100)}%
                  </div>

                  {/* Product Image */}
                  <img 
                    src={atm.image} 
                    alt={atm.name}
                    className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark-blue/0 group-hover:bg-dark-blue/5 transition-colors duration-300 flex items-center justify-center">
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <button className="w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center text-electric hover:bg-electric hover:text-white transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center text-electric hover:bg-electric hover:text-white transition-colors">
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3.5 h-3.5 ${i < Math.floor(atm.rating) ? 'text-amber fill-amber' : 'text-gray-200'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-600">{atm.rating}</span>
                    <span className="text-xs text-gray-400">({atm.reviews} reviews)</span>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-dark-blue mb-2 group-hover:text-electric transition-colors">
                    {atm.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-1">
                    {atm.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {atm.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-gray-50 text-gray-500 px-2.5 py-1 rounded-lg border border-gray-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400 line-through block">{atm.originalPrice}</span>
                      <span className="text-xl font-bold text-dark-blue">{atm.price}</span>
                    </div>
                    <button className="btn-primary py-2.5 px-4 text-sm flex items-center gap-1.5">
                      Get Quote
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll animation="fadeUp" delay={200}>
          <div className="mt-16 text-center">
            <div className="premium-card inline-flex flex-col sm:flex-row items-center gap-6 p-8 md:p-10">
              <div className="flex items-center gap-4">
                <div className="icon-box icon-box-lg rounded-2xl bg-gradient-to-br from-electric to-sky-blue">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-dark-blue text-lg">Can't find what you need?</h4>
                  <p className="text-gray-500 text-sm">We offer custom ATM solutions for any business type</p>
                </div>
              </div>
              <button className="btn-primary flex items-center gap-2 whitespace-nowrap">
                Contact Sales
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Trust Row */}
        <AnimateOnScroll animation="fadeIn" delay={300}>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-emerald" />
              <span>All machines PCI compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-electric" />
              <span>Free installation included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-sky-blue" />
              <span>Full warranty coverage</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ATMProducts;
