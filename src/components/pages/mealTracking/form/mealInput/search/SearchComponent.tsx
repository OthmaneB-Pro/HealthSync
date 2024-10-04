import { useState } from "react";
import { SearchComponentProps } from "../../typeForm";
import styled from "styled-components";
import InputWithYup from "../../../../../reusable-ui/InputYup";
import Button from "../../../../../reusable-ui/Button";
import { FaSearch } from "react-icons/fa";
import { fetchResults } from "../../../../../../api/MealAndActivityResults";

export default function SearchComponent({ setResults }: SearchComponentProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <SearchStyled>
      <InputWithYup
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Recherchez un ingrédient"
      />
      <Button
        label="Recherchez"
        Logo={<FaSearch />}
        onClick={() => fetchResults(setResults, searchTerm)}
      />
    </SearchStyled>
  );
}

const SearchStyled = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  input {
    width: 200px;
    margin-bottom: 15px;
  }
`;
