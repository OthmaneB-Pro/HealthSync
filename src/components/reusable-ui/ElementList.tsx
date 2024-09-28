import styled from "styled-components";

type ElementListType = {
  href: string;
  Logo: JSX.Element;
  label: string;
};

export default function ElementList({ href, Logo, label }: ElementListType) {
  return (
    <ElementListStyled>
      <a href={href}>
        {Logo && Logo}
        {label}
      </a>
    </ElementListStyled>
  );
}

const ElementListStyled = styled.li`
  font-family: "Poppins";
  font-size: 18px;
  display: flex;
  align-items: center;
  list-style-type: none;
  height: 35px;
  padding: 10px;
  width: 220px;
  transition: 0.3s ease;
  &:hover {
    background-color: #a11414;
    border-radius: 5px;
    &:hover a {
      transition: 0.3s ease;
      color: white;
    }
  }
  a {
    text-decoration: none;
    color: #5d7285;
    display: flex;
    align-items: center;
  }
  svg {
    width: 30px;
    height: auto;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
