import { useQuery } from "@tanstack/react-query";
import { type Monastery } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

export default function MonasteryShowcase() {
  const {
    data: monasteries,
    isLoading,
    error,
  } = useQuery<Monastery[]>({
    queryKey: ["/api/monasteries"],
  });

  if (isLoading) {
    return (
      <section id="monasteries" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Sacred Monasteries of Sikkim
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="w-full h-64 bg-muted animate-pulse" />
                <CardContent className="p-6">
                  <div className="h-6 bg-muted animate-pulse rounded mb-2" />
                  <div className="h-20 bg-muted animate-pulse rounded mb-4" />
                  <div className="h-4 bg-muted animate-pulse rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="monasteries" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-destructive">Failed to load monasteries. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="monasteries" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Sacred Monasteries of Sikkim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Journey through centuries of Buddhist heritage in the world's most
            spectacular mountain settings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {monasteries?.map((monastery) => (
            <Card
              key={monastery.id}
              className="monastery-card overflow-hidden shadow-lg"
              data-testid={`card-monastery-${monastery.id}`}
            >
              <img
                src={monastery.imageUrl}
                alt={monastery.name}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-card-foreground">
                  {monastery.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {monastery.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {monastery.location}
                  </span>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 font-semibold p-0"
                    data-testid={`button-learn-more-${monastery.id}`}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
