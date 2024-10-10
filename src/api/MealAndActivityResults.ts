import { Product } from "../components/pages/mealTracking/form/typeForm";

export const fetchResults = async (
  setResults: React.Dispatch<React.SetStateAction<Product[]>>,
  searchTerm: string
) => {
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

export const fetchImage = async (
  searchTerm: string
): Promise<{ image: string; calory: string }> => {
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1`
    );
    const data = await response.json();

    const image = data.products[0]?.image_url || "";
    const caloriesPer100g = data.products[0]?.nutriments?.energy_value || 0;
    const calory = caloriesPer100g
      ? (caloriesPer100g / 1000).toFixed(2)
      : "N/A";

    return { image, calory };
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
    return { image: "", calory: "N/A" };
  }
};
