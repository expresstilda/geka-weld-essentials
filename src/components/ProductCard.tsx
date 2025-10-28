import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductCardProps {
  title: string;
  subtitle: string;
  images: string[];
  price: string;
  features: string[];
  standards: string[];
  technicalParams: string[];
  approvals: string;
  onOrder: () => void;
}

const ProductCard = ({
  title,
  subtitle,
  images,
  price,
  features,
  standards,
  technicalParams,
  approvals,
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
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    src={image}
                    alt={`${title} - фото ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-primary">Ключевые особенности</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-primary">Классификация (стандарты)</h4>
            <ul className="space-y-1">
              {standards.map((standard, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{standard}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-primary">Технические параметры</h4>
            <ul className="space-y-1">
              {technicalParams.map((param, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{param}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-primary">Одобрения / Сертификаты</h4>
            <p className="text-sm text-muted-foreground">{approvals}</p>
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
