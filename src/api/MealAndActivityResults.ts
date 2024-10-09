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

export const fetchImage = async (searchTerm: string): Promise<string> => {
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1`
    );
    const data = await response.json();

    return data.products[0]?.image_url || "";
  } catch (error) {
    console.error("Erreur lors de la récupération de l'image", error);
    return "";
  }
};
