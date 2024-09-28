import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function LayoutContent() {
  return (
    <LayoutContentStyled>
      <Outlet />
    </LayoutContentStyled>
  );
}

const LayoutContentStyled = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
  overflow: auto;
`;
