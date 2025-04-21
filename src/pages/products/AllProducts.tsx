import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  ChevronDown,
  Filter,
  Search,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";

// Sample product data
const products = [
  {
    id: "p1",
    name: "Wireless Noise-Cancelling Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 435,
    isNew: false,
    isSale: true,
    category: "Electronics",
  },
  {
    id: "p2",
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 289,
    isNew: false,
    isSale: false,
    category: "Clothing",
  },
  {
    id: "p3",
    name: "Smart Watch Series 5",
    price: 299.99,
    originalPrice: 349.99,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 521,
    isNew: true,
    isSale: true,
    category: "Electronics",
  },
  {
    id: "p4",
    name: "Ergonomic Office Chair",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 142,
    isNew: false,
    isSale: false,
    category: "Home & Kitchen",
  },
  {
    id: "p5",
    name: "Handmade Ceramic Mug Set",
    price: 34.99,
    originalPrice: 49.99,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 87,
    isNew: false,
    isSale: true,
    category: "Home & Kitchen",
  },
  {
    id: "p6",
    name: "Premium Yoga Mat",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1599447292180-45fd84092ef4?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 213,
    isNew: false,
    isSale: false,
    category: "Sports",
  },
  {
    id: "p7",
    name: "Smartphone Camera Lens Kit",
    price: 49.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 176,
    isNew: true,
    isSale: true,
    category: "Electronics",
  },
  {
    id: "p8",
    name: "Organic Skincare Set",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 324,
    isNew: true,
    isSale: false,
    category: "Beauty",
  },
  {
    id: "p9",
    name: "Wireless Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 178,
    isNew: false,
    isSale: true,
    category: "Electronics",
  },
  {
    id: "p10",
    name: "Minimalist Wristwatch",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 241,
    isNew: true,
    isSale: false,
    category: "Accessories",
  },
  {
    id: "p11",
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 112,
    isNew: false,
    isSale: false,
    category: "Sports",
  },
  {
    id: "p12",
    name: "Slim Fit Jeans",
    price: 59.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 186,
    isNew: false,
    isSale: true,
    category: "Clothing",
  },
];

// Categories for filtering
const categories = [
  "All Categories",
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Accessories",
];

const AllProducts = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  // Filter products based on selected filters
  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "All Categories" ||
          product.category === selectedCategory) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (searchQuery === "" ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low-high":
          return a.price - b.price;
        case "price-high-low":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return a.isNew ? -1 : b.isNew ? 1 : 0;
        default:
          return 0;
      }
    });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            All Products
          </h1>
          <p className="text-gray-600">
            Browse our collection of high-quality products.
          </p>
        </div>

        {/* Search & Filter controls */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <div className="w-full md:w-auto flex-1 relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10"
            />
            {searchQuery ? (
              <button
                className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchQuery("")}
              >
                <X size={16} />
              </button>
            ) : null}
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Search size={18} />
            </button>
          </div>

          <div className="w-full md:w-auto flex items-center gap-3">
            <div className="relative group">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Filter size={16} />
                Filters
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    filterOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>

            <div className="flex-1 md:flex-initial">
              <select
                className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filters panel (can be toggled on mobile) */}
        {filterOpen && (
          <div className="bg-white p-4 rounded-lg shadow-md mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category filter */}
            <div>
              <h3 className="font-medium mb-3 text-gray-800">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <span className="text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price range filter */}
            <div>
              <h3 className="font-medium mb-3 text-gray-800">Price Range</h3>
              <div className="px-2">
                <Slider
                  defaultValue={[0, 500]}
                  max={500}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-6"
                />
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">${priceRange[0]}</span>
                  <span className="text-gray-700">${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Rating filter */}
            <div>
              <h3 className="font-medium mb-3 text-gray-800">Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-gray-700">& up</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} products
          </p>
        </div>

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <SlidersHorizontal
              size={48}
              className="mx-auto mb-4 text-gray-400"
            />
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search term to find what you're
              looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("All Categories");
                setPriceRange([0, 500]);
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-1">
              <Button variant="outline" size="icon" disabled>
                <ChevronDown className="h-4 w-4 rotate-90" />
                <span className="sr-only">Previous page</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-primary text-primary-foreground"
              >
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4 -rotate-90" />
                <span className="sr-only">Next page</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AllProducts;
