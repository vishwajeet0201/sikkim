import { useQuery } from "@tanstack/react-query";
import { type Product } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductsSection() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Sacred Arts & Crafts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="w-full h-64 bg-muted animate-pulse" />
                <CardContent className="p-6">
                  <div className="h-6 bg-muted animate-pulse rounded mb-2" />
                  <div className="h-16 bg-muted animate-pulse rounded mb-4" />
                  <div className="flex justify-between items-center">
                    <div className="h-6 bg-muted animate-pulse rounded w-20" />
                    <div className="h-8 bg-muted animate-pulse rounded w-24" />
                  </div>
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-destructive">Failed to load products. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Sacred Arts & Crafts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Authentic spiritual items and traditional crafts made by monastery
            artisans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products?.slice(0, 3).map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden shadow-lg"
              data-testid={`card-product-${product.id}`}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {product.price}
                  </span>
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    data-testid={`button-view-product-${product.id}`}
                  >
                    View Collection
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg font-semibold"
            data-testid="button-view-all-products"
          >
            Explore All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
