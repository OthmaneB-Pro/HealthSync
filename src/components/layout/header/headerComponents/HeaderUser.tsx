import styled from "styled-components";

export default function HeaderUser() {
  return (
    <HeaderUserStyled>
      <h3>Othmane</h3>
      <img src="/img/Photo_de_Profil.PNG" alt="user-logo" />
    </HeaderUserStyled>
  );
}
const HeaderUserStyled = styled.div`
  display: flex;

  img {
    margin-left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid gray;
    cursor: pointer;
    object-fit: cover;
  }
`;
