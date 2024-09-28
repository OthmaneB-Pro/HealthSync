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

const data = [
  { name: "Lundi", Heure_De_Sommeil: 6 },
  { name: "Mardi", Heure_De_Sommeil: 8 },
  { name: "Mercredi", Heure_De_Sommeil: 5 },
  { name: "Jeudi", Heure_De_Sommeil: 10 },
  { name: "Vendredi", Heure_De_Sommeil: 7 },
  { name: "Samedi", Heure_De_Sommeil: 12 },
  { name: "Dimanche", Heure_De_Sommeil: 6 },
];

const getBarColor = (hours: number) => {
  if (hours < 6) return "#FF0000";
  if (hours >= 6 && hours <= 8) return "#FFA500";
  return "#008000";
};

export const MyBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[1, 15]} />
        <Tooltip />
        <Legend />
        <Bar type="monotone" dataKey="Heure_De_Sommeil">
          {data.map((entry, index) => (
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
