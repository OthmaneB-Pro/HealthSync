import { useState } from "react";
import { SearchComponentProps } from "../../typeForm";
import styled from "styled-components";
import InputWithYup from "../../../../../reusable-ui/InputYup";
import Button from "../../../../../reusable-ui/Button";
import { FaSearch } from "react-icons/fa";

export default function SearchComponent({ setResults }: SearchComponentProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchResults = async () => {
    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1`
      );
      const data = await response.json();
      setResults(data.products.slice(0, 3));
    } catch (error) {
      console.error("Erreur lors de la récupération des données", error);
    }
  };

  return (
    <SearchStyled>
      <InputWithYup
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Recherchez un ingrédient"
      />
      <Button label="Recherchez" Logo={<FaSearch />} onClick={fetchResults} />
    </SearchStyled>
  );
}

const SearchStyled = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  input {
    width: 200px;
    margin-bottom: 15px;
  }
`;
