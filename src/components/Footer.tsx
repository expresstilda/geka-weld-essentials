const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">GEKA</h3>
            <p className="text-sm opacity-90">
              Официальный дистрибьютор сварочных электродов GEKA (Gedik Welding) в России
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>Телефон: +7 (495) 123-45-67</p>
              <p>Email: info@geka-electrodes.ru</p>
              <p>Режим работы: Пн-Пт 9:00-18:00</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>Минимальный заказ: от 100 кг</p>
              <p>Доставка: по всей России</p>
              <p>Оплата: безналичный расчёт</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 GEKA. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
