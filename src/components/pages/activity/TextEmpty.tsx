import styled from "styled-components";

export default function TextEmpty() {
  return <TextEmptyStyled>Pas d'activité enregistrée...</TextEmptyStyled>;
}

const TextEmptyStyled = styled.p`
    font-size: 20px;
    font-family: "Poppins";
    width: 300px;
`;
