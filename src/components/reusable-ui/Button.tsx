import styled from "styled-components";

type ButtonType = {
  Logo: JSX.Element;
  label: string;
  onClick?: () => void;
  className? : string;
};

export default function Button({ Logo, label, onClick, className }: ButtonType) {
  return (
    <ButtonStyled className={className} onClick={onClick}>
      {Logo && Logo}
      {label}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: #667a8a;
  color: white;
  padding: 15px;
  font-family: "Poppins";
  font-size: 16px;
  width: 240px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  border: none;
  &:hover {
    cursor: pointer;
    transition: 0.3s ease;
    background: #a11414;
  }
  svg {
    width: 30px;
    height: auto;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
