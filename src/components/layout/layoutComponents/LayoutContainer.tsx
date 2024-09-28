import styled from "styled-components";
import Sidebar from "../sidebar/Sidebar";
import LayoutContent from "./LayoutContent";

export default function LayoutContainer() {
  return (
    <LayoutContainerStyled>
      <Sidebar />
      <LayoutContent />
    </LayoutContainerStyled>
  );
}
const LayoutContainerStyled = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;
