// utils.js
export function formatTime(time) {
  if (!time) return "-";

  // If time.value is already a readable string, just return it
  if (typeof time.value === "string" && !time.value.startsWith("PT")) {
    return time.value;
  }

  // Parse ISO 8601 duration like "PT2H45M"
  // Example: PT2H45M → 2h 45m
  const match = time.value.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return "-";

  const hours = match[1] ? `${match[1]}h` : "";
  const minutes = match[2] ? `${match[2]}m` : "";
  return [hours, minutes].filter(Boolean).join(" ");
}
