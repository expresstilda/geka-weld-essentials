import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Benefits from "@/components/Benefits";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import HowWeWork from "@/components/HowWeWork";
import Guarantees from "@/components/Guarantees";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[73px]">
        <Hero />
        <Catalog />
        <Benefits />
        <AboutSection onContactClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} />
        <Testimonials />
        <HowWeWork />
        <Guarantees />
        <ContactForm selectedProduct="" />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
