import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const HeroPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default HeroPage;
