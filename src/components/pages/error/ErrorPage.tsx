import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../reusable-ui/Button";
import { FaHome } from "react-icons/fa";
import Title from "../../reusable-ui/Title";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <ErrorPageStyled>
      <Title label="Aucune page n'a été trouvée !"/>
      <Button Logo={<FaHome />} label="Revenir sur mon dashboard" onClick={() => navigate("/")}/>
    </ErrorPageStyled>
  );
}

const ErrorPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 83vh;
`;
