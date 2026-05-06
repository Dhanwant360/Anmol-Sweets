import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    text: "Great selection of sweet and savoury treats. Their Samosas are legendary and the Gulab Jamuns are out of this world. Highly recommended!",
    author: "Local Food Critic",
    stars: 5,
  },
  {
    text: "Very good service and sweets taste. It's our go-to place for all festivals and family gatherings. The staff is always welcoming.",
    author: "Regular Customer",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl text-center mb-16 font-bold">Customer Love</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-surface-container p-12 rounded-3xl relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-8 text-primary/10 w-24 h-24" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={20} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-xl text-on-surface italic mb-8 relative z-10 leading-relaxed">"{t.text}"</p>
              <p className="font-bold text-primary tracking-wide">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
