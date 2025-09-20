import { useState } from "react";

function RecipeRow({ recipe }) {
  const name = recipe.name;

  return (
    <tr>
      <td>{name}</td>
      <td>{formatAmount(recipe)}</td>
      <td>{recipe.note}</td>
      <td>{recipe.source}</td>
    </tr>
  );
}

function formatAmount(ingredient) {
  if (ingredient.amounts) {
    return ingredient.amounts.map((a) => `${a.value} ${a.unit}`).join(" + ");
  }
  return ingredient.amount;
}

function RecipesTable({ recipes, filterText }) {
  const rows = [];

  recipes.forEach((recipe) => {
    if (!recipe.name.toLowerCase().includes(filterText.toLowerCase())) {
      return;
    }
    rows.push(<RecipeRow recipe={recipe} key={recipe.id} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Note</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ filterText, onFilterTextChange }) {
  const inputRef = useRef(null);
  const handleClear = () => {
    onFilterTextChange(""); // reset text
    inputRef.current?.focus();
  };

  return (
    <form>
      <input
        ref={inputRef}
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <button type="button" onClick={handleClear} style={{ marginLeft: "8px" }}>
        Clear Search
      </button>
    </form>
  );
}

function FilterableRecipesTable({ recipes }) {
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      <RecipesTable recipes={recipes} filterText={filterText} />
    </div>
  );
}

export default FilterableRecipesTable;
