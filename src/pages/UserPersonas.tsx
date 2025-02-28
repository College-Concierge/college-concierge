
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, FileText, Users, Map } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const UserPersonas = () => {
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
          <h1 className="text-3xl font-bold mt-4">User Personas</h1>
          <p className="text-muted-foreground mt-2">
            Detailed profiles of our target users to guide product development
          </p>
          <Separator className="my-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Persona 1 */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Raj Kumar</h2>
                  <p className="text-muted-foreground">High School Graduate</p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Demographics</h3>
                  <p className="text-sm text-muted-foreground">18 years old, from Delhi, middle-class family background</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Goals</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Find engineering colleges with good placements</li>
                    <li>Compare colleges based on fees and rankings</li>
                    <li>Understand admission requirements for top universities</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">Pain Points</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Overwhelmed by the number of college options</li>
                    <li>Difficulty finding transparent information about fees</li>
                    <li>Unsure about career prospects of different engineering branches</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">Behavior & Preferences</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Tech-savvy, primarily uses smartphone for research</li>
                    <li>Values peer opinions and alumni reviews</li>
                    <li>Limited budget, seeking scholarship opportunities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Persona 2 */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Priya Sharma</h2>
                  <p className="text-muted-foreground">Working Professional</p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Demographics</h3>
                  <p className="text-sm text-muted-foreground">26 years old, from Mumbai, 3 years work experience</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Goals</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Find MBA programs with good ROI</li>
                    <li>Identify programs with flexible schedules</li>
                    <li>Research specializations aligned with career growth</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">Pain Points</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Hard to find reliable information about placement statistics</li>
                    <li>Unclear about entrance exam requirements</li>
                    <li>Difficulty assessing program quality and reputation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">Behavior & Preferences</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Research-oriented, compares multiple sources</li>
                    <li>Concerned about work-life-study balance</li>
                    <li>Willing to invest in quality education for long-term growth</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Persona 3 */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full bg-edu-teal/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-edu-teal" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Sunita Patel</h2>
                  <p className="text-muted-foreground">Parent</p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Demographics</h3>
                  <p className="text-sm text-muted-foreground">45 years old, from Pune, parent of a high school student</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Goals</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Find safe, reputable colleges for her daughter</li>
                    <li>Understand financial requirements and payment plans</li>
                    <li>Research career prospects and employment rates</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">Pain Points</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Less comfortable with technology</li>
                    <li>Concerned about college environment and safety</li>
                    <li>Overwhelmed by complex admission processes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">Behavior & Preferences</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Relies on word-of-mouth and recommendations</li>
                    <li>Prefers comprehensive information in simple language</li>
                    <li>Values education quality and institution reputation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Persona 4 */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full bg-edu-amber/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-edu-amber" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Anand Singh</h2>
                  <p className="text-muted-foreground">International Student Aspirant</p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Demographics</h3>
                  <p className="text-sm text-muted-foreground">22 years old, from Nepal, seeking graduate studies in India</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Goals</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Find universities that accept international students</li>
                    <li>Understand visa requirements and processes</li>
                    <li>Identify affordable housing and living options</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">Pain Points</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Language barriers in understanding detailed information</li>
                    <li>Complex processes for foreign credential verification</li>
                    <li>Limited awareness of cultural differences and adaptation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">Behavior & Preferences</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Highly digital, uses multiple platforms for research</li>
                    <li>Values clear communication and responsive support</li>
                    <li>Looking for cultural integration opportunities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/user-journeys">
              <Map className="mr-2 h-4 w-4" />
              User Journeys
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

export default UserPersonas;
