import { sportsData } from "../../../data/ActivityData";
import Button from "../../reusable-ui/Button";
import { FaCircleCheck } from "react-icons/fa6";

export default function FormActivity() {
  return (
    <div>
      <form>
        <label htmlFor="sport">Sport : </label>
        <select id="sport">
          {sportsData.map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
        </select>
        <label>Durée : </label>
        <input placeholder="Durée" type="number" />
        <Button Logo={<FaCircleCheck />} label="Confirmer"/>
      </form>
    </div>
  );
}
