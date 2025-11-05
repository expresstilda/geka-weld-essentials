import { Factory, CreditCard, FileCheck } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: FileCheck,
      title: "Полный пакет сертификатов",
      description: "НАКС, РКО, ISO, РСТ",
    },
    {
      icon: Factory,
      title: "Прямая поставка от завода",
      description: "Стабильное качество и гибкая ценовая политика",
    },
    {
      icon: CreditCard,
      title: "Частичная оплата и отсрочка платежа",
      description: "Для постоянных клиентов",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Закрываете 90% сварочных задач — без лишнего ассортимента
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Эти два типа электродов подходят для всего: от мостов и резервуаров — до ремонта цистерн, рам и труб. Надёжно, понятно, без компромиссов.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h4 className="font-semibold mb-2 text-lg">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
