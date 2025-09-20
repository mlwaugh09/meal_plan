import { useState } from "react";
import RecipesTable from "./RecipesTable";
import SearchBar from "./SearchBar";
import RecipeDetailsModal from "./RecipeDetailsModal";

export default function FilterableRecipesTable({ recipes }) {
  const [filterText, setFilterText] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />

      <RecipesTable
        recipes={recipes}
        filterText={filterText}
        onViewDetails={handleViewDetails}
      />

      {selectedRecipe && (
        <RecipeDetailsModal
          recipe={selectedRecipe}
          open={!!selectedRecipe}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
