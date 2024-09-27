import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="title">
        <img src="img/HealthSyncLogo.PNG" alt="LogoHealth" />
        <h2>HealthSync</h2>
      </div>
      <div className="user">
        <h3>Othmane</h3>
        <img src="" alt="Z" />
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: green;

  .title {
    display: flex;
    background-color: purple;
    img{
      width: 80px;
      height: auto;
    }
  }
  .user{
    display: flex;

    img{
        width: 50px;
        height: 50px;
        background-color: blue;
    }
  }
`;
