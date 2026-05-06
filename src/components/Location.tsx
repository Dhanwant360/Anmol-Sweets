import { MapPin, Clock, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-surface-container-highest">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-outline-variant"
        >
          <div className="lg:w-1/2 h-[450px] lg:h-auto overflow-hidden relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAZxrVEPkKQ-KASeC30aR8VekpaqcIngebFXYUF9qyO6Y61jv5sxhup5Khw7duCf9eO1K6Mh3Q6ru7h_IkfHYhKZ3PFvXdcMumu6Zx_BRyLpJjbgGvpWyaNxB64pHeWzrZ3KsVDRjD-voyc6yj0r-sXQDol0JG5eqhHkjSMprDkoXKWincpTCZWEL84C7sUARY3muCo-Xdp-eaIHwxlP1FxYWG8ZTkpkGeUsg3-SRr2QaGwk1GiXRegLkNjqPS2H0UNmqKgCsu6bc"
              alt="Map Location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary p-4 rounded-full shadow-2xl animate-bounce">
                <MapPin className="text-white" size={32} />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold shadow-sm">
                Phagwara, Punjab
            </div>
          </div>
          
          <div className="lg:w-1/2 p-16 flex flex-col justify-center">
            <h2 className="font-serif text-5xl text-primary mb-8 font-bold leading-tight">Find Us</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-primary/5 rounded-full mt-1">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Address</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Phagwara - Jandiala Rd, Hadiabad,<br />
                    Phagwara, Punjab 144401
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="p-3 bg-primary/5 rounded-full mt-1">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                  <p className="text-on-surface-variant">
                    Monday - Sunday: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <a href="https://maps.google.com/?q=Anmol+Sweet+Shop+Phagwara" target="_blank" rel="noopener noreferrer" className="bg-secondary text-on-secondary px-8 py-5 rounded-full flex items-center gap-3 hover:bg-secondary/90 transition-all active:scale-95 w-fit font-bold shadow-lg hover:shadow-secondary/20">
              <Navigation size={20} />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
