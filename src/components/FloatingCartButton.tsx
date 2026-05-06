import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function FloatingCartButton() {
  const { cartItems, setIsCartOpen, isCartOpen } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <AnimatePresence>
      {totalItems > 0 && !isCartOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-8 z-[60]"
        >
          <button 
            onClick={() => setIsCartOpen(true)}
            className="bg-primary text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-[0_10px_25px_-5px_rgba(217,119,6,0.4)] hover:scale-105 transition-all active:scale-95 font-bold group"
          >
            <div className="relative">
              <ShoppingBag size={24} className="group-hover:-translate-y-1 transition-transform" />
              <span className="absolute -top-2 -right-2 bg-white text-primary text-[11px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                {totalItems}
              </span>
            </div>
            <span className="tracking-wide ml-1">View Cart</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
