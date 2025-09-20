function RecipeDetails({ recipe, onClose }) {
  return (
    <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc" }}>
      <h2>{recipe.name}</h2>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Prep Time:</strong> {recipe.prepTime.value}</p>
      <p><strong>Bake Time:</strong> {recipe.bakeTime.value}</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ing) => (
          <li key={ing.id}>
            {ing.amount.map((a, i) => `${a.value} ${a.unit || ""}`).join(" + ")} {ing.name} {ing.note && `(${ing.note})`}
          </li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <ol>
        {recipe.instructions && recipe.instructions.length > 0 ? (
          recipe.instructions.map((step, i) => (
            <li key={i}>{step.text}</li>
          ))
        ) : (
          <p>No instructions available</p>
        )}
      </ol>

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default RecipeDetails;
