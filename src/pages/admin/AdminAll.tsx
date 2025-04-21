import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  User,
  FileText,
  LayoutDashboard,
  Settings,
  Grid3x3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const adminCards = [
  {
    title: "Users",
    icon: <User size={28} />,
    description: "Manage all users, roles, and access",
    to: "/admin/users",
  },
  {
    title: "Products",
    icon: <Grid3x3 size={28} />,
    description: "View and manage all products",
    to: "/admin/products",
  },
  {
    title: "Orders",
    icon: <FileText size={28} />,
    description: "Track and manage customer orders",
    to: "/admin/orders",
  },
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={28} />,
    description: "Admin dashboard overview",
    to: "/admin/dashboard",
  },
  {
    title: "Settings",
    icon: <Settings size={28} />,
    description: "Admin related settings and configurations",
    to: "/admin/settings",
  },
];

const AdminAll = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
        Admin Panel Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {adminCards.map((card) => (
          <Card
            key={card.title}
            className="hover:shadow-lg transition-shadow duration-200 animate-fade-in flex flex-col"
          >
            <CardHeader className="flex flex-col items-center">
              <div className="mb-2 text-primary">{card.icon}</div>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center text-center pb-6">
              <p className="text-gray-500 mb-4">{card.description}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(card.to)}
                className="w-full"
                disabled={
                  card.title !== "Dashboard" && card.title !== "Products"
                }
              >
                Manage
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminAll;
