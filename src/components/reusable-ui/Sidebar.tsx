import { HiHome } from "react-icons/hi";
import { FaPencilAlt, FaRunning } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div>
      <ul>
        <li><a href="/"><HiHome />Dashboard</a></li>
        <li><a href="/"><FaPencilAlt />Suivi des repas</a></li>
        <li><a href="/"><FaRunning />Activité physique</a></li>
        <li><a href="/"><IoSettingsSharp />Paramètres</a></li>
      </ul>
      <div>
        <button><TbLogout />Se déconnecter</button>
      </div>
    </div>
  );
}
