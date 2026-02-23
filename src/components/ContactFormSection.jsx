import { Phone, Mail, User, MapPin, CheckCircle, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import { AnimateOnScroll } from '../hooks/useScrollAnimation';

const ContactFormSection = () => {
  return (
    <section id="contact" className="section-padding bg-mesh relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fadeUp">
          <div className="section-header">
            <div className="badge badge-primary mb-4">
              <Sparkles size={14} />
              Get Started Today
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to <span className="gradient-text">Grow Your Business?</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Fill out the form and our team will reach out within 24 hours with a customized ATM solution for your business.
            </p>
            <div className="gradient-divider"></div>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - Contact Form */}
          <AnimateOnScroll animation="fadeLeft" delay={100}>
            <div className="premium-card p-8 md:p-10 relative overflow-hidden">
              {/* Card accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric via-sky-blue to-cyan"></div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-dark-blue mb-2">Get in Touch</h3>
                <p className="text-gray-500">
                  Fill out the form below and our team will contact you shortly.
                </p>
              </div>
              
              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                    <User size={16} className="text-electric" /> Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="input-modern"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                    <Mail size={16} className="text-electric" /> Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="input-modern"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                    <Phone size={16} className="text-electric" /> Contact Number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+1 234 567 8900" 
                    className="input-modern"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                    <MapPin size={16} className="text-electric" /> Business Location
                  </label>
                  <input 
                    type="text" 
                    placeholder="City, Province" 
                    className="input-modern"
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full mt-2 flex items-center justify-center gap-2 py-4">
                  Submit Request
                  <ArrowRight size={18} />
                </button>
              </form>

              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Zap className="w-4 h-4 text-electric" />
                    Quick Response
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Shield className="w-4 h-4 text-emerald" />
                    100% Secure
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-sky-blue" />
                    Free Consultation
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          
          {/* Right - Free Placement Program */}
          <div className="space-y-6">
            {/* Main info card */}
            <AnimateOnScroll animation="fadeRight" delay={200}>
              <div className="premium-card-dark p-8 md:p-10 relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-electric/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="badge-light mb-6 inline-flex items-center gap-2">
                    <Sparkles size={14} />
                    Most Popular Program
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Free ATM Placement Program
                  </h3>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Want to enhance your store's customer experience without spending anything upfront?
                    Our Free ATM Placement Program is designed for shop owners who want to attract more 
                    customers and earn extra income.
                  </p>
                  
                  <h4 className="font-semibold text-white mb-5 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-gradient-to-r from-electric to-sky-blue rounded-full"></span>
                    What you get
                  </h4>
                  
                  <ul className="space-y-3.5 mb-8">
                    {[
                      "No installation or equipment cost",
                      "Transparent service – no surprise charges",
                      "Expert on-site installation",
                      "Complete maintenance and support",
                      "Live system monitoring",
                      "24/7 customer support"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald" />
                        </div>
                        <span className="text-gray-300 text-[0.95rem]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-bold text-white">MHEnterprise</span> manages everything — 
                      installation, operations, and servicing. You benefit from increased foot traffic 
                      and earn through <span className="font-semibold text-sky-blue">revenue sharing</span>.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Contact info cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (555) 123-4567", color: "text-electric" },
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@mhenterprise.ca", color: "text-sky-blue" },
                { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Canada", color: "text-emerald" }
              ].map((item, index) => (
                <AnimateOnScroll key={index} animation="fadeUp" delay={300 + index * 100}>
                  <div className="premium-card p-5 text-center hover-lift">
                    <div className={`icon-box icon-box-md rounded-xl bg-gray-50 mx-auto mb-3 ${item.color}`}>
                      {item.icon}
                    </div>
                    <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                    <p className="font-semibold text-dark-blue text-sm">{item.value}</p>
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

export default ContactFormSection;
