import { useState } from "react";
import DashboardContainer from "./dashboardElement/container/DashboardContainer";
import TextDashboard from "./dashboardElement/TextDashboard";
import ChartDashboard from "./dashboardElement/ChartDashboard";

export default function DashboardPage() {
  const [chartType, setChartType] = useState<"weight" | "sleep" | "calory">(
    "weight"
  );
  return (
    <div>
      <DashboardContainer chartType={chartType} setChartType={setChartType} />
      <TextDashboard />
      <ChartDashboard chartType={chartType} />
    </div>
  );
}
