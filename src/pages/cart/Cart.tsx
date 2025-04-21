import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";

// Sample cart data
const initialCartItems = [
  {
    id: "p1",
    name: "Wireless Noise-Cancelling Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop",
    quantity: 1,
    color: "Black",
  },
  {
    id: "p3",
    name: "Smart Watch Series 5",
    price: 299.99,
    originalPrice: 349.99,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=150&h=150&fit=crop",
    quantity: 2,
    color: "Silver",
  },
  {
    id: "p7",
    name: "Smartphone Camera Lens Kit",
    price: 49.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=150&h=150&fit=crop",
    quantity: 1,
    color: "Default",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax - promoDiscount;

  // Handle quantity changes
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Apply promo code
  const applyPromoCode = () => {
    // Simple promo code logic for demo purposes
    if (promoCode.toUpperCase() === "SAVE20") {
      const discount = subtotal * 0.2; // 20% discount
      setPromoDiscount(discount);
      setPromoApplied(true);
    } else {
      setPromoDiscount(0);
      setPromoApplied(false);
      alert("Invalid promo code");
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Shopping Cart
          </h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Cart Items ({cartItems.length})
                    </h2>
                  </div>

                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex py-6 px-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-base font-medium text-gray-800">
                                <Link
                                  to={`/products/details/${item.id}`}
                                  className="hover:text-primary"
                                >
                                  {item.name}
                                </Link>
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                Color: {item.color}
                              </p>
                            </div>
                            <p className="text-right font-medium text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>

                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center border rounded-md">
                              <button
                                type="button"
                                className="p-2 text-gray-600 hover:text-gray-900"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-4 py-2 text-gray-900">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                className="p-2 text-gray-600 hover:text-gray-900"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                              >
                                <Plus size={16} />
                              </button>
                            </div>

                            <div className="flex">
                              <button
                                type="button"
                                className="text-gray-500 hover:text-red-500 transition-colors"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                    <Link
                      to="/products/all"
                      className="text-primary hover:text-primary/80 flex items-center gap-2"
                    >
                      <ShoppingCart size={16} />
                      Continue Shopping
                    </Link>

                    <button
                      className="text-red-500 hover:text-red-700 flex items-center gap-2"
                      onClick={() => setCartItems([])}
                    >
                      <X size={16} />
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Order Summary
                    </h2>
                  </div>

                  <div className="px-6 py-4 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900 font-medium">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-gray-900 font-medium">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="text-gray-900 font-medium">
                        ${tax.toFixed(2)}
                      </span>
                    </div>

                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Promo Discount</span>
                        <span>-${promoDiscount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between font-semibold">
                        <span className="text-lg">Total</span>
                        <span className="text-lg text-gray-900">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">
                        Including VAT
                      </p>
                    </div>

                    <div className="pt-2">
                      <label
                        htmlFor="promo-code"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Promo Code
                      </label>
                      <div className="flex space-x-2">
                        <Input
                          id="promo-code"
                          type="text"
                          placeholder="Enter code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <Button
                          variant="outline"
                          onClick={applyPromoCode}
                          disabled={!promoCode}
                        >
                          Apply
                        </Button>
                      </div>
                      {promoApplied && (
                        <p className="text-green-600 text-sm mt-1">
                          Promo code applied!
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="px-6 py-4">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      asChild
                    >
                      <Link to="/cart/checkout">Proceed to Checkout</Link>
                    </Button>

                    <div className="mt-4 text-center text-sm text-gray-500">
                      <p>Secure checkout powered by Stripe</p>
                      <div className="flex justify-center mt-2 space-x-2">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png"
                          alt="Visa"
                          className="h-6"
                        />
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                          alt="Mastercard"
                          className="h-6"
                        />
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"
                          alt="Amex"
                          className="h-6"
                        />
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
                          alt="PayPal"
                          className="h-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <ShoppingCart size={48} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <Link to="/products/all">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
