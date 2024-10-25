import styled from "styled-components";

export default function TextDashboard() {
  return <TextStyled>Il faut augmenter vos heures de sommeil !</TextStyled>;
}

const TextStyled = styled.p`
  color: red;
  margin-bottom: 45px;
`;
