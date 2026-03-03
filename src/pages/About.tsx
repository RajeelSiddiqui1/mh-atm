import { Phone, Mail, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import hyosungImage from "@/assets/Nautilus-Hyosung-Force.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
 

      {/* ─── Hero Section ─── */}
      <section className="pt-[105px] pb-20 bg-gradient-to-r from-green-dark to-primary">
        <div className="container mt-5">
          <div className="text-center">
            <h1 className="font-heading p-4 font-black text-4xl md:text-6xl text-primary-foreground mb-4">About Us</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Learn more about MH ATM and our commitment to providing secure, reliable ATM services in Ontario.</p>
          </div>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Content */}
            <div>
              <p className="text-primary my-3 font-heading font-semibold text-sm tracking-widest uppercase mb-2">OVER 15 YEARS OF EXPERIENCE</p>
              <h2 className="font-heading mt-5 font-bold text-3xl md:text-4xl text-foreground mb-6">We have been a leader in ATM private-label industry since 2007</h2>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  We offer a commitment to providing secure, reliable Triton automated teller machines backed by dedicated technical support and customer service representatives.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  An ATM (Automated Teller Machine) can be added to your small business to ensure timely payment processing once you have decided what is best for your operations.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  ATM machines have marked their place in our lives. They are now located everywhere around the world, giving you easy access to your money. These revolutionary devices have changed the way we perceive money; they have also changed the way we now run businesses.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  ATM machines work great in gas stations, liquor stores, convenience stores and fast food restaurants since these are places where people need to carry out smaller transactions. Bars, hotels, entertainment complexes are also businesses that can make a profit out of offering ATM services.
                </p>
                
            
              </div>
            </div>

            {/* Right - Image */}
           <div className="relative flex items-center justify-center">
  <img 
    src={hyosungImage} 
    alt="Nautilus Hyosung Force ATM" 
    className="w-100 h-100 object-cover object-center"
  />

  
</div>
          </div>
        </div>
      </section>


  

      {/* ─── Footer ─── */}
     
    </div>
  );
};

export default About;
