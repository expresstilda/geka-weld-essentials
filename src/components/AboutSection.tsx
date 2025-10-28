import { MapPin, Factory, FileCheck2 } from "lucide-react";
import { Button } from "./ui/button";

interface AboutSectionProps {
  onContactClick: () => void;
}

const AboutSection = ({ onContactClick }: AboutSectionProps) => {
  const advantages = [
    {
      icon: MapPin,
      title: "Связаться и приехать просто",
      description: "Офис и склад: 117246, Москва, Научный пр-д, 17, БЦ «9 Акров». Часы работы: 08:30–17:30. Тел.: +7 (499) 110-05-60.",
    },
    {
      icon: Factory,
      title: "Работаем с мировым производителем",
      description: "GEKA (Gedik Welding) — международный лидер в сварочных материалах; мощности — порядка 100 000 т/год. Мы держим ходовые позиции на складе и оперативно отгружаем.",
    },
    {
      icon: FileCheck2,
      title: "Документы на продукцию — без запроса",
      description: "Паспорта качества и сертификаты соответствия по ГОСТ/EN/AWS к отгрузке прилагаем.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О нас</h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
              Лидер-М — поставщик металлопроката и сварочных материалов. Склад в Москве, отгрузка день-в-день.
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Группа компаний «Лидер-М» — один из крупнейших в РФ комплексных поставщиков трубной продукции и металлопроката. 
              Мы поставляем и сварочные материалы, в том числе электроды GEKA (Gedik Welding).
            </p>
          </div>

          <div className="mb-12">
            <h4 className="text-2xl font-bold text-center mb-8">Почему нам доверяют:</h4>
            <div className="grid md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-lg shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="w-10 h-10 text-accent mb-4" />
                    <h5 className="font-semibold mb-3 text-lg">{advantage.title}</h5>
                    <p className="text-muted-foreground text-sm">{advantage.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="cta" 
              size="lg"
              onClick={onContactClick}
            >
              Связаться с отделом продаж
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;