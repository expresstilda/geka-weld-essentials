import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 animate-slide-up">
          <Button
            onClick={scrollToContact}
            variant="cta"
            size="lg"
            className="shadow-2xl"
          >
            Получить прайс
          </Button>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            variant="secondary"
            size="icon"
            className="shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      )}
    </>
  );
};

export default FloatingCTA;
