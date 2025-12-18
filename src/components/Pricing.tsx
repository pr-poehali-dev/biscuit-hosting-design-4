import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const plans = [
  {
    name: 'Старт',
    price: '299',
    period: 'мес',
    description: 'Идеально для небольших проектов',
    features: [
      '10 GB SSD хранилище',
      '100 GB трафик/мес',
      '1 домен',
      'SSL сертификат',
      'CDN ускорение',
      'Email поддержка',
    ],
    popular: false,
  },
  {
    name: 'Профи',
    price: '699',
    period: 'мес',
    description: 'Для растущего бизнеса',
    features: [
      '50 GB SSD хранилище',
      'Безлимитный трафик',
      '10 доменов',
      'SSL сертификат',
      'CDN ускорение',
      'Приоритетная поддержка 24/7',
      'DDoS защита',
      'Автобэкапы',
    ],
    popular: true,
  },
  {
    name: 'Бизнес',
    price: '1499',
    period: 'мес',
    description: 'Максимальная производительность',
    features: [
      '200 GB SSD хранилище',
      'Безлимитный трафик',
      'Неограниченно доменов',
      'SSL сертификат',
      'CDN ускорение',
      'VIP поддержка 24/7',
      'DDoS защита Pro',
      'Ежедневные бэкапы',
      'Выделенный IP',
      'Staging окружение',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Прозрачные <span className="text-primary">тарифы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите план, который подходит именно вам. Без скрытых платежей.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.popular 
                  ? 'border-primary shadow-2xl scale-105 bg-card' 
                  : 'border-border bg-card'
              } transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">₽/{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary hover:bg-secondary/90'
                  }`}
                  size="lg"
                >
                  Выбрать план
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
