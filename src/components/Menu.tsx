import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const menuCategories = [
  {
    id: "mithai",
    title: "Premium Mithai",
    items: [
      { name: "Kaju Katli", price: "₹800/kg", desc: "Classic cashew fudge with edible silver foil.", image: "/images/kaju_katli_1779259416811.png" },
      { name: "Motichoor Ladoo", price: "₹600/kg", desc: "Fine besan pearls fried in pure desi ghee.", image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&q=80&w=800" },
      { name: "Milk Cake", price: "₹750/kg", desc: "Rich and grainy traditional milk sweet.", image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&q=80&w=800" },
      { name: "Gulab Jamun", price: "₹500/kg", desc: "Soft khoya dumplings in rose-scented syrup.", image: "/images/gulab_jamun_1779259363867.png" },
      { name: "Rasgulla", price: "₹450/kg", desc: "Soft and spongy cottage cheese dumplings soaked in sugar syrup.", image: "/images/rasgulla_1779259443846.png" },
      { name: "Besan Ladoo", price: "₹550/kg", desc: "Roasted gram flour sweet rolled into spheres with nuts.", image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&q=80&w=800" },
      { name: "Rasmalai", price: "₹40/pc", desc: "Soft paneer discs soaked in thickened, sweetened cardamom milk.", image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "snacks",
    title: "Savory Snacks",
    items: [
      { name: "Punjabi Samosa", price: "₹25/pc", desc: "Crispy pastry filled with spiced potatoes and peas.", image: "/images/samosa_1779259379883.png" },
      { name: "Paneer Pakora", price: "₹40/pc", desc: "Fresh cottage cheese dipped in besan batter and fried.", image: "/images/paneer_pakora_1779259498551.png" },
      { name: "Kachori", price: "₹30/pc", desc: "Flaky pastry stuffed with spicy lentil mix.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800" },
      { name: "Aloo Tikki", price: "₹60/plate", desc: "Spiced potato patties served with chutneys.", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800" },
      { name: "Samosa Chaat", price: "₹70/plate", desc: "Crushed samosas topped with chole, yogurt, and chutneys.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800" },
      { name: "Bhel Puri", price: "₹50/plate", desc: "Puffed rice tossed with veggies, tangy chutneys, and sev.", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800" },
      { name: "Khaman Dhokla", price: "₹250/kg", desc: "Soft, spongy savory steamed cake from Gujarat.", image: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "breakfast",
    title: "Breakfast Specials",
    items: [
      { name: "Cholle Bhature", price: "₹120/plate", desc: "Spicy chickpea curry with fluffy fried bread.", image: "/images/chole_bhature_1779259400547.png" },
      { name: "Puri Sabzi", price: "₹100/plate", desc: "Traditional spiced potato curry with hot puris.", image: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=800" },
      { name: "Aloo Paratha", price: "₹80/pc", desc: "Wheat flatbread stuffed with spiced potatoes, served with curd.", image: "https://images.unsplash.com/photo-1626082895617-2c6ad34744d3?auto=format&fit=crop&q=80&w=800" },
      { name: "Jalebi Fafda", price: "₹150/plate", desc: "Classic sweet and savory weekend breakfast.", image: "/images/jalebi_1779259477450.png" },
      { name: "Kanda Poha", price: "₹60/plate", desc: "Flattened rice cooked with onions, peanuts, and turmeric.", image: "https://images.unsplash.com/photo-1626082895617-2c6ad34744d3?auto=format&fit=crop&q=80&w=800" },
      { name: "Pav Bhaji", price: "₹110/plate", desc: "Spiced mashed vegetable curry served with butter-toasted buns.", image: "https://images.unsplash.com/photo-1606491956689-2ea8869920e4?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "drinks",
    title: "Beverages",
    items: [
      { name: "Punjabi Lassi", price: "₹60/glass", desc: "Thick and creamy yogurt drink topped with malai.", image: "/images/lassi_1779259461870.png" },
      { name: "Masala Chai", price: "₹25/cup", desc: "Spiced tea brewed with ginger, cardamom, and milk.", image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=800" },
      { name: "Badam Milk", price: "₹70/glass", desc: "Warm milk infused with saffron, almonds, and cardamom.", image: "https://images.unsplash.com/photo-1574681657850-20387b3b4f65?auto=format&fit=crop&q=80&w=800" },
      { name: "Cold Coffee", price: "₹80/glass", desc: "Creamy iced coffee blended with milk and ice cream.", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800" },
      { name: "Fresh Lime Soda", price: "₹50/glass", desc: "Refreshing sweet and salty sparkling lime drink.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800" }
    ]
  }
];

export default function Menu() {
  const { addToCart } = useCart();

  const handleOrder = (item: any) => {
    addToCart({
      id: item.name,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  };

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-on-background font-bold mb-2">Our Menu</h2>
          <div className="anmol-motif"></div>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Explore our wide selection of traditional sweets, hot snacks, and hearty breakfast options made fresh daily.</p>
        </div>

        <div className="space-y-20">
          {menuCategories.map((category, catIndex) => (
            <div key={category.id} id={category.id} className="scroll-mt-32">
              <h3 className="font-serif text-3xl text-primary border-b border-primary/20 pb-4 mb-8">{category.title}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-surface hover:shadow-lg transition-all duration-300 border border-outline-variant/50 group"
                  >
                    <div className="w-full sm:w-40 h-48 sm:h-36 shrink-0 rounded-lg overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1 gap-2">
                          <h4 className="font-bold text-lg text-on-background leading-tight">{item.name}</h4>
                          <span className="font-bold text-primary shrink-0 bg-primary/5 px-2 py-1 rounded-md text-sm">{item.price}</span>
                        </div>
                        <p className="text-sm text-on-surface-variant mt-2 mb-4 leading-relaxed line-clamp-2">{item.desc}</p>
                      </div>
                      <div className="flex justify-end mt-auto">
                        <button 
                          onClick={() => handleOrder(item)}
                          className="flex items-center gap-2 text-sm font-semibold bg-primary/10 hover:bg-primary text-primary hover:text-white px-5 py-2 rounded-full transition-all active:scale-95"
                        >
                          <ShoppingBag size={16} /> Add to Cart
                        </button>
                      </div>
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
