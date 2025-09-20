import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { formatIngredientRow } from "../utils/parseIngredients";
import { formatTime } from "../utils/formatTime";

function RecipeDetailsModal({ recipe, open, onClose }) {
  if (!recipe) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{recipe.name || "Recipe Details"}</DialogTitle>

      <DialogContent dividers>
        <Typography variant="body1" gutterBottom>
          <strong>Servings:</strong> {recipe.servings || "-"}
        </Typography>

        <Typography variant="body1" gutterBottom>
          <strong>Prep Time:</strong> {formatTime(recipe.prepTime)}
        </Typography>

        <Typography variant="body1" gutterBottom>
          <strong>Bake Time:</strong> {formatTime(recipe.bakeTime)}
        </Typography>

        <Typography variant="body1" gutterBottom>
          <strong>Source:</strong> {recipe.source || "-"}
        </Typography>

        <Typography variant="h6" gutterBottom>
          Ingredients
        </Typography>
        <List dense>
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((ing) => (
              <ListItem key={ing.id}>{formatIngredientRow(ing)}</ListItem>
            ))
          ) : (
            <ListItem>No ingredients available</ListItem>
          )}
        </List>

        <Typography variant="h6" gutterBottom>
          Instructions
        </Typography>
        {recipe.instructions && recipe.instructions.length > 0 ? (
          <List dense>
            {recipe.instructions.map((step, i) => (
              <ListItem key={i}>{step.text || `Step ${i + 1}`}</ListItem>
            ))}
          </List>
        ) : (
          <Typography>No instructions available</Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RecipeDetailsModal;
