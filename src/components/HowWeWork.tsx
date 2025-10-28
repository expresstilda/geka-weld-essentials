import { Phone, MessageSquare, Package, CheckCircle } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      icon: Phone,
      title: "Оставляете заявку или звоните",
      description: "Свяжитесь с нами удобным способом",
    },
    {
      icon: MessageSquare,
      title: "Уточняем объём и тип задач",
      description: "Подберём оптимальный вариант под ваши нужды",
    },
    {
      icon: Package,
      title: "Отгружаем со склада",
      description: "В течение 1 рабочего дня",
    },
    {
      icon: CheckCircle,
      title: "Получаете заказ",
      description: "С паспортом, сертификатами, и работаете спокойно",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Простой и понятный процесс — без ожиданий и "пока нет на складе"
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-lg">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
