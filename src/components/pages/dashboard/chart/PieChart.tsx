import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Course à pieds", sport: 600 },
  { name: "Vélo", sport: 100 },
  { name: "Marche", sport: 240 },
  { name: "Musculation", sport: 320 },
];

const colors = ["#FF8042", "#0088FE", "#00C49F", "#FFBB28"];

export const MyPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <PieChart data={data}>
        <Tooltip />
        <Legend />
        <Pie
          data={data}
          dataKey="sport"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
