import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MonasteryShowcase from "@/components/monastery-showcase";
import SpiritualExperiences from "@/components/spiritual-experiences";
import InteractiveMap from "@/components/interactive-map";
import BlogSection from "@/components/blog-section";
import EventsSection from "@/components/events-section";
import ProductsSection from "@/components/products-section";
import ReviewsSection from "@/components/reviews-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navigation />
      <HeroSection />
      <MonasteryShowcase />
      <SpiritualExperiences />
      <InteractiveMap />
      <BlogSection />
      <EventsSection />
      <ProductsSection />
      <ReviewsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
