import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { dataBarChart } from "./data/DataChart";
import { getBarColor } from "./colors/ColorsChart";

export const MyBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={dataBarChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[1, 15]} />
        <Tooltip />
        <Legend />
        <Bar type="monotone" dataKey="Heure_De_Sommeil">
          {dataBarChart.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={getBarColor(entry.Heure_De_Sommeil)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
