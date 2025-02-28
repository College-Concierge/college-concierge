
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Users, Map, Monitor } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Wireframes = () => {
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
          <h1 className="text-3xl font-bold mt-4">Wireframes</h1>
          <p className="text-muted-foreground mt-2">
            Visual representations of user interface layouts for key pages
          </p>
          <Separator className="my-6" />
        </div>

        <Tabs defaultValue="university" className="mb-12">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="university">University Detail</TabsTrigger>
            <TabsTrigger value="course">Course Directory</TabsTrigger>
            <TabsTrigger value="comparison">Comparison Tool</TabsTrigger>
            <TabsTrigger value="profile">User Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="university">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">University Detail Page</h2>
                    <p className="text-muted-foreground">Key components and layout</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  {/* Header Section */}
                  <div className="border-2 border-dashed border-muted-foreground/30 p-4 mb-4 rounded-lg">
                    <div className="h-10 w-28 bg-muted rounded mb-2"></div>
                    <div className="h-12 w-full max-w-md bg-muted rounded mb-3"></div>
                    <div className="flex gap-2 mb-3">
                      <div className="h-6 w-20 bg-muted/70 rounded"></div>
                      <div className="h-6 w-20 bg-muted/70 rounded"></div>
                      <div className="h-6 w-20 bg-muted/70 rounded"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-8 w-32 bg-primary/30 rounded"></div>
                      <div className="h-8 w-32 bg-accent/30 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Left Column */}
                    <div className="w-full md:w-2/3">
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg mb-4">
                        <div className="h-8 w-40 bg-muted rounded mb-3"></div>
                        <div className="h-40 w-full bg-muted/70 rounded mb-4"></div>
                        <div className="space-y-2">
                          <div className="h-4 w-full bg-muted/50 rounded"></div>
                          <div className="h-4 w-full bg-muted/50 rounded"></div>
                          <div className="h-4 w-3/4 bg-muted/50 rounded"></div>
                        </div>
                      </div>
                      
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg mb-4">
                        <div className="h-8 w-40 bg-muted rounded mb-3"></div>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div className="h-24 bg-muted/70 rounded"></div>
                          <div className="h-24 bg-muted/70 rounded"></div>
                          <div className="h-24 bg-muted/70 rounded"></div>
                          <div className="h-24 bg-muted/70 rounded"></div>
                        </div>
                      </div>
                      
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg">
                        <div className="h-8 w-40 bg-muted rounded mb-3"></div>
                        <div className="h-60 w-full bg-muted/70 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="w-full md:w-1/3">
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg mb-4">
                        <div className="h-8 w-40 bg-muted rounded mb-3"></div>
                        <div className="space-y-3 mb-3">
                          <div className="flex justify-between">
                            <div className="h-5 w-24 bg-muted/50 rounded"></div>
                            <div className="h-5 w-24 bg-muted/50 rounded"></div>
                          </div>
                          <div className="flex justify-between">
                            <div className="h-5 w-24 bg-muted/50 rounded"></div>
                            <div className="h-5 w-24 bg-muted/50 rounded"></div>
                          </div>
                          <div className="flex justify-between">
                            <div className="h-5 w-24 bg-muted/50 rounded"></div>
                            <div className="h-5 w-24 bg-muted/50 rounded"></div>
                          </div>
                        </div>
                        <div className="h-10 w-full bg-primary/30 rounded"></div>
                      </div>
                      
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg mb-4">
                        <div className="h-8 w-40 bg-muted rounded mb-3"></div>
                        <div className="h-12 w-full bg-muted/70 rounded mb-3"></div>
                        <div className="space-y-2 mb-3">
                          <div className="h-4 w-full bg-muted/50 rounded"></div>
                          <div className="h-4 w-full bg-muted/50 rounded"></div>
                          <div className="h-4 w-3/4 bg-muted/50 rounded"></div>
                        </div>
                        <div className="h-10 w-full bg-accent/30 rounded"></div>
                      </div>
                      
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg">
                        <div className="h-8 w-40 bg-muted rounded mb-3"></div>
                        <div className="h-64 w-full bg-muted/70 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <h3 className="font-medium text-lg">Key Components</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>University header with name, location, type, and quick action buttons</li>
                    <li>Overview section with key statistics and description</li>
                    <li>Courses offered with quick links to course pages</li>
                    <li>Campus facilities and infrastructure details</li>
                    <li>Key statistics sidebar with rankings, acceptance rate, etc.</li>
                    <li>Application information and deadlines</li>
                    <li>Location map and surrounding amenities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="course">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Monitor className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Course Directory Page</h2>
                    <p className="text-muted-foreground">Key components and layout</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <div className="flex flex-col lg:flex-row gap-4">
                    {/* Left Sidebar - Filters */}
                    <div className="w-full lg:w-1/4">
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg">
                        <div className="h-8 w-24 bg-muted rounded mb-4"></div>
                        
                        <div className="space-y-4">
                          <div>
                            <div className="h-6 w-32 bg-muted/70 rounded mb-2"></div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="h-4 w-4 bg-muted rounded"></div>
                                <div className="h-4 w-24 bg-muted/50 rounded"></div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="h-4 w-4 bg-muted rounded"></div>
                                <div className="h-4 w-24 bg-muted/50 rounded"></div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="h-4 w-4 bg-muted rounded"></div>
                                <div className="h-4 w-24 bg-muted/50 rounded"></div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="h-6 w-32 bg-muted/70 rounded mb-2"></div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="h-4 w-4 bg-muted rounded"></div>
                                <div className="h-4 w-24 bg-muted/50 rounded"></div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="h-4 w-4 bg-muted rounded"></div>
                                <div className="h-4 w-24 bg-muted/50 rounded"></div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="h-6 w-32 bg-muted/70 rounded mb-2"></div>
                            <div className="h-8 w-full bg-muted/50 rounded"></div>
                          </div>
                          
                          <div className="h-10 w-full bg-primary/30 rounded"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main Content - Course List */}
                    <div className="w-full lg:w-3/4">
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg mb-4">
                        <div className="flex justify-between items-center mb-4">
                          <div className="h-6 w-48 bg-muted rounded"></div>
                          <div className="h-8 w-32 bg-muted/70 rounded"></div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border border-muted p-3 rounded-lg">
                            <div className="h-6 w-40 bg-muted/70 rounded mb-2"></div>
                            <div className="h-4 w-32 bg-muted/50 rounded mb-3"></div>
                            <div className="flex justify-between mb-2">
                              <div className="h-5 w-20 bg-muted/50 rounded"></div>
                              <div className="h-5 w-20 bg-muted/50 rounded"></div>
                            </div>
                            <div className="flex gap-1">
                              <div className="h-6 w-16 bg-muted/30 rounded"></div>
                              <div className="h-6 w-16 bg-muted/30 rounded"></div>
                            </div>
                          </div>
                          
                          <div className="border border-muted p-3 rounded-lg">
                            <div className="h-6 w-40 bg-muted/70 rounded mb-2"></div>
                            <div className="h-4 w-32 bg-muted/50 rounded mb-3"></div>
                            <div className="flex justify-between mb-2">
                              <div className="h-5 w-20 bg-muted/50 rounded"></div>
                              <div className="h-5 w-20 bg-muted/50 rounded"></div>
                            </div>
                            <div className="flex gap-1">
                              <div className="h-6 w-16 bg-muted/30 rounded"></div>
                              <div className="h-6 w-16 bg-muted/30 rounded"></div>
                            </div>
                          </div>
                          
                          <div className="border border-muted p-3 rounded-lg">
                            <div className="h-6 w-40 bg-muted/70 rounded mb-2"></div>
                            <div className="h-4 w-32 bg-muted/50 rounded mb-3"></div>
                            <div className="flex justify-between mb-2">
                              <div className="h-5 w-20 bg-muted/50 rounded"></div>
                              <div className="h-5 w-20 bg-muted/50 rounded"></div>
                            </div>
                            <div className="flex gap-1">
                              <div className="h-6 w-16 bg-muted/30 rounded"></div>
                              <div className="h-6 w-16 bg-muted/30 rounded"></div>
                            </div>
                          </div>
                          
                          <div className="border border-muted p-3 rounded-lg">
                            <div className="h-6 w-40 bg-muted/70 rounded mb-2"></div>
                            <div className="h-4 w-32 bg-muted/50 rounded mb-3"></div>
                            <div className="flex justify-between mb-2">
                              <div className="h-5 w-20 bg-muted/50 rounded"></div>
                              <div className="h-5 w-20 bg-muted/50 rounded"></div>
                            </div>
                            <div className="flex gap-1">
                              <div className="h-6 w-16 bg-muted/30 rounded"></div>
                              <div className="h-6 w-16 bg-muted/30 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg flex justify-center">
                        <div className="h-10 w-64 bg-muted/70 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <h3 className="font-medium text-lg">Key Components</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Filter sidebar with course type, duration, and discipline options</li>
                    <li>Fee range slider for budget-based filtering</li>
                    <li>Course cards with name, university, duration, and fee information</li>
                    <li>Sort options (by popularity, fee, duration)</li>
                    <li>Pagination or infinite scroll for browsing more courses</li>
                    <li>Quick view buttons for detailed information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="comparison">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-edu-teal/10 flex items-center justify-center">
                    <Monitor className="h-6 w-6 text-edu-teal" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Comparison Tool</h2>
                    <p className="text-muted-foreground">Key components and layout</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg mb-4">
                    <div className="h-8 w-48 bg-muted rounded mb-4"></div>
                    <div className="flex gap-4 mb-6">
                      <div className="flex-1">
                        <div className="h-10 w-full bg-muted/70 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <div className="h-10 w-full bg-muted/70 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <div className="h-10 w-full bg-muted/70 rounded"></div>
                      </div>
                    </div>
                    <div className="h-10 w-40 bg-primary/30 rounded mx-auto"></div>
                  </div>
                  
                  <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="h-8 w-full bg-muted/50 rounded"></div>
                      <div className="h-8 w-full bg-muted/70 rounded"></div>
                      <div className="h-8 w-full bg-muted/70 rounded"></div>
                      <div className="h-8 w-full bg-muted/70 rounded"></div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 gap-4">
                        <div className="h-6 w-32 bg-muted/50 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4">
                        <div className="h-6 w-32 bg-muted/50 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4">
                        <div className="h-6 w-32 bg-muted/50 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4">
                        <div className="h-6 w-32 bg-muted/50 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                      </div>
                      
                      <Separator />
                      
                      <div className="grid grid-cols-4 gap-4">
                        <div className="h-6 w-32 bg-muted/50 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4">
                        <div className="h-6 w-32 bg-muted/50 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                        <div className="h-6 w-full bg-muted/30 rounded"></div>
                      </div>
                      
                      <Separator />
                      
                      <div className="grid grid-cols-4 gap-4">
                        <div className="h-6 w-32 bg-muted/50 rounded"></div>
                        <div className="h-12 w-full bg-muted/30 rounded"></div>
                        <div className="h-12 w-full bg-muted/30 rounded"></div>
                        <div className="h-12 w-full bg-muted/30 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <h3 className="font-medium text-lg">Key Components</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>University/course selection dropdowns (up to 3 items)</li>
                    <li>Side-by-side comparison table with key metrics</li>
                    <li>Visual indicators for better/worse features</li>
                    <li>Categorized comparison sections (academics, facilities, fees, etc.)</li>
                    <li>Option to download or share comparison results</li>
                    <li>Expandable sections for detailed comparisons</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profile">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-edu-amber/10 flex items-center justify-center">
                    <Monitor className="h-6 w-6 text-edu-amber" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">User Profile Dashboard</h2>
                    <p className="text-muted-foreground">Key components and layout</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <div className="flex flex-col lg:flex-row gap-4">
                    {/* Left - Navigation */}
                    <div className="w-full lg:w-1/4">
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-12 w-12 rounded-full bg-muted"></div>
                          <div>
                            <div className="h-5 w-32 bg-muted rounded mb-1"></div>
                            <div className="h-4 w-24 bg-muted/50 rounded"></div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="h-10 w-full bg-primary/30 rounded-md"></div>
                          <div className="h-10 w-full bg-muted/50 rounded-md"></div>
                          <div className="h-10 w-full bg-muted/50 rounded-md"></div>
                          <div className="h-10 w-full bg-muted/50 rounded-md"></div>
                          <div className="h-10 w-full bg-muted/50 rounded-md"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right - Main Content */}
                    <div className="w-full lg:w-3/4">
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg mb-4">
                        <div className="h-8 w-40 bg-muted rounded mb-4"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="border border-muted p-3 rounded-lg">
                            <div className="h-8 w-24 bg-muted/50 rounded mb-2"></div>
                            <div className="h-12 w-full bg-muted/30 rounded"></div>
                          </div>
                          <div className="border border-muted p-3 rounded-lg">
                            <div className="h-8 w-24 bg-muted/50 rounded mb-2"></div>
                            <div className="h-12 w-full bg-muted/30 rounded"></div>
                          </div>
                          <div className="border border-muted p-3 rounded-lg">
                            <div className="h-8 w-24 bg-muted/50 rounded mb-2"></div>
                            <div className="h-12 w-full bg-muted/30 rounded"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg mb-4">
                        <div className="h-8 w-48 bg-muted rounded mb-4"></div>
                        
                        <div className="space-y-3 mb-3">
                          <div className="h-20 w-full bg-muted/70 rounded"></div>
                          <div className="h-20 w-full bg-muted/70 rounded"></div>
                          <div className="h-20 w-full bg-muted/70 rounded"></div>
                        </div>
                      </div>
                      
                      <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg">
                        <div className="h-8 w-40 bg-muted rounded mb-4"></div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="h-8 w-full bg-muted/30 rounded"></div>
                          <div className="h-8 w-full bg-muted/30 rounded"></div>
                          <div className="h-8 w-full bg-muted/30 rounded"></div>
                          <div className="h-8 w-full bg-muted/30 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <h3 className="font-medium text-lg">Key Components</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Profile sidebar with navigation to different sections</li>
                    <li>Status cards for application progress, saved items, etc.</li>
                    <li>Saved universities/courses section with quick actions</li>
                    <li>Application timeline and checklist</li>
                    <li>Notification preferences and account settings</li>
                    <li>Document upload area for application materials</li>
                  </ul>
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
            <Link to="/user-journeys">
              <Map className="mr-2 h-4 w-4" />
              User Journeys
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Wireframes;
