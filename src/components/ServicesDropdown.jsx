import { useState, useRef, useEffect } from 'react';
import { 
  MapPin, 
  CreditCard, 
  LayoutGrid, 
  DollarSign,
  Wrench,
  RefreshCw,
  Package,
  Radio,
  Target,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    {
      category: "Placement Solutions",
      items: [
        { name: "Placement Opportunities", icon: <MapPin size={18} />, description: "Find the perfect spot for your ATM" },
        { name: "Placement Modes", icon: <LayoutGrid size={18} />, description: "Flexible installation options" },
        { name: "Free Placement Program", icon: <Package size={18} />, description: "Zero cost, maximum returns" }
      ]
    },
    {
      category: "Financial Options",
      items: [
        { name: "Purchase Options", icon: <CreditCard size={18} />, description: "Own your ATM machine" },
        { name: "Cash Management", icon: <DollarSign size={18} />, description: "Efficient cash handling" },
        { name: "Transaction Processing", icon: <RefreshCw size={18} />, description: "Seamless processing" }
      ]
    },
    {
      category: "Support Services",
      items: [
        { name: "Maintenance", icon: <Wrench size={18} />, description: "24/7 technical support" },
        { name: "Equipment and Supplies", icon: <Package size={18} />, description: "Genuine parts & supplies" },
        { name: "Telecommunications", icon: <Radio size={18} />, description: "Secure connectivity" }
      ]
    },
    {
      category: "Marketing",
      items: [
        { name: "Target Marketing", icon: <Target size={18} />, description: "Reach the right audience" }
      ]
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-dark-blue font-medium transition-all duration-300 rounded-lg hover:bg-gray-50 group"
      >
        Services
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-gray-400 group-hover:text-electric`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-white rounded-2xl shadow-2xl shadow-black/[0.08] border border-gray-100 p-6 animate-slideDown z-50">
          {/* Arrow */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
          
          <div className="grid grid-cols-2 gap-6 relative z-10">
            {services.map((category, idx) => (
              <div key={idx} className="space-y-3">
                {/* Category Header */}
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-4 h-px bg-gradient-to-r from-electric to-sky-blue rounded-full"></span>
                  {category.category}
                </h3>
                
                {/* Category Items */}
                <div className="space-y-1">
                  {category.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group/item"
                      onClick={() => setIsOpen(false)}
                    >
                      {/* Icon */}
                      <div className="p-2 bg-electric/5 rounded-lg text-electric group-hover/item:bg-electric group-hover/item:text-white transition-all duration-200 flex-shrink-0">
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-800 group-hover/item:text-electric transition-colors text-sm">
                          {item.name}
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions Footer */}
          <div className="mt-6 pt-5 border-t border-gray-100 flex justify-between items-center">
            <div className="flex gap-2">
              <span className="badge badge-primary text-xs">
                500+ Locations
              </span>
              <span className="badge badge-success text-xs">
                24/7 Support
              </span>
            </div>
            <a 
              href="#" 
              className="text-sm text-electric hover:text-dark-blue font-semibold flex items-center gap-1.5 group transition-colors"
              onClick={() => setIsOpen(false)}
            >
              View All Services
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
