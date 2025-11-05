import { Button } from "@/components/ui/button";
import { Shield, Zap, Clock, TrendingDown } from "lucide-react";
import heroImage from "@/assets/hero-welding.jpg";

const Hero = () => {
  const scrollToCatalog = () => {
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, rgba(30, 47, 68, 0.95) 0%, rgba(20, 32, 47, 0.95) 100%), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Получите доступ к оптовому прайс-листу на сварочные материалы со СКИДКОЙ ДО 45%
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Поставки по РФ с подбором оптимальной логистики и выгодой до 30% на доставке. Работаем с юридическими лицами.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-10 h-10 text-accent mb-3 mx-auto" />
              <p className="text-white font-medium">До 47 Дж вязкости при –40 °C</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="w-10 h-10 text-accent mb-3 mx-auto" />
              <p className="text-white font-medium">Наплавка +20% к скорости</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="w-10 h-10 text-accent mb-3 mx-auto" />
              <p className="text-white font-medium">Отгрузка в день заявки</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingDown className="w-10 h-10 text-accent mb-3 mx-auto" />
              <p className="text-white font-medium">Работаем напрямую, без переплат</p>
            </div>
          </div>
          
          <Button onClick={scrollToCatalog} variant="cta" size="lg" className="text-lg px-8 py-6 h-auto">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
