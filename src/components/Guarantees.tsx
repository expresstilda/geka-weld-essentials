import { RefreshCcw, LifeBuoy, FileText, Shield } from "lucide-react";

const Guarantees = () => {
  const guarantees = [
    {
      icon: RefreshCcw,
      title: "Возврат и обмен — без вопросов",
      description: "Не подошло? Вернём деньги или обменяем",
    },
    {
      icon: LifeBuoy,
      title: "Техподдержка — бесплатно",
      description: "Консультации по применению и режимам сварки",
    },
    {
      icon: FileText,
      title: "Документы — полный комплект",
      description: "С каждой поставкой все необходимые сертификаты",
    },
    {
      icon: Shield,
      title: "Гарантия 12 месяцев",
      description: "На каждую поставку берём полную ответственность",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Гарантии и безопасность
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Меняем брак, консультируем, берём на себя ответственность
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-2 text-lg">{guarantee.title}</h4>
                <p className="text-muted-foreground text-sm">{guarantee.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
