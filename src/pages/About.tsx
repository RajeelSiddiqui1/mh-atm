import hyosungImage from "@/assets/Nautilus-Hyosung-Force.png";

const About = () => {
  return (
 <div className="mt-[105px]">
 

      {/* ─── Hero Section ─── */}

            <section className="relative py-24 bg-gradient-to-br from-foreground to-muted overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="container relative z-10 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-background mb-4">ABOUT US</h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-background/80 text-lg max-w-2xl mx-auto">
            Learn more about MH ATM and our commitment to providing secure, reliable ATM services in Ontario.
          </p>
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
