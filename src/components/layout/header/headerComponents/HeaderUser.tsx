import styled from "styled-components";

export default function HeaderUser() {
  return (
    <HeaderUserStyled>
      <h3>Othmane</h3>
      <img src="" alt="user-logo" />
    </HeaderUserStyled>
  );
}
const HeaderUserStyled = styled.div`
  display: flex;

  img {
    margin-left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 40px;
    background-color: grey;
    cursor: pointer;
  }
`;
