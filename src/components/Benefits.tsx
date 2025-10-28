import { Target, Package, Headphones, FileCheck } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Прямые поставки с завода GEKA",
      description: "Официальный дистрибьютор Gedik Welding без посредников",
    },
    {
      icon: FileCheck,
      title: "Паспорта качества и сертификаты",
      description: "Полный комплект документов: НАКС, ISO, CE и другие",
    },
    {
      icon: Package,
      title: "Всегда на складе",
      description: "Отгрузка в течение 1 рабочего дня после заявки",
    },
    {
      icon: Headphones,
      title: "Консультации по режимам сварки",
      description: "Техническая поддержка от опытного технолога",
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
