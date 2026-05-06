import { ShoppingBag, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="bg-surface/95 backdrop-blur-md sticky top-0 z-50 border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold text-primary tracking-tight"
        >
          Anmol Sweet Shop
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {['Mithai', 'Snacks', 'Breakfast', 'About Us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                item === 'Mithai' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 text-primary font-bold">
            <Phone size={18} />
            <span>0182 427 6972</span>
          </div>
          <div className="flex gap-4">
            <button className="p-2 text-on-surface hover:bg-primary/5 rounded-full transition-all">
              <ShoppingBag size={22} />
            </button>
            <button className="p-2 text-on-surface hover:bg-primary/5 rounded-full transition-all">
              <MapPin size={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
