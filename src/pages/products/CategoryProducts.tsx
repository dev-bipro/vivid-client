import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FiFilter,
  FiSearch,
  FiX,
  FiChevronDown,
  FiStar,
  FiSliders,
} from "react-icons/fi";
import Layout from "@/components/layout/Layout";

type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  isSale: boolean;
  category: string;
};

const products: Product[] = [
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
    category: "electronics",
  },
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
    category: "clothing",
  },
  // ... (other products from previous examples)
];

const categories = [
  "All Categories",
  "electronics",
  "clothing",
  "home & Kitchen",
  "Beauty",
  "Sports",
  "Accessories",
];

const CategoryPage = () => {
  const { categoryName = "All Categories" } = useParams();
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  // Filter products
  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        categoryName === "All Categories" || product.category === categoryName;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesPrice && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low-high":
          return a.price - b.price;
        case "price-high-low":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1;
        default:
          return 0;
      }
    });

  const clearFilters = () => {
    setPriceRange([0, 500]);
    setSearchQuery("");
  };

  const formatCategoryName = (name: string) => {
    return name === "Home & Kitchen" ? "Home & Kitchen" : name;
  };

  return (
    <Layout className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {formatCategoryName(categoryName)}
          </h1>
          <p className="mt-2 text-gray-600">
            {filteredProducts.length} products
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Filters and search */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <FiX className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                </button>
              )}
            </div>

            {/* Filter and sort controls */}
            <div className="flex gap-3">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FiFilter className="mr-2 h-4 w-4" />
                Filters
                <FiChevronDown
                  className={`ml-2 h-4 w-4 transition-transform ${
                    filterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Expanded filters */}
          {filterOpen && (
            <div className="mt-4 bg-white p-4 rounded-lg shadow border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={categoryName === category}
                          onChange={() =>
                            (window.location.href = `/category/${category}`)
                          }
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <span className="ml-3 text-sm text-gray-700">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Price range
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between space-x-4">
                      <span className="text-sm text-gray-600">
                        ${priceRange[0]}
                      </span>
                      <span className="text-sm text-gray-600">
                        ${priceRange[1]}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([Number(e.target.value), priceRange[1]])
                        }
                        className="w-full"
                      />
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], Number(e.target.value)])
                        }
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Rating filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Rating
                  </h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <div className="ml-3 flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              className={`h-4 w-4 ${
                                i < rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-1 text-sm text-gray-700">
                            & up
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative pb-3/4 h-48">
                  <img
                    className="absolute h-full w-full object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {product.isSale && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Sale
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-1 text-sm text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center">
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through mr-2">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <FiSliders className="h-full w-full" />
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No products found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <div className="mt-6">
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="p-2 border border-gray-300 rounded-md text-gray-400 hover:text-gray-500 disabled:opacity-50">
                <span className="sr-only">Previous</span>
                <FiChevronDown className="h-4 w-4 rotate-90" />
              </button>
              <button className="px-3 py-1 border border-indigo-600 rounded-md text-white bg-indigo-600">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="p-2 border border-gray-300 rounded-md text-gray-400 hover:text-gray-500">
                <span className="sr-only">Next</span>
                <FiChevronDown className="h-4 w-4 -rotate-90" />
              </button>
            </nav>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default CategoryPage;
