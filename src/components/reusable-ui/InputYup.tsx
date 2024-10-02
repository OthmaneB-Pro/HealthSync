import { ChangeEvent } from "react";
import styled from "styled-components";

type InputWithYupType = {
  type: string;
  placeholder: string;
  register?: any;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export default function InputWithYup({
  type,
  placeholder,
  register,
  name,
  onChange,
  value,
}: InputWithYupType) {
  return (
    <InputWithYupStyled
      type={type}
      placeholder={placeholder}
      {...(register && register(name))}
      onChange={onChange}
      value={value}
    />
  );
}

const InputWithYupStyled = styled.input`
  padding: 20px;
  width: 350px;
  margin-top: 20px;
  border-radius: 15px;
  border: 1px solid;
`;
