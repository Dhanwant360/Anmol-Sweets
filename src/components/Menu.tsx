import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const menuCategories = [
  {
    id: "mithai",
    title: "Premium Mithai",
    items: [
      { name: "Kaju Katli", price: "₹800/kg", desc: "Classic cashew fudge with edible silver foil." },
      { name: "Motichoor Ladoo", price: "₹600/kg", desc: "Fine besan pearls fried in pure desi ghee." },
      { name: "Milk Cake", price: "₹750/kg", desc: "Rich and grainy traditional milk sweet." },
      { name: "Gulab Jamun", price: "₹500/kg", desc: "Soft khoya dumplings in rose-scented syrup." }
    ]
  },
  {
    id: "snacks",
    title: "Savory Snacks",
    items: [
      { name: "Punjabi Samosa", price: "₹25/pc", desc: "Crispy pastry filled with spiced potatoes and peas." },
      { name: "Paneer Pakora", price: "₹40/pc", desc: "Fresh cottage cheese dipped in besan batter and fried." },
      { name: "Kachori", price: "₹30/pc", desc: "Flaky pastry stuffed with spicy lentil mix." },
      { name: "Aloo Tikki", price: "₹60/plate", desc: "Spiced potato patties served with chutneys." }
    ]
  },
  {
    id: "breakfast",
    title: "Breakfast Specials",
    items: [
      { name: "Cholle Bhature", price: "₹120/plate", desc: "Spicy chickpea curry with fluffy fried bread." },
      { name: "Puri Sabzi", price: "₹100/plate", desc: "Traditional spiced potato curry with hot puris." },
      { name: "Aloo Paratha", price: "₹80/pc", desc: "Wheat flatbread stuffed with spiced potatoes, served with curd." },
      { name: "Jalebi Fafda", price: "₹150/plate", desc: "Classic sweet and savory weekend breakfast." }
    ]
  }
];

export default function Menu() {
  const handleOrder = (itemName: string) => {
    alert(`Added ${itemName} to your cart!`);
  };

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-on-background font-bold mb-2">Our Menu</h2>
          <div className="anmol-motif"></div>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Explore our wide selection of traditional sweets, hot snacks, and hearty breakfast options made fresh daily.</p>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category, catIndex) => (
            <div key={category.id} id={category.id} className="scroll-mt-32">
              <h3 className="font-serif text-3xl text-primary border-b border-primary/20 pb-2 mb-8">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center p-4 rounded-xl bg-surface hover:shadow-md transition-shadow border border-outline-variant/50"
                  >
                    <div>
                      <h4 className="font-bold text-lg text-on-background">{item.name}</h4>
                      <p className="text-sm text-on-surface-variant mt-1">{item.desc}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0 ml-4">
                      <span className="font-bold text-primary">{item.price}</span>
                      <button 
                        onClick={() => handleOrder(item.name)}
                        className="flex items-center gap-1 text-xs bg-primary/10 hover:bg-primary text-primary hover:text-white px-3 py-1.5 rounded-full transition-colors"
                      >
                        <ShoppingBag size={14} /> Add
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
