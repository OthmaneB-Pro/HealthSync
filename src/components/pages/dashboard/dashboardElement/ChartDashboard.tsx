import { useChartStore } from "../../../../stores/useChartStore";
import { MyBarChart } from "../chart/BarChart";
import { MyLineChart } from "../chart/LineChart";
import { MyPieChart } from "../chart/PieChart";

export default function ChartDashboard() {
  const chartType = useChartStore((state) => state.chartType);

  return (
    <>
      {chartType === "weight" && <MyLineChart />}
      {chartType === "sleep" && <MyBarChart />}
      {chartType === "calory" && <MyPieChart />}
    </>
  );
}
