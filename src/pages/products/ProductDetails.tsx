import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  Share,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import ProductCard from "@/components/products/ProductCard";

// Sample product data (would normally come from an API)
const product = {
  id: "p3",
  name: "Smart Watch Series 5",
  price: 299.99,
  originalPrice: 349.99,
  discount: 15,
  images: [
    "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop",
  ],
  colors: ["Black", "Silver", "Gold"],
  rating: 4.9,
  reviews: 521,
  stock: 24,
  sku: "SW-5001-BLK",
  description:
    "Experience the latest in wearable technology with our Smart Watch Series 5. This premium smartwatch features an always-on Retina display, advanced health monitoring capabilities, and seamless connectivity with your other devices. Perfect for fitness enthusiasts and tech-savvy individuals alike.",
  features: [
    "Always-on Retina display",
    "Water resistant up to 50 meters",
    "Heart rate monitoring",
    "GPS and cellular connectivity",
    "Up to 18 hours of battery life",
    "Fitness and workout tracking",
    "ECG app capability",
    "Fall detection and emergency SOS",
  ],
  specifications: {
    Display: "1.78-inch OLED",
    Connectivity: "Wi-Fi, Bluetooth 5.0, NFC",
    "Battery Life": "Up to 18 hours",
    "Water Resistance": "50 meters",
    Sensors: "Accelerometer, Gyroscope, Heart Rate, Compass",
    Compatibility: "iOS 14 or later",
    Storage: "32GB",
    Dimensions: "44mm x 38mm x 10.7mm",
    Weight: "36g",
  },
  category: "Electronics",
  tags: ["smartwatch", "wearable", "technology", "fitness"],
};

// Related products
const relatedProducts = [
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
];

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images[0]);

  // Increment/decrement quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <a href="/" className="text-gray-500 hover:text-primary">
              Home
            </a>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <a
              href="/products/all"
              className="text-gray-500 hover:text-primary"
            >
              Products
            </a>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <a
              href={`/products/category/${product.category.toLowerCase()}`}
              className="text-gray-500 hover:text-primary"
            >
              {product.category}
            </a>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-700 font-medium">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Product Images */}
          <div>
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                    mainImage === image
                      ? "border-primary"
                      : "border-transparent hover:border-gray-300"
                  }`}
                  onClick={() => setMainImage(image)}
                >
                  <img
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : i < product.rating
                        ? "text-yellow-400 fill-yellow-400 opacity-50"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-700">{product.rating}</span>
              <span className="mx-2 text-gray-400">•</span>
              <a href="#reviews" className="text-gray-600 hover:text-primary">
                {product.reviews} Reviews
              </a>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-900 mr-3">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-500 line-through mr-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                      {product.discount}% off
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Stock status */}
            <div className="flex items-center mb-6">
              <div
                className={`px-3 py-1 rounded-full text-sm flex items-center ${
                  product.stock > 0
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.stock > 0 ? (
                  <>
                    <CheckCircle size={14} className="mr-1" />
                    <span>In Stock ({product.stock} available)</span>
                  </>
                ) : (
                  <span>Out of Stock</span>
                )}
              </div>
            </div>

            {/* Short description */}
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Color selector */}
            <div className="mb-6">
              <h3 className="text-gray-700 font-medium mb-3">
                Color: <span className="font-normal">{selectedColor}</span>
              </h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                      selectedColor === color
                        ? "border-primary"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <span
                      className="w-8 h-8 rounded-full"
                      style={{
                        backgroundColor:
                          color.toLowerCase() === "silver"
                            ? "#C0C0C0"
                            : color.toLowerCase() === "gold"
                            ? "#FFD700"
                            : color.toLowerCase(),
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity selector */}
            <div className="mb-6">
              <h3 className="text-gray-700 font-medium mb-3">Quantity</h3>
              <div className="flex items-center">
                <button
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100 focus:outline-none"
                  onClick={decrementQuantity}
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  className="w-16 h-10 border-y border-gray-300 text-center focus:outline-none"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  min="1"
                  max={product.stock}
                />
                <button
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100 focus:outline-none"
                  onClick={incrementQuantity}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 py-6">
                <ShoppingCart size={20} />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 px-5"
              >
                <Heart size={20} />
                <span className="hidden sm:inline">Wishlist</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 px-5"
              >
                <Share size={20} />
                <span className="hidden sm:inline">Share</span>
              </Button>
            </div>

            {/* Additional info */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <Truck size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-800">
                    Free Shipping & Returns
                  </h4>
                  <p className="text-sm text-gray-600">
                    Free shipping on orders over $50
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <CheckCircle size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-800">
                    2 Year Warranty
                  </h4>
                  <p className="text-sm text-gray-600">
                    Full coverage for peace of mind
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <ShoppingCart size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-800">
                    Secure Checkout
                  </h4>
                  <p className="text-sm text-gray-600">
                    100% protected payments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">
                Reviews ({product.reviews})
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="description"
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">
                Product Description
              </h3>
              <p className="text-gray-700 mb-6">{product.description}</p>

              <h4 className="text-lg font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="text-primary mt-1 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent
              value="specifications"
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">
                Technical Specifications
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(
                      ([key, value], index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="py-3 px-4 border-b border-gray-200 font-medium text-gray-700 w-1/3">
                            {key}
                          </td>
                          <td className="py-3 px-4 border-b border-gray-200 text-gray-700">
                            {value}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent
              value="reviews"
              id="reviews"
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-semibold mb-4">
                    Customer Reviews
                  </h3>
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={`${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : i < product.rating
                                ? "text-yellow-400 fill-yellow-400 opacity-50"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-semibold">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      Based on {product.reviews} reviews
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((star) => {
                      // Mock data for review distribution
                      const percentage =
                        star === 5
                          ? 76
                          : star === 4
                          ? 18
                          : star === 3
                          ? 4
                          : star === 2
                          ? 1
                          : 1;
                      return (
                        <div key={star} className="flex items-center">
                          <div className="flex items-center w-24">
                            <span className="text-sm mr-2">{star}</span>
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={12}
                                className={`${
                                  i < star
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full ml-3 mr-2">
                            <div
                              className="h-2 bg-yellow-400 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-12">
                            {percentage}%
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6">
                    <Button>Write a Review</Button>
                  </div>
                </div>

                <div className="md:w-2/3">
                  {/* Sample review item */}
                  <div className="mb-8 border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-semibold">John D.</h4>
                      <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < 5
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <h5 className="font-medium mb-2">
                      Outstanding quality and functionality
                    </h5>
                    <p className="text-gray-700 mb-4">
                      This watch exceeded my expectations. The display is
                      crystal clear even in bright sunlight, and the battery
                      lasts much longer than advertised. The health tracking
                      features are incredibly accurate, and the build quality
                      feels very premium. Highly recommended!
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <button className="flex items-center hover:text-primary">
                        <CheckCircle size={14} className="mr-1" />
                        Helpful (24)
                      </button>
                      <span className="mx-3">•</span>
                      <button className="hover:text-primary">Reply</button>
                    </div>
                  </div>

                  {/* Sample review item */}
                  <div className="mb-8 border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-semibold">Sara M.</h4>
                      <span className="text-gray-500 text-sm">1 week ago</span>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < 4
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <h5 className="font-medium mb-2">
                      Great smartwatch with minor issues
                    </h5>
                    <p className="text-gray-700 mb-4">
                      I've been using this watch for a week now and I'm mostly
                      impressed. The fitness tracking is accurate and the
                      notification system works well. My only complaint is that
                      the battery drains a bit faster than expected when using
                      GPS features. Otherwise, it's a great product.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <button className="flex items-center hover:text-primary">
                        <CheckCircle size={14} className="mr-1" />
                        Helpful (12)
                      </button>
                      <span className="mx-3">•</span>
                      <button className="hover:text-primary">Reply</button>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button variant="outline">Load More Reviews</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
