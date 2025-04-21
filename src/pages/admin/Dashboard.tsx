import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartBar, User, Grid3x3, FileText } from "lucide-react";

const stats = [
  {
    label: "Total Users",
    icon: <User size={32} className="text-primary" />,
    value: "450",
    desc: "Up 5% from last week",
    color: "bg-blue-50",
  },
  {
    label: "Products",
    icon: <Grid3x3 size={32} className="text-primary" />,
    value: "112",
    desc: "3 new products",
    color: "bg-purple-50",
  },
  {
    label: "Orders",
    icon: <FileText size={32} className="text-primary" />,
    value: "398",
    desc: "7 pending deliveries",
    color: "bg-green-50",
  },
];

const chartPlaceholder = (
  <div className="rounded-lg bg-muted flex items-center justify-center h-44">
    <ChartBar size={48} className="text-primary/50" />
    <span className="ml-4 text-lg text-muted-foreground">
      [Chart Placeholder]
    </span>
  </div>
);

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
        Admin Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className={`flex flex-col items-center ${stat.color}`}
          >
            <CardHeader className="flex flex-col items-center pt-6 pb-2">
              {stat.icon}
              <CardTitle className="text-xl mt-1">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center pb-4">
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.desc}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-4 mt-6 text-primary">
        Quick Analytics
      </h2>
      {chartPlaceholder}
    </div>
  );
};

export default Dashboard;
