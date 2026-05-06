import { motion } from 'motion/react';

const specialties = [
  {
    title: "Premium Mithai",
    description: "Pure Desi Ghee sweets and seasonal specialties crafted daily by our master Halwais.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiWAIvYPou-Kv0pywTxCOSwaDPo2StkdtipoRiZvrW-lC-XQuoK55VEfoEe5kJZb0jnd5URbnVQphwDfA0L7K5ICRH5BF12bMzQPo4tESF3vypp_tbOT8dhktIP187gG9kwaxam4Bnzhub6wHDXuV69P_VxamUQgrh0diWVqBTF92MF6XD0KMcURwFLmXoActzKgT6o5OhA9sR7nLNH7Mw8F1c51JtmAzyA_iPb2momBUZ3EBQ9oq7S_RRMWBV6GbSS4Da3uEE0II",
  },
  {
    title: "Hot Snacks",
    description: "Famous Samosas and Crispy Pakoras, perfectly spiced and served piping hot for your cravings.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7CMGQwiEM3qpW1M9uegO_1jr4gfkHwimrU6ppKaYrPnce5T-EAV36b9JouQcAhmZX83KPXsv897YyMj8B9TxEZWb6lyvJ0UzMKN9Umf3VIuWUmOMOGiImnRLWe34CcDaBqx4WRBC6_dNJ_PNrwzG616SkNSw7-STulNSbz1dkCdtEdcbkjSKTY6bnL7oj2cr7m4qIpjBdid3nBfnXqS6_WT_-vyjS3DnsgKK9FmjjCZgN2B4Awbs_0Bakl6QDommoOEhbMozbVzk",
  },
  {
    title: "Breakfast Special",
    description: "Our signature Cholle Poori—the ultimate Punjabi breakfast experience to start your day right.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1EsgKwsMNZcyEcQXtA6GcCHjZLVUZ8-YzMiQn2ekrjMX4lA2lH_UuFcCm_98lQwfYIDnGBpc5uaInDcsHWGc0hYembdNYmAXKhsjLosMe_IN0Lg4JeWLvtmmWTGkaHFQB2NzPzPnlJiek8Q8IlgRicArNxujTD1RywzZjcljRtGU7n1UZBKc9QEADiwfyRG6-cjr3XQm89gWAX6v0ZwHx3q_Xx07yMJ7RCgnS8uaKvmD180nrAuD6Pi9oamJDEL4jwdbCxhJm7-o",
  },
];

export default function Specialties() {
  return (
    <section id="mithai" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-on-background font-bold mb-2">Our Handcrafted Specialties</h2>
          <div className="anmol-motif"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl custom-glow group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-64 mb-6 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-3 font-bold">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
