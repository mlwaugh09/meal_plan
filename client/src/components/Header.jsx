import HighlightIcon from "@mui/icons-material/Highlight";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" color="success">
      <Toolbar>
        <HighlightIcon sx={{ marginRight: 1 }} />
        <Typography variant="h6" component="div">
          Meal Prep Assistant
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
