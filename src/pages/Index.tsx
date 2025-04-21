import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Gift, Package, Star, Truck } from "lucide-react";

// Sample data for the homepage
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    title: "New Season Collection",
    subtitle: "Discover the latest trends and styles for this season",
    cta: "Shop Now",
    ctaLink: "/products/all",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    title: "Home Essentials",
    subtitle: "Transform your living space with our premium selection",
    cta: "Explore",
    ctaLink: "/products/category/home",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Tech & Gadgets",
    subtitle: "Stay connected with cutting-edge technology",
    cta: "Browse Tech",
    ctaLink: "/products/category/tech",
  },
];

const categories = [
  {
    id: "clothing",
    name: "Clothing",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&h=500&fit=crop",
    productCount: 120,
  },
  {
    id: "electronics",
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&h=500&fit=crop",
    productCount: 85,
  },
  {
    id: "home",
    name: "Home & Kitchen",
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&h=500&fit=crop",
    productCount: 78,
  },
  {
    id: "beauty",
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop",
    productCount: 63,
  },
  {
    id: "sports",
    name: "Sports",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    productCount: 49,
  },
  {
    id: "toys",
    name: "Toys & Games",
    image:
      "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?w=500&h=500&fit=crop",
    productCount: 54,
  },
];

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
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* Featured Categories */}
      <FeaturedCategories categories={categories} />

      {/* Features Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Truck size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Free shipping on all orders over $50
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Package size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day money back guarantee</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Star size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Top Quality</h3>
              <p className="text-gray-600">
                Premium products, quality guaranteed
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Gift size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Special Offers</h3>
              <p className="text-gray-600">
                New deals and discounts every week
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts products={products} />

      {/* Newsletter */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest updates on new products and special promotions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands/Clients */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Our Trusted Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {["Nike", "Apple", "Samsung", "Sony", "Microsoft"].map((brand) => (
              <div
                key={brand}
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="h-8 flex items-center justify-center">
                  <span className="text-xl font-bold">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
