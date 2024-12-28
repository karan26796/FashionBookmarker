import React from "react";
import ProductGrid from "./ProductGrid";

interface HomeProps {
  initialProducts?: Array<{
    id: string;
    imageUrl: string;
    productName: string;
    price: string;
    website: string;
    isBookmarked: boolean;
  }>;
}

const Home = ({
  initialProducts = [
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
}: HomeProps) => {
  const [products, setProducts] = React.useState(initialProducts);

  const handleToggleBookmark = (productId: string) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, isBookmarked: !product.isBookmarked }
          : product,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-primary">Fashion Bookmarks</h1>
        </div>
      </header>
      <main>
        <ProductGrid
          products={products}
          onToggleBookmark={handleToggleBookmark}
        />
      </main>
    </div>
  );
};

export default Home;
