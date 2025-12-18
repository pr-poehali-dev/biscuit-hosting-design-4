import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Что такое CDN и зачем она нужна?',
    answer: 'CDN (Content Delivery Network) — это сеть серверов, распределённых по всему миру. Она кэширует статический контент вашего сайта и доставляет его пользователям с ближайшего сервера, что значительно ускоряет загрузку страниц.',
  },
  {
    question: 'Как быстро мой сайт начнёт работать?',
    answer: 'После регистрации и оплаты тарифа ваш аккаунт активируется моментально. Вы сможете сразу начать загружать файлы и настраивать домен. Полная активация CDN занимает до 15 минут.',
  },
  {
    question: 'Могу ли я перенести существующий сайт?',
    answer: 'Да, мы предоставляем бесплатную услугу переноса для всех тарифов. Наша команда поможет перенести ваш сайт с минимальным временем простоя. Просто напишите в поддержку после регистрации.',
  },
  {
    question: 'Что включено в техническую поддержку?',
    answer: 'Наша поддержка работает 24/7 и помогает с настройкой хостинга, переносом сайта, решением технических проблем. Пользователи тарифов Профи и Бизнес получают приоритетный доступ со средним временем ответа 2 минуты.',
  },
  {
    question: 'Можно ли изменить тариф в будущем?',
    answer: 'Конечно! Вы можете в любой момент повысить или понизить тариф через панель управления. При повышении тарифа разница будет пересчитана пропорционально оставшемуся периоду.',
  },
  {
    question: 'Как работают автоматические бэкапы?',
    answer: 'Система создаёт полную резервную копию ваших файлов и баз данных каждый день. Бэкапы хранятся 30 дней, и вы можете восстановить любую версию в один клик через панель управления.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Часто задаваемые <span className="text-primary">вопросы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ответы на популярные вопросы о нашем хостинге
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
