import { useQuery } from "@tanstack/react-query";
import { type Event } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";

export default function EventsSection() {
  const {
    data: events,
    isLoading,
    error,
  } = useQuery<Event[]>({
    queryKey: ["/api/events/upcoming"],
  });

  if (isLoading) {
    return (
      <section id="events" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Upcoming Festivals & Events
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="w-full h-40 bg-muted animate-pulse" />
                <CardContent className="p-6">
                  <div className="h-6 bg-muted animate-pulse rounded mb-2" />
                  <div className="h-6 bg-muted animate-pulse rounded mb-2" />
                  <div className="h-12 bg-muted animate-pulse rounded mb-3" />
                  <div className="h-4 bg-muted animate-pulse rounded mb-3" />
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
      <section id="events" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-destructive">Failed to load events. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Upcoming Festivals & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the spiritual celebrations and cultural festivals at Sikkim's
            monasteries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events?.slice(0, 4).map((event) => (
            <Card
              key={event.id}
              className="bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden shadow-lg"
              data-testid={`card-event-${event.id}`}
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
              <CardContent className="p-6">
                <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full inline-block mb-2">
                  {new Date(event.startDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  {event.endDate && (
                    <>
                      {" - "}
                      {new Date(event.endDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2 text-card-foreground">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {event.description}
                </p>
                <div className="text-xs text-muted-foreground mb-3 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {event.location}
                </div>
                <Button
                  className="w-full"
                  data-testid={`button-register-event-${event.id}`}
                >
                  Register Interest
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
