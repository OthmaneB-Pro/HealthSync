import styled from "styled-components";

export default function CloseButton({ setIsOpen }: any) {
  return (
    <ButtonStyled onClick={() => setIsOpen(setIsOpen)}>Fermer</ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  margin-top: 50px;
  background: #a11414;
  color: white;
  padding: 10px;
  font-family: "Poppins";
  font-size: 16px;
  width: 240px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  &:hover {
    cursor: pointer;
    transition: 0.3s ease;
    background: #6e0b0b;
  }
`;
