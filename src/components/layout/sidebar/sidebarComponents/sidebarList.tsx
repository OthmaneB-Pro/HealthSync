import { HiHome } from "react-icons/hi";
import { FaPencilAlt, FaRunning } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

export const sidebarList = [
  {
    href: "/",
    Logo: <HiHome />,
    label: "Dashboard",
  },
  {
    href: "/mealTracking",
    Logo: <FaPencilAlt />,
    label: "Suivi des repas",
  },
  {
    href: "/activity",
    Logo: <FaRunning />,
    label: "Activité physique",
  },
  {
    href: "/parameters",
    Logo: <IoSettingsSharp />,
    label: "Paramètres",
  },
];
