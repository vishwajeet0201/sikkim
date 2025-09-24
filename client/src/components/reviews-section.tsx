import { useQuery } from "@tanstack/react-query";
import { type Review } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Visitor Testimonials
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="p-8">
                <div className="h-6 bg-muted animate-pulse rounded mb-4" />
                <div className="h-20 bg-muted animate-pulse rounded mb-6" />
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-muted animate-pulse rounded-full mr-4" />
                  <div>
                    <div className="h-4 bg-muted animate-pulse rounded mb-1 w-20" />
                    <div className="h-3 bg-muted animate-pulse rounded w-16" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-destructive">Failed to load reviews. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Visitor Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from travelers who experienced the spiritual beauty of Sikkim's
            monasteries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews?.slice(0, 3).map((review) => (
            <Card
              key={review.id}
              className="p-8 shadow-lg"
              data-testid={`card-review-${review.id}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
              <div className="flex items-center">
                <img
                  src={review.avatarUrl}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    {review.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
