import styled from "styled-components";

export default function SearchResults({
  results,
  handleClick,
}: {
  results: any[];
  handleClick: (item: any) => void;
}) {
  return (
    <ListResultsStyled>
      {results.map((item, index) => (
        <li key={index} onClick={() => handleClick(item)}>
          {item.product_name}
        </li>
      ))}
    </ListResultsStyled>
  );
}

const ListResultsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  li {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6), 0 6px 20px rgba(0, 0, 0, 0.1);
    list-style-type: none;
    background: white;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }
`;
