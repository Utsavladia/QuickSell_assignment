// Function to get initials from a name
export function getInitials(name) {
  const nameParts = name.trim().split(" ");
  if (nameParts.length > 1) {
    return nameParts[0][0] + nameParts[1][0];
  } else {
    return nameParts[0].slice(0, 2).toUpperCase();
  }
}

// Function to get a color based on user ID
export function getColorForUser(id) {
  const colors = ["#FF5733", "#006400", "#3357FF", "#FF33A5", "#FFBD33"];
  return colors[id % colors.length];
}

// Function to normalize status strings
export const normalizeStatus = (status) => {
  return status.toLowerCase().replace(/\s+/g, "_");
};
