import styled from "styled-components";
import ListResults from "../../../../../reusable-ui/ListResults";

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
        <ListResults
          key={index}
          onClick={() => handleClick(item)}
          label={item.product_name}
        />
      ))}
    </ListResultsStyled>
  );
}

const ListResultsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
`;
