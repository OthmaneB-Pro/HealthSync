import { useMealTracking } from "../../../../../stores/useMealTracking";
import Card from "../../../../reusable-ui/Card";

export default function CardDisplay() {
  const { mealName, search, quantity } = useMealTracking();
  return (
    <Card
      src="https://www.doitinparis.com/files/2022/bars-restos/burgers/10/junk/junk-burger.jpg"
      alt="imageMeal"
      title={search}
      quantity={quantity}
      calory= {"20"}
      meal={mealName}
    />
  );
}
