import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContactFormProps {
  selectedProduct?: string;
}

const ContactForm = ({ selectedProduct }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: selectedProduct || "",
    volume: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Симуляция отправки формы
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение часа",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        product: "",
        volume: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Оставьте заявку — и получите прайс, консультацию и помощь в подборе
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Отправим цену и описание в течение часа. Никаких спам-рассылок, только конкретный расчёт под вашу задачу.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto animate-slide-up">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Форма заявки</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ivan@company.ru"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product">Интересующий товар</Label>
                  <Select
                    value={formData.product}
                    onValueChange={(value) => setFormData({ ...formData, product: value })}
                  >
                    <SelectTrigger id="product">
                      <SelectValue placeholder="Выберите электрод" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="GEKA LASER B47">GEKA LASER B47 (E7018)</SelectItem>
                      <SelectItem value="GEKA ELIT E6013">GEKA ELIT E6013</SelectItem>
                      <SelectItem value="both">Оба варианта</SelectItem>
                      <SelectItem value="consultation">Нужна консультация</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="volume">Объём заказа (кг)</Label>
                  <Input
                    id="volume"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    placeholder="от 100 кг"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Комментарий</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Опишите вашу задачу или задайте вопрос"
                  rows={4}
                />
              </div>
              
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Получить прайс и консультацию"}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
