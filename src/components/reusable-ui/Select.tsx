import styled from "styled-components";
import { SelectType } from "./typeReusable";

export default function Select({
  id,
  label,
  options,
  register,
  error,
}: SelectType) {
  return (
    <SelectStyled>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...register}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p>{error}</p>}
    </SelectStyled>
  );
}

const SelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  select {
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
  label {
    margin-bottom: 15px;
    font-size: 18px;
  }
  p {
    color: red;
  }
`;
