import styled from "styled-components";
import { useFormStore } from "../../../../stores/useFormStore";

export default function FormUpdateCard() {
    const {setIsOpen} = useFormStore()
  return (
    <BackgroundStyled>
      <FormStyled>
        <button onClick={() => setIsOpen(false)}>
            Fermer le bouton
        </button>
      </FormStyled>
    </BackgroundStyled>
  );
}

const BackgroundStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const FormStyled = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f9f9f9;
  width: 700px;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1001;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
