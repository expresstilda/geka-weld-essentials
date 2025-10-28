import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import HowWeWork from "@/components/HowWeWork";
import Guarantees from "@/components/Guarantees";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  const handleOrderClick = (productName: string) => {
    setSelectedProduct(productName);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[73px]">
        <Hero />
        <Catalog onOrderClick={handleOrderClick} />
        <Benefits />
        <Testimonials />
        <HowWeWork />
        <Guarantees />
        <ContactForm selectedProduct={selectedProduct} />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
