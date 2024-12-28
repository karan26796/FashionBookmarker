import React from "react";
import ProductCard from "./ProductCard";
import GridControls from "./GridControls";

interface Product {
  id: string;
  imageUrl: string;
  productName: string;
  price: string;
  website: string;
  isBookmarked: boolean;
}

interface ProductGridProps {
  products?: Product[];
  onToggleBookmark?: (productId: string) => void;
}

const ProductGrid = ({
  products = [
    {
      id: "1",
      imageUrl:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=300&h=300&fit=crop",
      productName: "Classic White T-Shirt",
      price: "$29.99",
      website: "fashionstore.com",
      isBookmarked: false,
    },
    {
      id: "2",
      imageUrl:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=300&h=300&fit=crop",
      productName: "Premium Denim Jeans",
      price: "$89.99",
      website: "denimco.com",
      isBookmarked: true,
    },
    {
      id: "3",
      imageUrl:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=300&h=300&fit=crop",
      productName: "Running Sneakers",
      price: "$119.99",
      website: "sneakerworld.com",
      isBookmarked: false,
    },
  ],
  onToggleBookmark = () => {},
}: ProductGridProps) => {
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
  const [currentFilter, setCurrentFilter] = React.useState("all");

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <GridControls
        sortOrder={sortOrder}
        currentFilter={currentFilter}
        onSortChange={(value) => setSortOrder(value as "asc" | "desc")}
        onFilterChange={setCurrentFilter}
      />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              productName={product.productName}
              price={product.price}
              website={product.website}
              isBookmarked={product.isBookmarked}
              onToggleBookmark={() => onToggleBookmark(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
