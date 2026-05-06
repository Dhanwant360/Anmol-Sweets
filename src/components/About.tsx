import { CheckCircle2, Users, Zap, UtensilsCrossed } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about-us" className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbN0dzUTj9y3Ug94Yxze8vwdI_J_157M3CG5RJu84TDwQ_6DOnhtoCt08PAulgJ2QcnDlGrlvl1QD1YQtO6GKhh7TcBOfiJ60oRJPeGgQr9PjpZLDB6wO6hIUUzAnZOp-AaHVANgxwIGX2lwN_zI0nPZdJ0Gl557o0Mvanzevm2CGSYrI_Q7G55NBh4C89Q-LSwP0-MBoOAx55vCzqoW4Z5n83KsBMUcwyLCVEniqG71XZocFNnz5gGQteCxbiph6zIjPMli8cg1E"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-primary p-4 md:p-8 rounded-2xl shadow-xl flex items-center justify-center">
            <div className="text-on-primary text-center">
              <span className="block font-serif text-4xl md:text-5xl leading-none font-bold mb-1 md:mb-2">25+</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-90">Years of Heritage</span>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl text-on-background font-bold mb-6 italic">A Legacy of Quality in Hadiabad</h2>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>
          
          <p className="text-xl text-on-surface-variant mb-6 italic leading-relaxed border-l-4 border-primary/20 pl-6">
            "We believe that hospitality is the soul of Punjabi culture, and every sweet we serve is a piece of that heritage."
          </p>
          
          <p className="text-on-surface mb-10 leading-relaxed text-lg">
            Located on Phagwara - Jandiala Road near Chana Footwear, Anmol Sweet Shop has become a local landmark for food lovers. Our commitment to uncompromising quality, fast service, and a warm, family-friendly atmosphere makes every visit a celebration.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <CheckCircle2 size={24} className="text-primary group-hover:text-inherit" />
              </div>
              <span className="font-bold text-sm tracking-wide">Pure Ingredients</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <Users size={24} className="text-primary group-hover:text-inherit" />
              </div>
              <span className="font-bold text-sm tracking-wide">Family Friendly</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <Zap size={24} className="text-primary group-hover:text-inherit" />
              </div>
              <span className="font-bold text-sm tracking-wide">Fast Service</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <UtensilsCrossed size={24} className="text-primary group-hover:text-inherit" />
              </div>
              <span className="font-bold text-sm tracking-wide">Artisanal Recipes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
