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
            subtitle="E7018 — базовый электрод с пониженным водородом"
            image={electrodesB47}
            price="119 ₽/кг"
            features={[
              "Прочность шва до 600 МПа, ударная вязкость — 47 Дж при –40 °C",
              "Подходит для низколегированных, судовых, строительных сталей",
              "Для несущих конструкций, резервуаров, мостов, котлов, трубопроводов",
              "Наплавка: до 120%, шлак — тонкий и легко удаляется",
            ]}
            specs={[
              "ГОСТ 9467: Э50А",
              "AWS E7018 H4R",
              "ISO 2560-A: E 42 4 B 42 H5",
            ]}
            certificates={["НАКС", "DNV-GL", "TÜV", "ABS", "CE"]}
            onOrder={() => onOrderClick("GEKA LASER B47")}
          />
          
          <ProductCard
            title="GEKA ELIT E6013"
            subtitle="Рутиловый электрод общего назначения"
            image={electrodesE6013}
            price="105 ₽/кг"
            features={[
              "Удобен в работе: стабильная дуга, мало брызг",
              "Идеален для потолочных и вертикальных швов",
              "Для сварки тонкостенных конструкций, кузовов, рам, баков, труб",
              "Зажигается легко, поджигается повторно без залипания",
              "Подходит для AC и DC источников, даже для простых трансформаторов",
            ]}
            specs={[
              "ГОСТ 9467: Э46",
              "AWS E6013",
              "ISO 2560-A: E 42 0 RR 12",
            ]}
            certificates={["ГОСТ", "AWS", "ISO"]}
            onOrder={() => onOrderClick("GEKA ELIT E6013")}
          />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
