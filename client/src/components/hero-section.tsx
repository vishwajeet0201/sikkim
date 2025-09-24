import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToMonasteries = () => {
    const element = document.getElementById("monasteries");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex items-center justify-center text-center text-white relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to Sikkim's
          <br />
          Sacred Heritage
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Discover ancient monasteries nestled in the Himalayas, where
          spirituality meets breathtaking natural beauty
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToMonasteries}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
            data-testid="button-explore-monasteries"
          >
            Explore Monasteries
          </Button>
          <Button
            onClick={() => scrollToSection("experiences")}
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg font-semibold"
            data-testid="button-plan-visit"
          >
            Plan Your Visit
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="text-white text-2xl animate-bounce cursor-pointer" onClick={scrollToMonasteries} />
      </div>
    </section>
  );
}
