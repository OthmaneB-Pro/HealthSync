import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { dataPieChart } from "./data/DataChart";
import { colorsPieChart } from "./colors/ColorsChart";

export const MyPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <PieChart data={dataPieChart}>
        <Tooltip />
        <Legend />
        <Pie
          data={dataPieChart}
          dataKey="sport"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          label
        >
          {dataPieChart.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colorsPieChart[index % colorsPieChart.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
