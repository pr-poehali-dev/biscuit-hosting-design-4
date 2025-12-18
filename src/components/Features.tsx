import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: 'Gauge',
    title: 'Высокоскоростные серверы',
    description: 'NVMe SSD накопители и процессоры последнего поколения обеспечивают молниеносную скорость работы',
    stats: '10x быстрее',
  },
  {
    icon: 'Network',
    title: 'Глобальная CDN сеть',
    description: '150+ точек присутствия по всему миру доставляют контент максимально быстро вашим пользователям',
    stats: '150+ локаций',
  },
  {
    icon: 'Shield',
    title: 'DDoS защита',
    description: 'Многоуровневая защита от атак любой сложности гарантирует стабильную работу вашего сайта',
    stats: '99.9% защита',
  },
  {
    icon: 'Zap',
    title: 'HTTP/3 & QUIC',
    description: 'Поддержка новейших протоколов для максимальной скорости загрузки и безопасности соединения',
    stats: '40% быстрее',
  },
  {
    icon: 'HardDrive',
    title: 'Автобэкапы',
    description: 'Ежедневные автоматические резервные копии с возможностью восстановления в один клик',
    stats: 'Каждый день',
  },
  {
    icon: 'Headphones',
    title: 'Поддержка 24/7',
    description: 'Наша команда всегда на связи и готова помочь решить любую проблему в кратчайшие сроки',
    stats: 'Средний ответ 2 мин',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Технологии для <span className="text-primary">максимальной скорости</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы используем передовые решения для обеспечения высокой производительности вашего сайта
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon name={feature.icon as any} size={24} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {feature.stats}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
