import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <LayoutStyled>
        <Header/>
        <Sidebar/>
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
`