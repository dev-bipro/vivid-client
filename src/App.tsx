import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import AllProducts from "@/pages/products/AllProducts";
import ProductDetails from "@/pages/products/ProductDetails";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Cart from "@/pages/cart/Cart";
import Checkout from "@/pages/cart/Checkout";
import TrackOrder from "@/pages/orders/TrackOrder";
import Profile from "@/pages/user/Profile";
import EditProfile from "@/pages/user/EditProfile";
import AdminAll from "@/pages/admin/AdminAll";
import Dashboard from "@/pages/admin/Dashboard";
import AdminProducts from "@/pages/admin/AdminProducts";
import AdminOrders from "@/pages/admin/AdminOrders";
import OrderReturn from "@/pages/admin/OrderReturn";
import CategoryPage from "@/pages/products/CategoryProducts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/all" element={<AllProducts />} />
          <Route
            path="/products/all/:categoryName"
            element={<CategoryPage />}
          />
          <Route path="/products/details/:id" element={<ProductDetails />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/cart/view" element={<Cart />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route path="/orders/tracking" element={<TrackOrder />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/profile/edit" element={<EditProfile />} />
          <Route path="/admin/all" element={<AdminAll />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/orders/return" element={<OrderReturn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
