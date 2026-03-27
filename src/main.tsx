import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { CustomFitting } from './pages/CustomFitting';
import { Technology } from './pages/Technology';
import { Checkout } from './pages/Checkout';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
          <Navbar />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/fitting" element={<CustomFitting />} />
              <Route path="/tech" element={<Technology />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
