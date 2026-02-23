import { Phone, Mail, User, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const ContactFormSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left - Contact Form */}
        <div className="clay-card p-8 hover-lift">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sky-blue/10 flex items-center justify-center">
              <User className="w-5 h-5 text-sky-blue" />
            </div>
            <h2 className="text-3xl font-bold text-dark-blue">Get in Touch</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Ready to transform your business? Fill out the form below and our team will contact you shortly.
          </p>
          
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <User size={18} className="text-sky-blue" /> Full Name
              </label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="clay-input"
              />
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Mail size={18} className="text-sky-blue" /> Email Address
              </label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="clay-input"
              />
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Phone size={18} className="text-sky-blue" /> Contact Number
              </label>
              <input 
                type="tel" 
                placeholder="+1 234 567 8900" 
                className="clay-input"
              />
            </div>
            
            <button type="submit" className="clay-button w-full mt-4 flex items-center justify-center gap-2">
              Submit Request <ArrowRight size={18} />
            </button>
          </form>

          {/* Trust badges */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Quick Response
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free Consultation
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No Obligation
              </div>
            </div>
          </div>
        </div>
        
        {/* Right - Free Placement Program */}
        <div className="space-y-6">
          <div className="clay-card p-8 hover-lift relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-blue/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-blue flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">
                Free ATM Placement
              </h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Want to enhance your store's customer experience without spending a single rupee upfront?
              Our <span className="font-semibold text-dark-blue">Free ATM Placement Program</span> is 
              specially designed for shop owners and retailers who want to attract more customers and 
              earn extra passive income.
            </p>
            
            <h3 className="font-bold text-xl mb-4 text-dark-blue">What you get with MHEnterprise:</h3>
            
            <ul className="space-y-3 mb-6">
              {[
                "No installation or equipment cost",
                "Transparent service – no surprise charges",
                "Expert on-site installation by our technical team",
                "Complete maintenance and technical support",
                "Live system monitoring for better reliability",
                "24/7 customer and merchant support"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-gradient-to-r from-sky-blue/10 to-dark-blue/10 p-5 rounded-2xl">
              <p className="text-gray-700">
                From installation to daily operations and servicing —{' '}
                <span className="font-bold text-dark-blue">MHEnterprise</span> manages everything for you.
                You simply benefit from increased foot traffic and earn through{' '}
                <span className="font-semibold text-sky-blue">surcharge revenue sharing</span>.
              </p>
            </div>
          </div>

          {/* Contact info card */}
          <div className="clay-card p-6 hover-lift">
            <h3 className="font-bold text-lg text-dark-blue mb-4">Other Ways to Reach Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-blue/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-sky-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-dark-blue">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-blue/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-sky-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-dark-blue">info@mhenterprise.ca</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-blue/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-sky-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-dark-blue">Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
