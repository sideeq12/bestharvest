import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CropsSection from './components/CropsSection';
import Dashboard from './components/Dashboard';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CropsSection />
      <Dashboard />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;