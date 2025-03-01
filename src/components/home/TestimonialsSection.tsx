
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  university: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Computer Science Student",
    avatar: "PS",
    content: "College Concierge helped me find a university that perfectly matched my academic goals and budget. The AI chatbot answered all my questions instantly!",
    university: "IIT Delhi"
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Engineering Graduate",
    avatar: "RV",
    content: "The comparison tool saved me so much time. I could easily see the differences between my top choices side by side and make an informed decision.",
    university: "Delhi University"
  },
  {
    id: 3,
    name: "Anika Patel",
    role: "MBA Student",
    avatar: "AP",
    content: "As someone who was overwhelmed by the number of options, the advanced filters helped me narrow down my choices quickly based on my preferences.",
    university: "IIM Ahmedabad"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Medical Student",
    avatar: "VS",
    content: "The detailed information about each university's facilities and accreditations was crucial for my decision. College Concierge made the process smooth.",
    university: "AIIMS Delhi"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from students who found their perfect university match using College Concierge.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 text-primary">
                    <Quote className="h-6 w-6 rotate-180" />
                  </div>
                  
                  <p className="flex-grow text-sm mb-6">{testimonial.content}</p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs font-medium text-primary">{testimonial.university}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
