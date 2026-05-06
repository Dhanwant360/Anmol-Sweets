import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    let message = "Hello Anmol Sweets! I would like to place an order:\n\n";
    cartItems.forEach(item => {
      message += `- ${item.name} (${item.quantity}x)\n`;
    });
    message += `\nEstimated Total: ₹${cartTotal}\n\nPlease confirm my order.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/916284037360?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-surface shadow-2xl z-[100] flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-outline-variant/30">
              <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-2">
                <ShoppingBag />
                Your Order
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-on-surface-variant hover:text-error hover:bg-error/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-on-surface-variant">
                  <ShoppingBag size={64} className="opacity-20 mb-4" />
                  <p className="text-lg">Your cart is empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-primary font-medium hover:underline"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30">
                    <div className="flex-1">
                      <h4 className="font-bold text-on-background">{item.name}</h4>
                      <p className="text-sm font-medium text-primary">{item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-surface rounded-full border border-outline-variant/50 p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-error/10 hover:text-error rounded-full transition-colors"
                      >
                        {item.quantity === 1 ? <Trash2 size={16} /> : <Minus size={16} />}
                      </button>
                      <span className="w-4 text-center font-bold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-primary/10 hover:text-primary rounded-full transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-on-surface-variant font-medium">Estimated Total</span>
                  <span className="text-2xl font-bold text-primary">₹{cartTotal}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-[0.98] flex justify-center items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Order on WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
