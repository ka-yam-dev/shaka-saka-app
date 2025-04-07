import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TeamCardProps {
  name: string;
  region: string;
  level: "Enjoy" | "Competitive";
  imageUrl: string;
}

export function TeamCard({ name, region, level, imageUrl }: TeamCardProps) {
  return (
    <Card className="min-w-[250px] max-w-[300px] overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-[160px] w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="mb-1 font-bold">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{region}</span>
          <Badge variant={level === "Competitive" ? "default" : "outline"}>
            {level}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 p-3">
        <Link
          href="#"
          className="text-sm font-medium text-primary hover:underline"
        >
          View Team Profile
        </Link>
      </CardFooter>
    </Card>
  );
}
