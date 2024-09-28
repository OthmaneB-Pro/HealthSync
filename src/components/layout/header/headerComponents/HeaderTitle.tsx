import styled from "styled-components";

export default function HeaderTitle() {
  return (
    <HeaderTitleStyled>
      <img src="img/HealthSyncLogo.PNG" alt="LogoHealth" />
      <h2>HealthSync</h2>
    </HeaderTitleStyled>
  );
}

const HeaderTitleStyled = styled.div`
  display: flex;
  img {
    margin-right: 15px;
    width: 80px;
    height: auto;
    cursor: pointer;
  }
`;
