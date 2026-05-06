import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuALvdEezTbwND6_pP5YkUIurLJQ7ECQUb2_tkAwa-G9xm8ZC3a3gZe9luHJl4JGPdK60ecZR-OiP1ldOjJgqkJ2B5mjnhECuLxHabgU3jpy3cXu8aFwCQoc9A--dpF1pgj03QCZcDWuayGvPxHX9AhOvAMB5Hm9QKEQZ8gPI6n_buJaUNYBcSf4fAu-qNcENT_wiODtxsp0be0Al5JuPysNhmRBMPsBhTbxqgdgY0Oo_BCctL0pJjz_WASeIKbr06LhtUojuy2pmYk"
          alt="Traditional Indian Sweets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="font-sans text-primary uppercase font-bold tracking-[0.2em] mb-4 block text-sm">
            EST. IN PHAGWARA
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-on-background mb-6 leading-tight font-bold">
            Authentic Taste of Tradition in Every Bite
          </h1>
          <p className="font-sans text-lg text-on-surface-variant mb-10 leading-relaxed max-w-lg">
            Proudly serving the heart of Phagwara since years. We craft artisanal sweets and savory snacks with time-honored recipes and the finest ingredients.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#mithai" className="bg-primary text-on-primary px-10 py-4 font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg active:scale-95 inline-block text-center">
              View Menu
            </a>
            <a href="#about-us" className="border border-secondary text-secondary px-10 py-4 font-bold rounded-lg hover:bg-secondary/5 transition-all active:scale-95 inline-block text-center">
              Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
