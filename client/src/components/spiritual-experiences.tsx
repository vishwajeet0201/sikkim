import { useQuery } from "@tanstack/react-query";
import { type Experience } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SpiritualExperiences() {
  const {
    data: experiences,
    isLoading,
    error,
  } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  if (isLoading) {
    return (
      <section id="experiences" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Spiritual Experiences
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="w-full h-48 bg-muted animate-pulse" />
                <CardContent className="p-6">
                  <div className="h-6 bg-muted animate-pulse rounded mb-2" />
                  <div className="h-16 bg-muted animate-pulse rounded mb-4" />
                  <div className="h-8 bg-muted animate-pulse rounded" />
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
      <section id="experiences" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-destructive">Failed to load experiences. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experiences" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Spiritual Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in authentic monastery experiences and spiritual
            adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences?.map((experience) => (
            <Card
              key={experience.id}
              className="overflow-hidden shadow-lg"
              data-testid={`card-experience-${experience.id}`}
            >
              <img
                src={experience.imageUrl}
                alt={experience.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {experience.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {experience.description}
                </p>
                <Button
                  className="text-primary hover:text-primary/80 text-sm font-semibold w-full"
                  variant="outline"
                  data-testid={`button-book-experience-${experience.id}`}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
