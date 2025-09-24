import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter/subscribe", { email });
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeMutation.mutate(email);
    }
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Stay Connected
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Subscribe to receive updates about monastery festivals, spiritual
            events, and exclusive cultural insights from Sikkim
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
              data-testid="input-newsletter-email"
            />
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={subscribeMutation.isPending}
              data-testid="button-subscribe-newsletter"
            >
              {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>

        <div className="flex justify-center mt-12 space-x-8">
          <div className="flex items-center space-x-6 opacity-60">
            <span className="text-muted-foreground font-semibold">
              Sikkim Tourism
            </span>
            <span className="text-muted-foreground font-semibold">
              Buddhist Heritage
            </span>
            <span className="text-muted-foreground font-semibold">
              Himalayan Culture
            </span>
            <span className="text-muted-foreground font-semibold">
              Spiritual Journey
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
