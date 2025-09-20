import Fraction from "fraction.js";

/**
 * Format a single ingredient amount to display as fractions
 * e.g., [{value: 3/4, unit: "cup"}, {value: 2, unit: "Tbsp"}]
 * → "¾ cup + 2 Tbsp"
 */
export function formatIngredientAmounts(amounts) {
  if (!amounts || amounts.length === 0) return "-";

  return amounts
    .map(({ value, unit }) => {
      if (value == null) return unit || "-";

      const frac = new Fraction(value);
      const whole = Math.floor(frac.valueOf());
      const remainder = frac.sub(whole);

      let fracStr = remainder.n !== 0 ? `${remainder.toFraction(true)}` : "";
      if (whole > 0) {
        fracStr = fracStr ? `${whole} ${fracStr}` : `${whole}`;
      }

      return unit ? `${fracStr} ${unit}`.trim() : fracStr;
    })
    .join(" + ");
}

/**
 * Format full ingredient row as a string
 * e.g., {name: "flour", amount: [...], note: "sifted"} 
 * → "¾ cup + 2 Tbsp flour, sifted"
 */
export function formatIngredientRow(ingredient) {
  const amountStr = formatIngredientAmounts(ingredient.amount);
  const noteStr = ingredient.note ? `, ${ingredient.note}` : "";
  return `${amountStr} ${ingredient.name}${noteStr}`;
}
