import { useState } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Dashboard from '@/components/Dashboard';
import Navigation from '@/components/Navigation';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'dashboard'>('home');
  const { toast } = useToast();

  const handleStartFree = () => {
    setCurrentPage('dashboard');
    toast({
      title: "Добро пожаловать!",
      description: "Ваш тестовый сервер успешно создан",
    });
  };

  const handleBuyPlan = (planName: string) => {
    toast({
      title: `Тариф "${planName}" выбран`,
      description: "Перенаправляем на оформление заказа...",
    });
    setTimeout(() => {
      setCurrentPage('dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {currentPage === 'home' && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
      
      {currentPage === 'home' ? (
        <>
          <Hero onStartFree={handleStartFree} />
          <Features />
          <Pricing onBuyPlan={handleBuyPlan} />
          <FAQ />
          <footer className="bg-secondary text-secondary-foreground py-8 mt-20">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm">© 2024 БисквитХост. Все права защищены.</p>
            </div>
          </footer>
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Index;