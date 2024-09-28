import styled from "styled-components";
import Header from "./header/Header";
import LayoutContainer from "./layoutComponents/LayoutContainer";

export default function Layout() {
  return (
    <LayoutStyled>
      <Header />
      <LayoutContainer />
    </LayoutStyled>
  );
}

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
