import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronRight,
  CreditCard,
  Lock,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Truck,
  User,
} from "lucide-react";

// Sample cart data
const cartItems = [
  {
    id: "p1",
    name: "Wireless Noise-Cancelling Headphones",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop",
    quantity: 1,
    color: "Black",
  },
  {
    id: "p3",
    name: "Smart Watch Series 5",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=150&h=150&fit=crop",
    quantity: 2,
    color: "Silver",
  },
  {
    id: "p7",
    name: "Smartphone Camera Lens Kit",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=150&h=150&fit=crop",
    quantity: 1,
    color: "Default",
  },
];

const Checkout = () => {
  const [step, setStep] = useState(1);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax rate
  const total: number = subtotal + shipping + tax;

  // Shipping form state
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    saveInfo: false,
  });

  // Payment form state
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    sameAsShipping: true,
  });

  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Checkout
            </h1>

            {/* Checkout progress */}
            <div className="flex items-center max-w-2xl mx-auto mb-8">
              <div
                className={`flex flex-col items-center ${
                  step >= 1 ? "text-primary" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    step >= 1
                      ? "border-primary bg-primary text-white"
                      : "border-gray-300"
                  }`}
                >
                  <MapPin size={18} />
                </div>
                <span className="text-sm mt-1">Shipping</span>
              </div>

              <div
                className={`flex-1 h-1 mx-2 ${
                  step >= 2 ? "bg-primary" : "bg-gray-300"
                }`}
              ></div>

              <div
                className={`flex flex-col items-center ${
                  step >= 2 ? "text-primary" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    step >= 2
                      ? "border-primary bg-primary text-white"
                      : "border-gray-300"
                  }`}
                >
                  <CreditCard size={18} />
                </div>
                <span className="text-sm mt-1">Payment</span>
              </div>

              <div
                className={`flex-1 h-1 mx-2 ${
                  step >= 3 ? "bg-primary" : "bg-gray-300"
                }`}
              ></div>

              <div
                className={`flex flex-col items-center ${
                  step >= 3 ? "text-primary" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    step >= 3
                      ? "border-primary bg-primary text-white"
                      : "border-gray-300"
                  }`}
                >
                  <ShieldCheck size={18} />
                </div>
                <span className="text-sm mt-1">Confirmation</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left column: Checkout steps */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {/* Step 1: Shipping Information */}
                  {step === 1 && (
                    <div>
                      <div className="border-b border-gray-200 px-6 py-4">
                        <h2 className="text-lg font-semibold flex items-center">
                          <MapPin size={18} className="mr-2 text-primary" />
                          Shipping Information
                        </h2>
                      </div>

                      <form onSubmit={handleShippingSubmit} className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              First Name *
                            </label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={shippingInfo.firstName}
                              onChange={handleShippingInfoChange}
                              required
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Last Name *
                            </label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={shippingInfo.lastName}
                              onChange={handleShippingInfoChange}
                              required
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={shippingInfo.email}
                              onChange={handleShippingInfoChange}
                              required
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Phone Number *
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={shippingInfo.phone}
                              onChange={handleShippingInfoChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Street Address *
                            </label>
                            <Input
                              id="address"
                              name="address"
                              value={shippingInfo.address}
                              onChange={handleShippingInfoChange}
                              required
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="apartment"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Apartment, Suite, etc. (optional)
                            </label>
                            <Input
                              id="apartment"
                              name="apartment"
                              value={shippingInfo.apartment}
                              onChange={handleShippingInfoChange}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                City *
                              </label>
                              <Input
                                id="city"
                                name="city"
                                value={shippingInfo.city}
                                onChange={handleShippingInfoChange}
                                required
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="state"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                State/Province *
                              </label>
                              <Input
                                id="state"
                                name="state"
                                value={shippingInfo.state}
                                onChange={handleShippingInfoChange}
                                required
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="zipCode"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                ZIP/Postal Code *
                              </label>
                              <Input
                                id="zipCode"
                                name="zipCode"
                                value={shippingInfo.zipCode}
                                onChange={handleShippingInfoChange}
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Country *
                            </label>
                            <select
                              id="country"
                              name="country"
                              value={shippingInfo.country}
                              onChange={(e) =>
                                setShippingInfo((prev) => ({
                                  ...prev,
                                  country: e.target.value,
                                }))
                              }
                              className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              required
                            >
                              <option value="United States">
                                United States
                              </option>
                              <option value="Canada">Canada</option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="Australia">Australia</option>
                              <option value="Germany">Germany</option>
                              <option value="France">France</option>
                            </select>
                          </div>

                          <div className="flex items-start">
                            <Checkbox
                              id="saveInfo"
                              checked={shippingInfo.saveInfo}
                              onCheckedChange={(checked) =>
                                setShippingInfo((prev) => ({
                                  ...prev,
                                  saveInfo: checked as boolean,
                                }))
                              }
                              className="mt-1"
                            />
                            <label
                              htmlFor="saveInfo"
                              className="ml-2 text-sm text-gray-700"
                            >
                              Save this information for next time
                            </label>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                          <Button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 text-white"
                          >
                            Continue to Payment
                          </Button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Step 2: Payment */}
                  {step === 2 && (
                    <div>
                      <div className="border-b border-gray-200 px-6 py-4">
                        <h2 className="text-lg font-semibold flex items-center">
                          <CreditCard size={18} className="mr-2 text-primary" />
                          Payment Method
                        </h2>
                      </div>

                      <form onSubmit={handlePaymentSubmit} className="p-6">
                        <div className="mb-6">
                          <div className="mb-4">
                            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md border border-gray-200">
                              <div className="flex items-center">
                                <input
                                  type="radio"
                                  id="credit-card"
                                  name="payment-method"
                                  checked
                                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                                />
                                <label
                                  htmlFor="credit-card"
                                  className="ml-2 text-gray-700 font-medium"
                                >
                                  Credit / Debit Card
                                </label>
                              </div>
                              <div className="flex space-x-2">
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
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <label
                                htmlFor="cardName"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Name on Card *
                              </label>
                              <Input
                                id="cardName"
                                name="cardName"
                                value={paymentInfo.cardName}
                                onChange={handlePaymentInfoChange}
                                required
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="cardNumber"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Card Number *
                              </label>
                              <Input
                                id="cardNumber"
                                name="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                value={paymentInfo.cardNumber}
                                onChange={handlePaymentInfoChange}
                                required
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label
                                  htmlFor="expiryDate"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Expiration Date (MM/YY) *
                                </label>
                                <Input
                                  id="expiryDate"
                                  name="expiryDate"
                                  placeholder="MM/YY"
                                  value={paymentInfo.expiryDate}
                                  onChange={handlePaymentInfoChange}
                                  required
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="cvv"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  CVV *
                                </label>
                                <Input
                                  id="cvv"
                                  name="cvv"
                                  placeholder="123"
                                  value={paymentInfo.cvv}
                                  onChange={handlePaymentInfoChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start mb-6">
                          <Checkbox
                            id="sameAsShipping"
                            checked={paymentInfo.sameAsShipping}
                            onCheckedChange={(checked) =>
                              setPaymentInfo((prev) => ({
                                ...prev,
                                sameAsShipping: checked as boolean,
                              }))
                            }
                            className="mt-1"
                          />
                          <label
                            htmlFor="sameAsShipping"
                            className="ml-2 text-sm text-gray-700"
                          >
                            Billing address is the same as shipping address
                          </label>
                        </div>

                        <div className="flex items-center bg-blue-50 p-4 rounded-md border border-blue-200 mb-6">
                          <Lock size={18} className="text-blue-500 mr-2" />
                          <p className="text-sm text-blue-700">
                            All transactions are secure and encrypted. Your
                            credit card information is never stored.
                          </p>
                        </div>

                        <div className="flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setStep(1)}
                          >
                            Back to Shipping
                          </Button>

                          <Button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 text-white"
                          >
                            Complete Order
                          </Button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Step 3: Confirmation */}
                  {step === 3 && (
                    <div className="p-8 text-center">
                      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck size={24} className="text-green-600" />
                      </div>

                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Thank You for Your Order!
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Your order has been placed and will be processed soon.
                      </p>

                      <div className="bg-gray-50 rounded-md p-4 mb-6 inline-block">
                        <p className="text-gray-700 font-medium">
                          Order #: VIV-87429
                        </p>
                        <p className="text-gray-500 text-sm">
                          A confirmation email has been sent to{" "}
                          {shippingInfo.email}
                        </p>
                      </div>

                      <div className="flex justify-center space-x-4">
                        <Button variant="outline" asChild>
                          <Link to="/orders/tracking">
                            <Truck size={18} className="mr-2" />
                            Track Order
                          </Link>
                        </Button>

                        <Button
                          className="bg-primary hover:bg-primary/90 text-white"
                          asChild
                        >
                          <Link to="/">
                            <ShoppingBag size={18} className="mr-2" />
                            Continue Shopping
                          </Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right column: Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Order Summary
                    </h2>
                  </div>

                  <div className="px-6 py-4">
                    <div className="max-h-80 overflow-y-auto mb-4">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex py-4 border-b border-gray-100 last:border-b-0"
                        >
                          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-sm font-medium text-gray-800">
                                  {item.name}
                                </h3>
                                <p className="mt-1 text-xs text-gray-500">
                                  Color: {item.color} | Qty: {item.quantity}
                                </p>
                              </div>
                              <p className="text-sm font-medium text-gray-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 py-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Subtotal</span>
                        <span className="text-sm text-gray-900 font-medium">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Shipping</span>
                        <span className="text-sm text-gray-900 font-medium">
                          {shipping === 0
                            ? "Free"
                            : `$${Number(shipping).toFixed(2)}`}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Tax</span>
                        <span className="text-sm text-gray-900 font-medium">
                          ${tax.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span className="text-lg text-gray-900">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
