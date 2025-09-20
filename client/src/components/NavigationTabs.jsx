import { Tabs, Tab, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavigationTabs() {
  const navigate = useNavigate();
  const location = useLocation();
  const paths = ["/cookbook", "/mealplan", "/kitchen"];
  const currentTab = paths.indexOf(location.pathname);

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", mt: "70px" }}>
      <Tabs
        value={currentTab === -1 ? 0 : currentTab}
        onChange={(e, newValue) => navigate(paths[newValue])}
        centered
        textColor="success"
        indicatorColor="success"
      >
        <Tab label="Cookbook" />
        <Tab label="Meal Plan" />
        <Tab label="Kitchen Inventory" />
      </Tabs>
    </Box>
  );
}
