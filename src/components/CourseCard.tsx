
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, IndianRupee, Users, BookText } from "lucide-react";
import { Course } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  showButton?: boolean;
  className?: string;
  onClick?: () => void;
}

const CourseCard = ({ 
  course, 
  showButton = true, 
  className,
  onClick
}: CourseCardProps) => {
  return (
    <Card 
      className={cn(
        "transition-all hover:shadow-md card-shadow h-full flex flex-col",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start gap-2">
          <div>
            <div className="chip chip-info mb-2">{course.level}</div>
            <h3 className="font-semibold text-lg line-clamp-2">{course.name}</h3>
            <p className="text-muted-foreground text-sm mt-1">{course.shortName}</p>
          </div>
          {course.isPopular && (
            <Badge variant="default" className="bg-accent text-white shrink-0">
              Popular
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2 pb-3 flex-grow">
        <div className="mt-3 space-y-2.5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1.5" />
              <span>Duration</span>
            </div>
            <span className="font-medium">{course.duration}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-muted-foreground">
              <IndianRupee className="h-4 w-4 mr-1.5" />
              <span>Course Fee</span>
            </div>
            <span className="font-medium">
              ₹{course.fees >= 100000 
                ? `${(course.fees / 100000).toFixed(1)}L` 
                : `${(course.fees / 1000).toFixed(0)}K`}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-muted-foreground">
              <BookOpen className="h-4 w-4 mr-1.5" />
              <span>Category</span>
            </div>
            <span className="font-medium">{course.category}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-muted-foreground">
              <Users className="h-4 w-4 mr-1.5" />
              <span>Seats</span>
            </div>
            <span className="font-medium">{course.seats}</span>
          </div>

          {course.averageSalary && (
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-muted-foreground">
                <IndianRupee className="h-4 w-4 mr-1.5" />
                <span>Avg. Salary</span>
              </div>
              <span className="font-medium">
                ₹{course.averageSalary >= 100000 
                  ? `${(course.averageSalary / 100000).toFixed(1)}L` 
                  : `${(course.averageSalary / 1000).toFixed(0)}K`}
              </span>
            </div>
          )}
        </div>

        <div className="mt-4">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
        </div>
      </CardContent>

      {showButton && (
        <CardFooter className="p-4 pt-0 border-t">
          <Button className="w-full" variant="outline">
            <BookText className="h-4 w-4 mr-2" />
            Course Details
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CourseCard;
