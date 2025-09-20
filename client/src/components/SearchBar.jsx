import { TextField, Button, Box } from "@mui/material";

function SearchBar({ filterText, onFilterTextChange }) {
  const handleClear = () => {
    onFilterTextChange(""); // reset text
  };

  return (
    <Box display="flex" gap={2} alignItems="center" marginBottom={2}>
      <TextField
        label="Search Recipes"
        variant="outlined"
        size="small"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        color="success"
        onClick={handleClear}
      >
        Clear
      </Button>
    </Box>
  );
}

export default SearchBar;
