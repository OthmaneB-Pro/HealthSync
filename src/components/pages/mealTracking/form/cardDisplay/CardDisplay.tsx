import { useMealTracking } from "../../../../../stores/useMealTracking";
import Card from "../../../../reusable-ui/Card";

export default function CardDisplay() {
  const { mealName, search, quantity, image, calory } = useMealTracking();
  return (
    <Card
      src={image}
      alt={search}
      title={search}
      quantity={quantity}
      calory={calory}
      meal={mealName}
    />
  );
}
