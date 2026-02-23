import { Phone, Mail, User, MapPin, CheckCircle } from 'lucide-react';

const ContactFormSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-gray-50">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left - Contact Form */}
        <div className="flat-card p-8 hover-scale">
          <h2 className="text-3xl font-bold text-dark-blue mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below and our team will contact you shortly.
          </p>
          
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <User size={18} className="text-sky-blue" /> Full Name
              </label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="flat-input"
              />
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Mail size={18} className="text-sky-blue" /> Email Address
              </label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="flat-input"
              />
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-700 font-medium">
                <Phone size={18} className="text-sky-blue" /> Contact Number
              </label>
              <input 
                type="tel" 
                placeholder="+1 234 567 8900" 
                className="flat-input"
              />
            </div>
            
            <button type="submit" className="flat-button w-full mt-4">
              Submit Request
            </button>
          </form>

          {/* Trust badges */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Quick Response
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free Consultation
              </div>
            </div>
          </div>
        </div>
        
        {/* Right - Free Placement Program */}
        <div className="space-y-6">
          <div className="flat-card p-8">
            <h2 className="text-3xl font-bold text-dark-blue mb-4">
              Free ATM Placement Program
            </h2>
            
            <p className="text-gray-600 mb-6">
              Want to enhance your store's customer experience without spending anything upfront?
              Our <span className="font-semibold text-dark-blue">Free ATM Placement Program</span> is 
              designed for shop owners who want to attract more customers and earn extra income.
            </p>
            
            <h3 className="font-bold text-xl mb-4 text-dark-blue">What you get:</h3>
            
            <ul className="space-y-3 mb-6">
              {[
                "No installation or equipment cost",
                "Transparent service – no surprise charges",
                "Expert on-site installation",
                "Complete maintenance and support",
                "Live system monitoring",
                "24/7 customer support"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-blue flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700">
                <span className="font-bold text-dark-blue">MHEnterprise</span> manages everything — 
                installation, operations, and servicing. You benefit from increased foot traffic 
                and earn through <span className="font-semibold text-sky-blue">revenue sharing</span>.
              </p>
            </div>
          </div>

          {/* Contact info card */}
          <div className="flat-card p-6">
            <h3 className="font-bold text-lg text-dark-blue mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-sky-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-dark-blue">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-sky-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-dark-blue">info@mhenterprise.ca</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
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
