import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Check, Trash2, Download } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Order = {
  id: string;
  customer: string;
  status: string;
  total: string;
  date: string;
};

const initialOrders: Order[] = [
  {
    id: "ORD-1001",
    customer: "Samantha Lee",
    status: "Shipped",
    total: "$120.00",
    date: "2025-04-19",
  },
  {
    id: "ORD-1002",
    customer: "Alex Kim",
    status: "Processing",
    total: "$55.00",
    date: "2025-04-20",
  },
  {
    id: "ORD-1003",
    customer: "Michael Chen",
    status: "Delivered",
    total: "$142.99",
    date: "2025-04-17",
  },
];

const statusClass = (status: string) => {
  if (status === "Delivered")
    return "bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium";
  if (status === "Shipped")
    return "bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium";
  if (status === "Processing")
    return "bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium";
  return "";
};

const CATEGORY_MAP = {
  all: "All",
  processing: "Pending",
  shipped: "Placed",
  delivered: "Delivered",
};

const FILTER_ORDER_STATUS = {
  all: () => true,
  processing: (order: Order) => order.status === "Processing",
  shipped: (order: Order) => order.status === "Shipped",
  delivered: (order: Order) => order.status === "Delivered",
};

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [orderCategory, setOrderCategory] =
    useState<keyof typeof CATEGORY_MAP>("all");

  const handleAccept = (id: string) => {
    setOrders((orders) =>
      orders.map((order) =>
        order.id === id ? { ...order, status: "Delivered" } : order
      )
    );
    toast.success("Order accepted and marked as delivered.");
  };

  const handleDelete = (id: string) => {
    setOrders((orders) => orders.filter((order) => order.id !== id));
    toast.success("Order deleted.");
  };

  const handleDownloadInvoice = (orderId: string) => {
    toast.success(`Invoice for ${orderId} downloaded!`);
  };

  const filteredOrders = orders.filter(FILTER_ORDER_STATUS[orderCategory]);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">Orders</h1>
      </div>
      <p className="text-muted-foreground mb-7 max-w-xl">
        Track and manage customer orders here.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <Tabs
              value={orderCategory}
              onValueChange={(v) =>
                setOrderCategory(v as keyof typeof CATEGORY_MAP)
              }
            >
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="processing">Pending</TabsTrigger>
                <TabsTrigger value="shipped">Placed</TabsTrigger>
                <TabsTrigger value="delivered">Delivered</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-muted-foreground"
                  >
                    No orders to show.
                  </TableCell>
                </TableRow>
              ) : (
                filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <span className={statusClass(order.status)}>
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          aria-label="Accept"
                          onClick={() => handleAccept(order.id)}
                          disabled={order.status === "Delivered"}
                        >
                          <Check size={16} className="text-green-600" />
                          Accept
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          aria-label="Download Invoice"
                          onClick={() => handleDownloadInvoice(order.id)}
                        >
                          <Download size={16} className="text-violet-600" />
                          Invoice
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          aria-label="Delete"
                          onClick={() => handleDelete(order.id)}
                        >
                          <Trash2 size={16} />
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOrders;
