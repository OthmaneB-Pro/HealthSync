import styled from "styled-components";
import ElementList from "../../../reusable-ui/ElementList";
import { sidebarList } from "./../sidebarComponents/sidebarList";

export default function SidebarMenu() {
  return (
    <SidebarMenuStyled>
      {sidebarList.map((list, index) => (
        <ElementList
          key={index}
          href={list.href}
          label={list.label}
          Logo={list.Logo}
          className={window.location.pathname === list.href ? "active-button" : ""}
        />
      ))}
    </SidebarMenuStyled>
  );
}
const SidebarMenuStyled = styled.ul`
  padding: 0px;

  .active-button {
      background-color: #a11414;
      border-radius: 5px;
      a{
      color: white;
      }
  }
`;
