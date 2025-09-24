import { MapPin, Route, Mountain } from "lucide-react";

export default function InteractiveMap() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Explore Monastery Locations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the sacred sites scattered across Sikkim's breathtaking
            landscapes
          </p>
        </div>

        <div className="bg-card rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
            alt="Interactive Map of Sikkim Monasteries"
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="text-primary-foreground text-xl" />
                </div>
                <h3 className="font-semibold mb-2 text-card-foreground">
                  15+ Monasteries
                </h3>
                <p className="text-sm text-muted-foreground">
                  Across all four districts of Sikkim
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Route className="text-accent-foreground text-xl" />
                </div>
                <h3 className="font-semibold mb-2 text-card-foreground">
                  Guided Routes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Optimized spiritual journey paths
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mountain className="text-secondary-foreground text-xl" />
                </div>
                <h3 className="font-semibold mb-2 text-card-foreground">
                  Elevation Info
                </h3>
                <p className="text-sm text-muted-foreground">
                  Altitude and accessibility details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
