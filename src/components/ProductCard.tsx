import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  subtitle: string;
  image: string;
  price: string;
  features: string[];
  specs: string[];
  certificates: string[];
  onOrder: () => void;
}

const ProductCard = ({
  title,
  subtitle,
  image,
  price,
  features,
  specs,
  certificates,
  onOrder,
}: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 animate-slide-up">
      <CardHeader className="bg-muted/50 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-2xl mb-2">{title}</CardTitle>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          <Badge variant="secondary" className="text-lg font-bold whitespace-nowrap">
            от {price}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="mb-6 rounded-lg overflow-hidden bg-muted">
          {!imageError ? (
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-muted">
              <p className="text-muted-foreground">Изображение недоступно</p>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-primary">Особенности:</h4>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-primary">Технические характеристики:</h4>
            <ul className="space-y-1">
              {specs.map((spec, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-primary">Сертификация:</h4>
            <div className="flex flex-wrap gap-2">
              {certificates.map((cert, index) => (
                <Badge key={index} variant="outline">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-muted/30 p-6">
        <Button onClick={onOrder} variant="cta" size="lg" className="w-full">
          Заказать {title}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
