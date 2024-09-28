import styled from "styled-components";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <LayoutStyled>
      <Header />
      <MainContainer>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </MainContainer>
    </LayoutStyled>
  );
}

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
  overflow: auto;
`;
