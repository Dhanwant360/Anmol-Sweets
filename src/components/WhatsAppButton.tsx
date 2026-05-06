import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-[60]"
    >
      <a 
        href="https://wa.me/911824276972" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] hover:scale-105 transition-all active:scale-95 font-bold group"
      >
        <MessageCircle size={24} className="fill-white group-hover:rotate-12 transition-transform" />
        <span className="tracking-wide">Order on WhatsApp</span>
      </a>
    </motion.div>
  );
}
