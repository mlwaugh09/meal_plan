import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavigationTabs from "./components/NavigationTabs";
import Cookbook from "./components/Cookbook";
import MealPlan from "./components/MealPlan";
import KitchenInventory from "./components/KitchenInventory";

function App() {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  return (
    <Router>
      <Header />
      <NavigationTabs />
      <Routes>
        <Route path="/cookbook" element={<Cookbook />} />
        <Route path="/mealplan" element={<MealPlan />} />
        <Route path="/kitchen" element={<KitchenInventory />} />
        <Route path="*" element={<Cookbook />} /> {/* default */}
      </Routes>
    </Router>
  );
}

export default App;
