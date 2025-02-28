
import { School, BookOpen, BarChart2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Everything You Need For Your College Search</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-edu-teal/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <School className="h-6 w-6 text-edu-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">University Explorer</h3>
              <p className="text-muted-foreground">
                Browse through detailed profiles of top universities across India with rankings, facilities, and admission criteria.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-edu-amber/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-edu-amber" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Course Finder</h3>
              <p className="text-muted-foreground">
                Find the perfect course with our comprehensive database of programs, specializations, and curriculum details.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-edu-lightBlue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-edu-lightBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comparison Tools</h3>
              <p className="text-muted-foreground">
                Compare universities and courses side by side to make informed decisions about your educational future.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
