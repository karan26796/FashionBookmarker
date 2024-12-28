import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { cn } from "../lib/utils";

interface ProductCardProps {
  imageUrl?: string;
  productName?: string;
  price?: string;
  website?: string;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
}

const ProductCard = ({
  imageUrl = "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=300&h=300&fit=crop",
  productName = "Classic White T-Shirt",
  price = "$29.99",
  website = "fashionstore.com",
  isBookmarked = false,
  onToggleBookmark = () => {},
}: ProductCardProps) => {
  return (
    <Card className="w-[300px] h-[400px] bg-white hover:shadow-lg transition-shadow duration-200 relative overflow-hidden group">
      <CardHeader className="p-0 h-[250px] overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={imageUrl}
            alt={productName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <Button
            variant="secondary"
            size="icon"
            className={cn(
              "absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white",
              isBookmarked && "text-primary",
            )}
            onClick={onToggleBookmark}
          >
            <Bookmark
              className={cn("h-5 w-5", isBookmarked && "fill-current")}
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="font-semibold text-lg line-clamp-2">{productName}</h3>
        <p className="text-xl font-bold text-primary mt-2">{price}</p>
      </CardContent>
      <CardFooter className="absolute bottom-0 w-full bg-white border-t">
        <p className="text-sm text-muted-foreground truncate">{website}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
