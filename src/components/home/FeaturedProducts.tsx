import { useState } from "react";
import ProductCard from "../products/ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
  category: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const [activeTab, setActiveTab] = useState<
    "featured" | "bestsellers" | "new" | "sale"
  >("featured");

  // Filter products based on active tab
  const filteredProducts = products
    .filter((product) => {
      switch (activeTab) {
        case "featured":
          return true; // All products are featured in this demo
        case "bestsellers":
          return product.rating >= 4.5;
        case "new":
          return product.isNew;
        case "sale":
          return product.isSale;
        default:
          return true;
      }
    })
    .slice(0, 8); // Limit to 8 products

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of high-quality products
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex border border-gray-200 rounded-full p-1 bg-white">
            {[
              { id: "featured", label: "Featured" },
              { id: "bestsellers", label: "Best Sellers" },
              { id: "new", label: "New Arrivals" },
              { id: "sale", label: "On Sale" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-10">
          <a
            href="/products/all"
            className="inline-flex items-center justify-center py-2.5 px-6 text-base font-medium rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
