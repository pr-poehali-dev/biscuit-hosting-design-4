import { useState } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Dashboard from '@/components/Dashboard';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'dashboard'>('home');

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Features />
          <Pricing />
          <FAQ />
        </>
      ) : (
        <Dashboard />
      )}
      
      <footer className="bg-secondary text-secondary-foreground py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 БисквитХост. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;