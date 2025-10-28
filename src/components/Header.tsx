import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCatalog = () => {
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-primary">GEKA</h1>
              <p className="text-xs text-muted-foreground">Сварочные электроды</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={scrollToCatalog}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Каталог
            </button>
            <button
              onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              О компании
            </button>
            <Button onClick={scrollToContact} variant="cta" size="sm">
              Связаться
            </Button>
          </nav>
          
          <Button onClick={scrollToContact} variant="cta" size="sm" className="md:hidden">
            Заявка
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
