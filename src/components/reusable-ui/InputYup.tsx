import styled from "styled-components";

type InputWithYupType = {
  type: string;
  placeholder: string;
  register: any;
  name: string;
  value? : string;
};

export default function InputWithYup({
  type,
  placeholder,
  register,
  name,
  value,
}: InputWithYupType) {
  return (
    <InputWithYupStyled
      type={type}
      placeholder={placeholder}
      {...register(name)}
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