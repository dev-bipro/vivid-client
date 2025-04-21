import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
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

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  isNew = false,
  isSale = false,
  category,
}: ProductCardProps) => {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Product badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {isNew && <Badge className="bg-accent text-white">New</Badge>}
        {isSale && originalPrice && (
          <Badge className="bg-secondary text-secondary-foreground font-semibold">
            -{discount}%
          </Badge>
        )}
      </div>

      {/* Wishlist button */}
      <button className="absolute top-2 right-2 z-10 bg-white/80 p-1.5 rounded-full shadow-sm hover:bg-primary/10 transition-colors duration-200">
        <Heart
          size={18}
          className="text-gray-600 hover:text-primary transition-colors"
        />
      </button>

      {/* Product image */}
      <Link to={`/products/details/${id}`}>
        <div className="h-48 md:h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Product details */}
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        <Link to={`/products/details/${id}`}>
          <h3 className="font-medium text-gray-800 mb-1 hover:text-primary transition-colors duration-200 line-clamp-2">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : i < rating
                    ? "text-yellow-400 fill-yellow-400 opacity-50"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center mb-3">
          <span className="font-semibold text-gray-900">
            ${price?.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-gray-500 text-sm line-through ml-2">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to cart button */}
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
          size="sm"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
