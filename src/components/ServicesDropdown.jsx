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
  ChevronDown
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
        className="flex items-center gap-1 text-gray-700 hover:text-sky-blue font-medium transition-colors group"
      >
        Services
        <ChevronDown 
          size={18} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} group-hover:text-sky-blue`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[700px] bg-white rounded-2xl clay-card p-6 animate-slideDown z-50">
          <div className="grid grid-cols-2 gap-6">
            {services.map((category, idx) => (
              <div key={idx} className="space-y-3">
                {/* Category Header */}
                <h3 className="text-sm font-semibold text-dark-blue uppercase tracking-wider border-b border-sky-blue/20 pb-2">
                  {category.category}
                </h3>
                
                {/* Category Items */}
                <div className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href="#"
                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-sky-blue/5 transition-all group/item"
                      onClick={() => setIsOpen(false)}
                    >
                      {/* Icon */}
                      <div className="p-2 bg-sky-blue/10 rounded-lg text-sky-blue group-hover/item:bg-sky-blue group-hover/item:text-white transition-colors">
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <div>
                        <div className="font-medium text-gray-900 group-hover/item:text-sky-blue transition-colors">
                          {item.name}
                        </div>
                        <p className="text-xs text-gray-500">
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
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
            <div className="flex gap-3">
              <span className="text-xs bg-sky-blue/10 text-sky-blue px-3 py-1 rounded-full">
                500+ Locations
              </span>
              <span className="text-xs bg-dark-blue/10 text-dark-blue px-3 py-1 rounded-full">
                24/7 Support
              </span>
            </div>
            <a 
              href="#" 
              className="text-sm text-sky-blue hover:text-dark-blue font-medium flex items-center gap-1 group"
              onClick={() => setIsOpen(false)}
            >
              View All Services
              <ChevronDown size={16} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;