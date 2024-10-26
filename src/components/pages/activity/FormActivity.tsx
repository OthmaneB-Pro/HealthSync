import { sportsData } from "../../../data/ActivityData";

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
      </form>
    </div>
  );
}
