import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Reuse the same product array from AllProducts for demonstration.
// In a real app, this data comes from your backend.
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

const AdminProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          All Products
        </h1>
        <Button
          variant="default"
          onClick={() => {
            /* Future: Add New Product */
          }}
        >
          Add Product
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Sale</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-12 w-12 rounded object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <span className="font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-500 text-xs ml-2 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {product.isSale ? (
                    <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700 font-medium">
                      On Sale
                    </span>
                  ) : (
                    <span className="inline-block px-2 py-1 text-xs text-gray-500">
                      —
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <span className="font-medium">{product.rating}</span>{" "}
                  <span className="text-xs text-gray-400">
                    ({product.reviews})
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        /* Future: Edit logic */
                      }}
                    >
                      <Pencil size={16} className="text-blue-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        /* Future: Delete logic */
                      }}
                    >
                      <Trash size={16} className="text-red-600" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminProducts;
