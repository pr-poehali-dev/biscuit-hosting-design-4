import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onStartFree: () => void;
}

const Hero = ({ onStartFree }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Zap" size={16} />
              <span>Скорость — наш приоритет</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Хостинг со вкусом{' '}
              <span className="text-primary">скорости</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Высокопроизводительные серверы и глобальная CDN сеть для максимально быстрой загрузки вашего сайта из любой точки мира
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg"
                onClick={onStartFree}
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="Check" className="text-primary" size={20} />
                <span className="text-sm">99.9% аптайм</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" className="text-primary" size={20} />
                <span className="text-sm">SSL бесплатно</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" className="text-primary" size={20} />
                <span className="text-sm">24/7 поддержка</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="relative w-full h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-border">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="space-y-4 w-full">
                  <div className="bg-card border border-border rounded-lg p-4 shadow-lg animate-fade-in">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Скорость ответа сервера</span>
                      <Icon name="Activity" className="text-primary" size={20} />
                    </div>
                    <div className="text-3xl font-bold text-primary">12ms</div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-4 shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Доступность</span>
                      <Icon name="TrendingUp" className="text-primary" size={20} />
                    </div>
                    <div className="text-3xl font-bold text-primary">99.99%</div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-4 shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">CDN локации</span>
                      <Icon name="Globe" className="text-primary" size={20} />
                    </div>
                    <div className="text-3xl font-bold text-primary">150+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;