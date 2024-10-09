import { useMealTracking } from "../../../../../stores/useMealTracking";
import Card from "../../../../reusable-ui/Card";

export default function CardDisplay() {
  const { mealName, search, quantity, image } = useMealTracking();
  return (
    <Card
      src={image}
      alt={search}
      title={search}
      quantity={quantity}
      calory={"20"}
      meal={mealName}
    />
  );
}
