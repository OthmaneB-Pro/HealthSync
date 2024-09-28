import Button from "../../../../reusable-ui/Button";
import styled from "styled-components";
import { ButtonList } from "./ButtonList";
import { useChartStore } from "../../../../../stores/useChartStore";

export default function ButtonContainer() {
  const chartType = useChartStore((state) => state.chartType);
  const setChartType = useChartStore((state) => state.setChartType);

  return (
    <ButtonContainerStyled>
      {ButtonList.map((button) => (
        <Button
          key={button.type}
          label={button.label}
          className={chartType === button.type ? "button-fix" : ""}
          Logo={button.logo}
          onClick={() =>
            setChartType(button.type as "weight" | "sleep" | "calory")
          }
        />
      ))}
    </ButtonContainerStyled>
  );
}

const ButtonContainerStyled = styled.div`
  display: flex;
  button {
    margin-right: 10px;
  }

  .button-fix {
    background: #a11414;
  }
`;
