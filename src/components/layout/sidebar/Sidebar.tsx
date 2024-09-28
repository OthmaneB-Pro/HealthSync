import { TbLogout } from "react-icons/tb";
import styled from "styled-components";
import Button from "../../reusable-ui/Button";
import SidebarMenu from "./sidebarComponents/SidebarMenu";

export default function Sidebar() {
  return (
    <SidebarStyled>
      <SidebarMenu />
      <Button label="Se Déconnecter" Logo={<TbLogout />} />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width: 280px;
  height: 80vh;
`;
