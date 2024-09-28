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
        <img src="" alt="user-logo" />
      </div>
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
  .title {
    display: flex;
    img {
      margin-right: 15px;
      width: 80px;
      height: auto;
      cursor: pointer;
    }
  }
  .user {
    display: flex;

    img {
      margin-left: 15px;
      width: 50px;
      height: 50px;
      border-radius: 40px;
      background-color: grey;
      cursor: pointer;
    }
  }
`;
