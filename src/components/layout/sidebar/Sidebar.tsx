import { HiHome } from "react-icons/hi";
import { FaPencilAlt, FaRunning } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import styled from "styled-components";

export default function Sidebar() {
  return (
    <SidebarStyled>
      <ul>
        <li>
          <a href="/">
            <HiHome />
            Dashboard
          </a>
        </li>
        <li>
          <a href="/">
            <FaPencilAlt />
            Suivi des repas
          </a>
        </li>
        <li>
          <a href="/">
            <FaRunning />
            Activité physique
          </a>
        </li>
        <li>
          <a href="/">
            <IoSettingsSharp />
            Paramètres
          </a>
        </li>
      </ul>
      <div>
        <button>
          <TbLogout />
          Se déconnecter
        </button>
      </div>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width: 280px;
  height: 80vh;
  ul {
    padding: 0px;
    li {
      font-family: "Poppins";
      font-size: 18px;
      display: flex;
      align-items: center;
      list-style-type: none;
      height: 35px;
      padding: 10px;
      width: 220px;
      transition: 0.3s ease;
      &:hover {
        background-color: #a11414;
        border-radius: 5px;
        &:hover a {
          transition: 0.3s ease;
          color: white;
        }
      }
      a {
        text-decoration: none;
        color: #5d7285;
        display: flex;
        align-items: center;
      }
    }
  }
  svg {
    width: 30px;
    height: auto;
    margin-right: 10px;
    margin-left: 10px;
  }
  button {
    background-color: #667a8a;
    color: white;
    padding: 15px;
    font-family: "Poppins";
    font-size: 16px;
    width: 240px;
    height: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    border: none;
    &:hover {
      cursor: pointer;
      transition: 0.3s ease;
      background: #a11414;
    }
  }
`;
