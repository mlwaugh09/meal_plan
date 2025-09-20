import RecipeRow from "./RecipeRow";

function RecipesTable({ recipes, filterText, onViewDetails }) {
  const rows = recipes
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(filterText.toLowerCase())
    )
    .map((recipe) => (
      <RecipeRow
        key={recipe.id}
        recipe={recipe}
        onViewDetails={onViewDetails}
      />
    ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Servings</th>
          <th>Prep Time</th>
          <th>Bake Time</th>
          <th>Source</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default RecipesTable;
