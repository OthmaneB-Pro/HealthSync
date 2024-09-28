import { FaCalculator, FaWeight } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";

export const ButtonList = [
  {
    label: "Poids",
    type: "weight",
    logo: <FaWeight />,
  },
  {
    label: "Sommeil",
    type: "sleep",
    logo: <GiNightSleep />,
  },
  {
    label: "Calories",
    type: "calory",
    logo: <FaCalculator />,
  },
];
