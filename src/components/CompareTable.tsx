
import { 
  Check, 
  X, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  IndianRupee, 
  Award, 
  Star, 
  Building, 
  Users
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { University } from "@/data/universities";
import { cn } from "@/lib/utils";

interface CompareTableProps {
  universities: University[];
  onRemove: (id: number) => void;
}

const CompareTable = ({ universities, onRemove }: CompareTableProps) => {
  if (universities.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Select universities to compare</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full border-collapse">
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="font-medium w-48 min-w-[180px]">University</TableHead>
            {universities.map((university) => (
              <TableHead key={university.id} className="text-center min-w-[250px]">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img
                      src={university.imageUrl}
                      alt={university.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold truncate max-w-[200px]">
                      {university.name}
                    </h3>
                    <div className="text-xs text-muted-foreground flex items-center justify-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{university.city}, {university.state}</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => onRemove(university.id)}
                    className="mt-1 h-7 px-2"
                  >
                    Remove
                  </Button>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-card">
            <TableCell className="font-medium">
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                Type
              </div>
            </TableCell>
            {universities.map((university) => (
              <TableCell key={university.id} className="text-center">
                <Badge variant="outline" className="font-normal">
                  {university.type}
                </Badge>
              </TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">
              <div className="flex items-center">
                <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                Ranking
              </div>
            </TableCell>
            {universities.map((university) => (
              <TableCell key={university.id} className="text-center">
                <span className="font-medium">#{university.ranking}</span>
                <span className="text-xs text-muted-foreground ml-1">in India</span>
              </TableCell>
            ))}
          </TableRow>

          <TableRow className="bg-card">
            <TableCell className="font-medium">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-muted-foreground" />
                Rating
              </div>
            </TableCell>
            {universities.map((university) => (
              <TableCell key={university.id} className="text-center">
                <div className="flex items-center justify-center">
                  <div className="bg-primary/10 px-2 py-1 rounded-md flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-1" fill="currentColor" />
                    <span className="font-medium">{university.rating.toFixed(1)}</span>
                  </div>
                </div>
              </TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                Established
              </div>
            </TableCell>
            {universities.map((university) => (
              <TableCell key={university.id} className="text-center">
                {university.established}
              </TableCell>
            ))}
          </TableRow>

          <TableRow className="bg-card">
            <TableCell className="font-medium">
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                Accreditation
              </div>
            </TableCell>
            {universities.map((university) => (
              <TableCell key={university.id} className="text-center">
                <Badge className={cn(
                  university.accreditation.includes("A++") ? "bg-green-100 text-green-800" :
                  university.accreditation.includes("A+") ? "bg-emerald-100 text-emerald-800" :
                  "bg-blue-100 text-blue-800"
                )}>
                  {university.accreditation}
                </Badge>
              </TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">
              <div className="flex items-center">
                <IndianRupee className="h-4 w-4 mr-2 text-muted-foreground" />
                Fee Range
              </div>
            </TableCell>
            {universities.map((university) => (
              <TableCell key={university.id} className="text-center">
                <span>
                  ₹{university.fees.min >= 100000 
                    ? `${(university.fees.min / 100000).toFixed(1)}L` 
                    : `${(university.fees.min / 1000).toFixed(0)}K`}
                </span>
                <span className="mx-1">-</span>
                <span>
                  ₹{university.fees.max >= 100000 
                    ? `${(university.fees.max / 100000).toFixed(1)}L` 
                    : `${(university.fees.max / 1000).toFixed(0)}K`}
                </span>
              </TableCell>
            ))}
          </TableRow>

          <TableRow className="bg-card">
            <TableCell className="font-medium">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                Facilities
              </div>
            </TableCell>
            {universities.map((university) => (
              <TableCell key={university.id} className="text-center">
                <div className="flex flex-wrap gap-1 justify-center">
                  {university.facilities.slice(0, 3).map((facility) => (
                    <Badge key={facility} variant="secondary" className="font-normal text-xs">
                      {facility}
                    </Badge>
                  ))}
                  {university.facilities.length > 3 && (
                    <Badge variant="outline" className="font-normal text-xs">
                      +{university.facilities.length - 3} more
                    </Badge>
                  )}
                </div>
              </TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">Website</TableCell>
            {universities.map((university) => (
              <TableCell key={university.id} className="text-center">
                <a
                  href={university.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Visit Website
                </a>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompareTable;
