import { MyBarChart } from "../chart/BarChart";
import { MyLineChart } from "../chart/LineChart";
import { MyPieChart } from "../chart/PieChart";
import { DashboardContainerType } from "./container/typeDashboard";

export default function ChartDashboard({
  chartType,
}: Partial<DashboardContainerType>) {
  return (
    <>
      {chartType === "weight" && <MyLineChart />}
      {chartType === "sleep" && <MyBarChart />}
      {chartType === "calory" && <MyPieChart />}
    </>
  );
}
