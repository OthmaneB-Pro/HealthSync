import styled from "styled-components";
import HeaderTitle from "./headerComponents/HeaderTitle";
import HeaderUser from "./headerComponents/HeaderUser";

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderTitle />
      <HeaderUser />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  margin: 0px 15px 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  color: #5d7285;
  font-family: "Epilogue";
`;
