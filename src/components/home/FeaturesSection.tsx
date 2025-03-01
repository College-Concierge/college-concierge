
import { School, BookOpen, BarChart2, Users, Search, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: <School className="h-6 w-6 text-edu-teal" />,
    title: "University Explorer",
    description: "Browse through detailed profiles of top universities across India with rankings, facilities, and admission criteria.",
    bgColor: "bg-edu-teal/10",
    iconColor: "text-edu-teal"
  },
  {
    icon: <BookOpen className="h-6 w-6 text-edu-amber" />,
    title: "Course Finder",
    description: "Find the perfect course with our comprehensive database of programs, specializations, and curriculum details.",
    bgColor: "bg-edu-amber/10",
    iconColor: "text-edu-amber"
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-edu-lightBlue" />,
    title: "Comparison Tools",
    description: "Compare universities and courses side by side to make informed decisions about your educational future.",
    bgColor: "bg-edu-lightBlue/10",
    iconColor: "text-edu-lightBlue"
  },
  {
    icon: <Users className="h-6 w-6 text-edu-purple" />,
    title: "Student Reviews",
    description: "Get insights from current and former students about their experiences at different institutions.",
    bgColor: "bg-edu-purple/10",
    iconColor: "text-edu-purple"
  },
  {
    icon: <Search className="h-6 w-6 text-edu-indigo" />,
    title: "Advanced Filters",
    description: "Filter universities and courses by location, fees, ranking, and many other parameters to find your perfect match.",
    bgColor: "bg-edu-indigo/10",
    iconColor: "text-edu-indigo"
  },
  {
    icon: <Award className="h-6 w-6 text-edu-orange" />,
    title: "Scholarship Database",
    description: "Explore various scholarship opportunities available at different universities and for different courses.",
    bgColor: "bg-edu-orange/10",
    iconColor: "text-edu-orange"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Everything You Need For Your College Search
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our comprehensive tools and features help you make informed decisions about your educational journey
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-shadow h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <div className={`rounded-full ${feature.bgColor} p-3 w-12 h-12 flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground flex-grow">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
