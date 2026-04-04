import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Industries from './pages/Industries';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import Configurator from './pages/Configurator';
import Hero from './components/sections/Hero';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Hero /><Home /></>} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/configurator" element={<Configurator />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky CTA for Mobile */}
        <div className="lg:hidden fixed bottom-6 left-6 right-6 z-40">
          <a 
            href="/contact" 
            className="w-full bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-700/40 flex items-center justify-center gap-2"
          >
            Request Quote
          </a>
        </div>
      </div>
    </Router>
  );
}
