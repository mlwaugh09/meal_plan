import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
  Divider,
  Box,
  Stack,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TimerIcon from "@mui/icons-material/Timer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { formatIngredientRow } from "../utils/parseIngredients";
import { formatTime } from "../utils/formatTime";

function RecipeDetailsModal({ recipe, open, onClose }) {
  if (!recipe) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: { borderRadius: 3, border: "2px solid #6ab04c", p: 2 },
      }}
    >
      {/* Title */}
      <DialogTitle
        sx={{
          bgcolor: "#6ab04c",
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        {recipe.name || "Recipe Details"}
      </DialogTitle>

      <DialogContent dividers>
        {/* Recipe Info with Icons */}
        <Stack direction="row" spacing={3} sx={{ mb: 2 }} justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <RestaurantIcon sx={{ mr: 0.5, color: "#519839" }} />
            <Typography variant="body1">{recipe.servings || "-"}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <AccessTimeIcon sx={{ mr: 0.5, color: "#519839" }} />
            <Typography variant="body1">{formatTime(recipe.prepTime)}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <TimerIcon sx={{ mr: 0.5, color: "#519839" }} />
            <Typography variant="body1">{formatTime(recipe.bakeTime)}</Typography>
          </Box>
        </Stack>

        <Typography variant="body2" gutterBottom>
          <strong>Source:</strong> {recipe.source || "-"}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Ingredients */}
        <Typography variant="h6" gutterBottom sx={{ color: "#6ab04c" }}>
          Ingredients
        </Typography>
        <List dense sx={{ mb: 2 }}>
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((ing) => (
              <ListItem key={ing.id} sx={{ pl: 0 }}>
                {formatIngredientRow(ing)}
              </ListItem>
            ))
          ) : (
            <ListItem>No ingredients available</ListItem>
          )}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Instructions */}
        <Typography variant="h6" gutterBottom sx={{ color: "#6ab04c" }}>
          Instructions
        </Typography>
        {recipe.instructions && recipe.instructions.length > 0 ? (
          <List dense>
            {recipe.instructions.map((step, i) => (
              <ListItem key={i} sx={{ pl: 0 }}>
                {step.text || `Step ${i + 1}`}
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No instructions available</Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{ bgcolor: "#6ab04c", "&:hover": { bgcolor: "#519839" } }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RecipeDetailsModal;
