import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Работаем с B47 на балках под козловой кран — отлично ложится, не трещит, НАКС прошёл без замечаний",
      author: "Игорь К.",
      position: "Главный сварщик, промышленный завод",
    },
    {
      text: "Сварщик сказал — дайте ещё таких же. Варим по ржавому и потолочно без проблем",
      author: "Алексей М.",
      position: "Прораб, строительная компания",
    },
    {
      text: "Закупаем оптом уже третий год. Качество стабильное, доставка всегда вовремя, документы в порядке",
      author: "Дмитрий В.",
      position: "Снабженец, машиностроительное предприятие",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            GEKA уже применяют на заводах и стройках — и возвращаются снова
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-muted/30 border-none shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-accent mb-4 opacity-50" />
                <p className="text-foreground mb-4 leading-relaxed">{testimonial.text}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
