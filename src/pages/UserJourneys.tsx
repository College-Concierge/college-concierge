
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, FileText, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserJourneys = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mt-4">User Journeys</h1>
          <p className="text-muted-foreground mt-2">
            Step-by-step paths users take to accomplish their goals on our platform
          </p>
          <Separator className="my-6" />
        </div>

        <Tabs defaultValue="highschool" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="highschool">High School Graduate</TabsTrigger>
            <TabsTrigger value="professional">Working Professional</TabsTrigger>
            <TabsTrigger value="parent">Parent</TabsTrigger>
            <TabsTrigger value="international">International Student</TabsTrigger>
          </TabsList>
          
          <TabsContent value="highschool">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Raj's College Search Journey</h2>
                    <p className="text-muted-foreground">High School Graduate</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border"></div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">1</div>
                    <h3 className="font-medium text-lg">Discovery</h3>
                    <p className="text-muted-foreground mt-2">
                      Raj hears about the College Concierge platform from his school counselor. He visits the website on his smartphone.
                    </p>
                    <div className="mt-3 flex flex-col gap-2">
                      <p className="text-sm font-medium">Goals at this stage:</p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        <li>Get a quick understanding of what the platform offers</li>
                        <li>Determine if it can help with engineering college search</li>
                      </ul>
                    </div>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Homepage, feature overview</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">2</div>
                    <h3 className="font-medium text-lg">Initial Search</h3>
                    <p className="text-muted-foreground mt-2">
                      Raj uses the search function to look for "top engineering colleges" and filters by location (near Delhi).
                    </p>
                    <div className="mt-3 flex flex-col gap-2">
                      <p className="text-sm font-medium">Goals at this stage:</p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        <li>Find a manageable list of potential colleges</li>
                        <li>Get a quick overview of engineering options</li>
                      </ul>
                    </div>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Search bar, filter panel, search results page</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">3</div>
                    <h3 className="font-medium text-lg">Detailed Research</h3>
                    <p className="text-muted-foreground mt-2">
                      He browses through individual college profiles, focusing on rankings, placement statistics, and fee structures.
                    </p>
                    <div className="mt-3 flex flex-col gap-2">
                      <p className="text-sm font-medium">Goals at this stage:</p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        <li>Compare colleges on important parameters</li>
                        <li>Understand admission requirements</li>
                        <li>Check affordability and scholarship options</li>
                      </ul>
                    </div>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">University detail pages, comparison tool, scholarship information</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">4</div>
                    <h3 className="font-medium text-lg">Account Creation</h3>
                    <p className="text-muted-foreground mt-2">
                      Raj creates an account to save his favorite colleges and get notifications about application deadlines.
                    </p>
                    <div className="mt-3 flex flex-col gap-2">
                      <p className="text-sm font-medium">Goals at this stage:</p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        <li>Save research for later review</li>
                        <li>Get personalized recommendations</li>
                        <li>Track important dates and deadlines</li>
                      </ul>
                    </div>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Sign-up form, profile creation, notification settings</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">5</div>
                    <h3 className="font-medium text-lg">Application Planning</h3>
                    <p className="text-muted-foreground mt-2">
                      He uses the application checklist feature to track requirements for his shortlisted colleges.
                    </p>
                    <div className="mt-3 flex flex-col gap-2">
                      <p className="text-sm font-medium">Goals at this stage:</p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        <li>Organize application materials</li>
                        <li>Stay on track with deadlines</li>
                        <li>Get guidance on application process</li>
                      </ul>
                    </div>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Application dashboard, checklist tool, reminder notifications</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="professional">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Priya's MBA Program Journey</h2>
                    <p className="text-muted-foreground">Working Professional</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border"></div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">1</div>
                    <h3 className="font-medium text-lg">Initial Research</h3>
                    <p className="text-muted-foreground mt-2">
                      Priya searches for "part-time MBA programs" during her lunch break at work.
                    </p>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Search functionality, program filter options</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">2</div>
                    <h3 className="font-medium text-lg">Program Comparison</h3>
                    <p className="text-muted-foreground mt-2">
                      She uses the comparison tool to evaluate different MBA specializations and their ROI.
                    </p>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Comparison tool, ROI calculator, specialization guides</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">3</div>
                    <h3 className="font-medium text-lg">Alumni Insights</h3>
                    <p className="text-muted-foreground mt-2">
                      Priya explores alumni reviews and career progression statistics for her shortlisted programs.
                    </p>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Alumni testimonials, career outcome data, review section</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">4</div>
                    <h3 className="font-medium text-lg">Application Preparation</h3>
                    <p className="text-muted-foreground mt-2">
                      She registers for entrance exam preparation resources and schedules virtual campus tours.
                    </p>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Exam preparation resources, virtual tour scheduler, application guide</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="parent">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-edu-teal/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-edu-teal" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Sunita's College Research Journey</h2>
                    <p className="text-muted-foreground">Parent</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border"></div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-edu-teal flex items-center justify-center text-white text-xs font-bold">1</div>
                    <h3 className="font-medium text-lg">Information Gathering</h3>
                    <p className="text-muted-foreground mt-2">
                      Sunita searches for "best women's colleges" for her daughter.
                    </p>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Search feature, college rankings, safety information</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-edu-teal flex items-center justify-center text-white text-xs font-bold">2</div>
                    <h3 className="font-medium text-lg">Safety Research</h3>
                    <p className="text-muted-foreground mt-2">
                      She explores the campus safety and student support sections of college profiles.
                    </p>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Safety ratings, hostel information, student support services</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-edu-teal flex items-center justify-center text-white text-xs font-bold">3</div>
                    <h3 className="font-medium text-lg">Financial Planning</h3>
                    <p className="text-muted-foreground mt-2">
                      Sunita uses the fee calculator and scholarship finder for financial planning.
                    </p>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Fee calculator, scholarship database, payment plan information</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-edu-teal flex items-center justify-center text-white text-xs font-bold">4</div>
                    <h3 className="font-medium text-lg">Connection with Counselors</h3>
                    <p className="text-muted-foreground mt-2">
                      She schedules a call with an education counselor to discuss her concerns and questions.
                    </p>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Counselor booking system, parent support resources</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="international">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-edu-amber/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-edu-amber" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Anand's International Student Journey</h2>
                    <p className="text-muted-foreground">International Student Aspirant</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border"></div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-edu-amber flex items-center justify-center text-white text-xs font-bold">1</div>
                    <h3 className="font-medium text-lg">Eligibility Check</h3>
                    <p className="text-muted-foreground mt-2">
                      Anand uses the international student filter to find universities accepting Nepalese students.
                    </p>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">International admissions filter, eligibility checker</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-edu-amber flex items-center justify-center text-white text-xs font-bold">2</div>
                    <h3 className="font-medium text-lg">Visa Information</h3>
                    <p className="text-muted-foreground mt-2">
                      He explores the visa requirements and document checklist for studying in India.
                    </p>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Visa guide, document checklist, application timeline</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-edu-amber flex items-center justify-center text-white text-xs font-bold">3</div>
                    <h3 className="font-medium text-lg">Accommodation Research</h3>
                    <p className="text-muted-foreground mt-2">
                      Anand checks housing options and cost of living information for different cities.
                    </p>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Accommodation guide, cost calculator, city comparison</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-edu-amber flex items-center justify-center text-white text-xs font-bold">4</div>
                    <h3 className="font-medium text-lg">Cultural Preparation</h3>
                    <p className="text-muted-foreground mt-2">
                      He reads student experiences and cultural adaptation guides for international students.
                    </p>
                    <div className="mt-3 p-3 bg-muted rounded-md">
                      <p className="text-sm font-medium">Touchpoints:</p>
                      <p className="text-sm text-muted-foreground">Cultural guides, international student testimonials, adaptation resources</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/user-personas">
              <Users className="mr-2 h-4 w-4" />
              User Personas
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/wireframes">
              <FileText className="mr-2 h-4 w-4" />
              Wireframes
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserJourneys;
