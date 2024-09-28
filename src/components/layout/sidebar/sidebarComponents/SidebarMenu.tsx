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
        />
      ))}
    </SidebarMenuStyled>
  );
}
const SidebarMenuStyled = styled.ul`
  padding: 0px;
`;
