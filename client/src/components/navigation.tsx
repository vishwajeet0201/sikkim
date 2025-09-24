import { useState, useEffect } from "react";
import { Mountain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Mountain className="text-primary text-2xl mr-2" />
              <span className="text-xl font-bold text-primary">
                Sikkim Monasteries
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("monasteries")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-monasteries"
            >
              Monasteries
            </button>
            <button
              onClick={() => scrollToSection("experiences")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-experiences"
            >
              Experiences
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-events"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-blog"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-sm border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("monasteries")}
                className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
                data-testid="mobile-nav-monasteries"
              >
                Monasteries
              </button>
              <button
                onClick={() => scrollToSection("experiences")}
                className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
                data-testid="mobile-nav-experiences"
              >
                Experiences
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
                data-testid="mobile-nav-events"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
                data-testid="mobile-nav-blog"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
