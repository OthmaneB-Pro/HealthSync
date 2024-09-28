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

const data = [
  { name: "Jan", poids: 60 },
  { name: "Feb", poids: 63 },
  { name: "Mar", poids: 62 },
  { name: "Avr", poids: 62 },
  { name: "Mai", poids: 65 },
  { name: "Juin", poids: 63 },
  { name: "Juil", poids: 65 },
  { name: "Août", poids: 67 },
  { name: "Sept", poids: 69 },
  { name: "Oct", poids: 72 },
  { name: "Nov", poids: 70 },
  { name: "Dec", poids: 71 },
];

export const MyLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <LineChart data={data}>
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
