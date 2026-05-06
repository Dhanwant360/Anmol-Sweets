import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-2xl font-serif font-bold text-white mb-2 tracking-tight">Anmol Sweet Shop</div>
            <p className="text-stone-400 italic max-w-xs leading-relaxed">
              Traditional Hospitality, Contemporary Luxury. Proudly serving Phagwara.
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {['Mithai Menu', 'Catering', 'Our Story', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className={`text-sm font-semibold hover:text-white transition-colors ${
                  link === 'Contact' ? 'text-primary underline underline-offset-8' : ''
                }`}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="mt-16 pt-8 border-t border-stone-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-stone-500 uppercase tracking-widest">
          <p>© 2024 Anmol Sweet Shop. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
