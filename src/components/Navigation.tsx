import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  currentPage: 'home' | 'dashboard';
  onNavigate: (page: 'home' | 'dashboard') => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Server" className="text-primary-foreground" size={20} />
            </div>
            <span className="text-xl font-bold">БисквитХост</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Главная
            </button>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Тарифы
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            {currentPage === 'home' ? (
              <Button onClick={() => onNavigate('dashboard')} className="bg-primary hover:bg-primary/90">
                <Icon name="LayoutDashboard" size={16} className="mr-2" />
                Панель управления
              </Button>
            ) : (
              <Button onClick={() => onNavigate('home')} variant="outline">
                <Icon name="Home" size={16} className="mr-2" />
                На главную
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
