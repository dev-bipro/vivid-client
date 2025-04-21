import { CalendarCheck, Truck, Package, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const orderSteps = [
  {
    icon: <Package className="text-primary" size={32} />,
    label: "Order Placed",
    date: "2025-04-19",
    done: true,
  },
  {
    icon: <Truck className="text-primary" size={32} />,
    label: "Shipped",
    date: "2025-04-20",
    done: true,
  },
  {
    icon: <MapPin className="text-primary" size={32} />,
    label: "Out for Delivery",
    date: "Expected: 2025-04-21",
    done: false,
  },
  {
    icon: <CalendarCheck className="text-primary" size={32} />,
    label: "Delivered",
    date: "-",
    done: false,
  },
];

const TrackOrder = () => {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
        Track Your Order
      </h1>
      <p className="text-muted-foreground mb-8 max-w-lg">
        Enter your order number to see the latest status and delivery updates.
      </p>
      {/* The order input form */}
      <form className="flex flex-col md:flex-row gap-3 mb-10">
        <input
          type="text"
          placeholder="Enter order number"
          className="border border-gray-300 rounded-md px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button type="submit" className="md:w-auto w-full">
          Track Order
        </Button>
      </form>

      {/* Order tracking progress timeline */}
      <div className="bg-white rounded-xl shadow-md px-6 py-7">
        <div className="flex flex-col gap-7">
          {orderSteps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-5">
              <div
                className={`h-12 w-12 flex items-center justify-center rounded-full border-2
                  ${
                    step.done
                      ? "border-primary bg-secondary"
                      : "border-gray-200 bg-gray-50"
                  }
                `}
              >
                {step.icon}
              </div>
              <div className="flex-1">
                <div
                  className={`font-semibold text-lg ${
                    step.done ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {step.label}
                </div>
                <div className="text-sm text-muted-foreground">{step.date}</div>
              </div>
              {idx < orderSteps.length - 1 && (
                <span className="hidden md:block w-12 border-t border-dashed border-gray-300"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
