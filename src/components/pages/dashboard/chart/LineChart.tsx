import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { dataLineChart } from "./data/DataChart";

export const MyLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <LineChart data={dataLineChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[60, "auto"]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="poids" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};
