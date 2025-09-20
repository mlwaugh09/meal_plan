import FilterableRecipesTable from "./FilterableRecipesTable";

export default function Cookbook() {
  const RECIPES = [
    {
      id: 1,
      name: "Brownie Meringue Cake (p.128)",
      servings: 10,
      prepTime: { value: "PT2H45M", unit: "hours" },
      bakeTime: { value: "PT33M", unit: "minutes" },
      ingredients: [
        {
          id: 1,
          name: "70% dark chocolate",
          amount: [{value: 7, unit: "oz"}],
          note: "chopped",
        },
        {
          id: 2,
          name: "unsalted butter",
          amount: [{value: 3/4, unit: "cup"}, {value: 2, unit: "Tbsp"}],
          note: "softened",
        },
        {
          id: 3,
          name: "confectioners' sugar",
          amount: [{value: 2, unit: "cups"}],
          note: "sifted",
        },
        { id: 4, name: "large eggs", amount: [{value: 3, unit: null}], note: "beaten" },
        {
          id: 5,
          name: "plus 2 Tbsp all-purpose flour",
          amount: [{value: 3/4, unit: "cup"},{value: 2, unit: "Tbsp"}],
          note: "sifted",
        },
      ],
      instructions: [{}],
      source: "The Great British Baking Show: The Big Book of Amazing Cakes",
    },
    {
      id: 2,
      name: "Different Test Recipe - copy of Recipe id 1",
      servings: 10,
      prepTime: { value: "PT2H45M", unit: "hours" },
      bakeTime: { value: "PT33M", unit: "minutes" },
      ingredients: [
        {
          id: 1,
          name: "70% dark chocolate",
          amount: [{value: 7, unit: "oz"}],
          note: "chopped",
        },
        {
          id: 2,
          name: "unsalted butter",
          amount: [{value: 3/4, unit: "cup"}, {value: 2, unit: "Tbsp"}],
          note: "softened",
        },
        {
          id: 3,
          name: "confectioners' sugar",
          amount: [{value: 2, unit: "cups"}],
          note: "sifted",
        },
        { id: 4, name: "large eggs", amount: [{value: 3, unit: null}], note: "beaten" },
        {
          id: 5,
          name: "plus 2 Tbsp all-purpose flour",
          amount: [{value: 3/4, unit: "cup"},{value: 2, unit: "Tbsp"}],
          note: "sifted",
        },
      ],
      instructions: [{}],
      source: "The Great British Baking Show: The Big Book of Amazing Cakes",
    },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <FilterableRecipesTable recipes={RECIPES} />
    </div>
  );
}
