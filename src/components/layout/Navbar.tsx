import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, User, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              Vivid<span className="text-secondary">Shop</span>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Home
              </Link>
              <Link
                to="/products/all"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Shop
              </Link>
              <Link
                to="/products/category"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Categories
              </Link>
              <Link
                to="/orders/tracking"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Track Order
              </Link>
            </div>

            {/* Search bar - hide on small screens */}
            <div className="hidden md:flex md:flex-1 mx-8">
              <div className="relative w-full max-w-xl">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pr-10 rounded-full border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search size={18} className="text-gray-400" />
                </span>
              </div>
            </div>
          </div>

          {/* Desktop navigation */}

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/user/profile"
              className="text-gray-700 hover:text-primary"
            >
              <User size={22} />
            </Link>
            <Link
              to="/user/wishlist"
              className="text-gray-700 hover:text-primary"
            >
              <Heart size={22} />
            </Link>
            <Link
              to="/cart/view"
              className="text-gray-700 hover:text-primary relative"
            >
              <ShoppingCart size={22} />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </Badge>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-3 border-t border-gray-200">
            <div className="mt-3 space-y-3">
              <Link
                to="/"
                className="block text-gray-700 hover:text-primary font-medium"
              >
                Home
              </Link>
              <Link
                to="/products/all"
                className="block text-gray-700 hover:text-primary font-medium"
              >
                Shop
              </Link>
              <Link
                to="/products/category"
                className="block text-gray-700 hover:text-primary font-medium"
              >
                Categories
              </Link>
              <Link
                to="/orders/tracking"
                className="block text-gray-700 hover:text-primary font-medium"
              >
                Track Order
              </Link>

              <div className="pt-3 mt-3 border-t border-gray-200">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pr-10 rounded-full border-gray-300"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Search size={18} className="text-gray-400" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
