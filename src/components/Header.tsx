import { ShoppingBag, MapPin, Phone, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, setIsCartOpen } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

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
              className="text-sm font-semibold tracking-wide transition-colors hover:text-primary text-on-surface-variant hover:border-b-2 hover:border-primary pb-1"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden lg:flex items-center gap-2 text-primary font-bold">
            <Phone size={18} />
            <span>0182 427 6972</span>
          </div>
          <div className="flex gap-2 lg:gap-4 items-center">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-on-surface hover:bg-primary/5 rounded-full transition-all"
            >
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <a 
              href="#location"
              className="hidden md:block p-2 text-on-surface hover:bg-primary/5 rounded-full transition-all"
            >
              <MapPin size={22} />
            </a>
            <button 
              className="md:hidden p-2 text-on-surface hover:bg-primary/5 rounded-full transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full border-t border-primary/10 bg-surface shadow-xl overflow-hidden z-40"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {['Mithai', 'Snacks', 'Breakfast', 'About Us'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-on-surface-variant hover:text-primary transition-colors py-2"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-2 text-primary font-bold pt-4 border-t border-primary/10">
                <Phone size={18} />
                <span>0182 427 6972</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
