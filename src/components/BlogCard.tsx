import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  readTime: string;
}

export const BlogCard = ({ 
  id, 
  title, 
  excerpt, 
  author, 
  date, 
  category, 
  image, 
  readTime 
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <Card className="group h-full transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-1 border-border/50">
        {image && (
          <div className="overflow-hidden rounded-t-lg">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {category}
            </Badge>
            <span className="text-xs text-muted-foreground">• {readTime}</span>
          </div>
          <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="font-medium">{author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};