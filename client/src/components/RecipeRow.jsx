import { Button } from "@mui/material";
import { formatTime } from "../utils/formatTime";

export default function RecipeRow({ recipe, onViewDetails }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.servings}</td>
      <td>{formatTime(recipe.prepTime)}</td>
      <td>{formatTime(recipe.bakeTime)}</td>
      <td>{recipe.source || "-"}</td>
      <td>
        <Button
          variant="contained"
          color="success"
          size="small"
          onClick={() => onViewDetails(recipe)}
        >
          View Details
        </Button>
      </td>
    </tr>
  );
}
