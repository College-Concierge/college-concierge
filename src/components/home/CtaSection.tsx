
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin Your College Journey?</h2>
        <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
          Create an account to save your favorite universities, get personalized recommendations, and track application deadlines.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Users className="mr-2 h-5 w-5" />
            Create Account
          </Button>
          <Button size="lg" variant="outline">
            Explore Universities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
