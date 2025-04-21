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
import { Check, Trash2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ReturnOrder = {
  id: string;
  orderId: string;
  customer: string;
  reason: string;
  status: string;
  amount: string;
  date: string;
};

const initialReturns: ReturnOrder[] = [
  {
    id: "RET-1001",
    orderId: "ORD-1001",
    customer: "Samantha Lee",
    reason: "Wrong Size",
    status: "Pending",
    amount: "$120.00",
    date: "2025-04-19",
  },
  {
    id: "RET-1002",
    orderId: "ORD-1002",
    customer: "Alex Kim",
    reason: "Defective Product",
    status: "Accepted",
    amount: "$55.00",
    date: "2025-04-20",
  },
  {
    id: "RET-1003",
    orderId: "ORD-1003",
    customer: "Michael Chen",
    reason: "Changed Mind",
    status: "Delivered",
    amount: "$142.99",
    date: "2025-04-17",
  },
];

const statusClass = (status: string) => {
  if (status === "Delivered")
    return "bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium";
  if (status === "Accepted")
    return "bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium";
  if (status === "Pending")
    return "bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium";
  if (status === "Refunded")
    return "bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium";
  return "";
};

const RETURN_STATUS = {
  requests: "Pending",
  accepted: "Accepted",
  delivered: "Delivered",
  refunded: "Refunded",
};

const OrderReturn = () => {
  const [returns, setReturns] = useState<ReturnOrder[]>(initialReturns);
  const [activeTab, setActiveTab] =
    useState<keyof typeof RETURN_STATUS>("requests");

  const handleAccept = (id: string) => {
    setReturns((returns) =>
      returns.map((returnOrder) =>
        returnOrder.id === id
          ? { ...returnOrder, status: "Accepted" }
          : returnOrder
      )
    );
    toast.success("Return request accepted.");
  };

  const handleDeliver = (id: string) => {
    setReturns((returns) =>
      returns.map((returnOrder) =>
        returnOrder.id === id
          ? { ...returnOrder, status: "Delivered" }
          : returnOrder
      )
    );
    toast.success("Return marked as delivered.");
  };

  const handleRefund = (id: string) => {
    setReturns((returns) =>
      returns.map((returnOrder) =>
        returnOrder.id === id
          ? { ...returnOrder, status: "Refunded" }
          : returnOrder
      )
    );
    toast.success("Refund processed successfully.");
  };

  const handleDelete = (id: string) => {
    setReturns((returns) =>
      returns.filter((returnOrder) => returnOrder.id !== id)
    );
    toast.success("Return request deleted.");
  };

  const filteredReturns = returns.filter(
    (returnOrder) => returnOrder.status === RETURN_STATUS[activeTab]
  );

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Order Returns
        </h1>
      </div>
      <p className="text-muted-foreground mb-7 max-w-xl">
        Manage customer return requests and process refunds.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Returns Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <Tabs
              value={activeTab}
              onValueChange={(v) =>
                setActiveTab(v as keyof typeof RETURN_STATUS)
              }
            >
              <TabsList>
                <TabsTrigger value="requests">Return Requests</TabsTrigger>
                <TabsTrigger value="accepted">Return Accepted</TabsTrigger>
                <TabsTrigger value="delivered">Return Delivered</TabsTrigger>
                <TabsTrigger value="refunded">Money Back</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Return ID</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReturns.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="text-center text-muted-foreground"
                  >
                    No returns to show.
                  </TableCell>
                </TableRow>
              ) : (
                filteredReturns.map((returnOrder) => (
                  <TableRow key={returnOrder.id}>
                    <TableCell>{returnOrder.id}</TableCell>
                    <TableCell>{returnOrder.orderId}</TableCell>
                    <TableCell>{returnOrder.customer}</TableCell>
                    <TableCell>{returnOrder.reason}</TableCell>
                    <TableCell>
                      <span className={statusClass(returnOrder.status)}>
                        {returnOrder.status}
                      </span>
                    </TableCell>
                    <TableCell>{returnOrder.amount}</TableCell>
                    <TableCell>{returnOrder.date}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {returnOrder.status === "Pending" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleAccept(returnOrder.id)}
                          >
                            <Check size={16} className="text-green-600" />
                            Accept
                          </Button>
                        )}
                        {returnOrder.status === "Accepted" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeliver(returnOrder.id)}
                          >
                            <Check size={16} className="text-blue-600" />
                            Deliver
                          </Button>
                        )}
                        {returnOrder.status === "Delivered" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRefund(returnOrder.id)}
                          >
                            <Check size={16} className="text-purple-600" />
                            Refund
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(returnOrder.id)}
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

export default OrderReturn;
