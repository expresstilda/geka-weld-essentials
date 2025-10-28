import ProductCard from "./ProductCard";
import electrodesB47 from "@/assets/electrodes-b47.jpg";
import electrodesE6013 from "@/assets/electrodes-e6013.jpg";

interface CatalogProps {
  onOrderClick: (productName: string) => void;
}

const Catalog = ({ onOrderClick }: CatalogProps) => {
  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Два проверенных типа электродов — на 90% ваших задач
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональное качество для всех видов сварочных работ
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <ProductCard
            title="GEKA LASER B47"
            subtitle="Базовый электрод с пониженным водородом"
            image={electrodesB47}
            price="119 ₽/кг"
            features={[
              "Прочность шва до 600 МПа, ударная вязкость 47 Дж при −40 °C — для ответственных конструкций.",
              "Меньше расхода: коэф. наплавки ~120%, шлак тонкий, снимается легко.",
              "Уверенно варит низколегированные, судовые, строительные стали.",
            ]}
            standards={[
              "ГОСТ 9467: Э50А",
              "EN ISO 2560-A: E 42 4 B 42 H5",
              "AWS A5.1: E7018 H4R",
            ]}
            technicalParams={[
              "Диаметр/длина: 3,2 мм × 350 мм",
              "Ток: ~100–140 А (для Ø 3,2 мм)",
              "Положения: все, кроме вертикального «на спуск»",
              "Ток/полярность: DC, обратная/прямая",
            ]}
            approvals="НАКС · DNV-GL · TÜV · ABS · CE"
            onOrder={() => onOrderClick("GEKA LASER B47")}
          />
          
          <ProductCard
            title="GEKA ELIT E6013"
            subtitle="Рутиловый электрод общего назначения"
            image={electrodesE6013}
            price="105 ₽/кг"
            features={[
              "Лёгкий поджиг и стабильная дуга, мало брызг — сварщику проще и быстрее.",
              "Подходит для потолочных и вертикальных швов, тонкостенных конструкций.",
              "Отличен для кузовов, рам, баков, труб, мелкого ремонта.",
            ]}
            standards={[
              "ГОСТ 9467: Э46",
              "EN ISO 2560-A: E 42 0 RR 12",
              "AWS A5.1: E6013",
            ]}
            technicalParams={[
              "Диаметр/длина: 3,2 мм × 350 мм",
              "Ток: ~90–130 А (для Ø 3,2 мм)",
              "Положения: все (в т.ч. потолок)",
              "Ток/полярность: AC/DC, работает даже с простыми трансформаторами",
            ]}
            approvals="НАКС · DNV-GL · TÜV · ABS · CE"
            onOrder={() => onOrderClick("GEKA ELIT E6013")}
          />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
