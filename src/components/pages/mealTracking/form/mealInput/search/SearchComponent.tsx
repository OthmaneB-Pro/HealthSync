import { useState } from "react";
import { SearchComponentProps } from "../../typeForm";


export default function SearchComponent({ setResults }: SearchComponentProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchResults = async () => {
    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1`
      );
      const data = await response.json();
      setResults(data.products.slice(0, 3));
    } catch (error) {
      console.error("Erreur lors de la récupération des données", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Recherchez un ingrédient"
      />
      <button onClick={fetchResults}>Rechercher</button>
    </div>
  );
}
