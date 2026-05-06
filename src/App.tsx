import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Menu from './components/Menu';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-surface selection:bg-primary/20 selection:text-primary">
        <Header />
        <main>
          <Hero />
          <Specialties />
          <Menu />
          <About />
          <Testimonials />
          <Location />
        </main>
        <Footer />
        <WhatsAppButton />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

