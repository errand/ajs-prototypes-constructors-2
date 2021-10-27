export default function sortByHealth(obj) {
  return obj.sort((a, b) => parseFloat(b.health) - parseFloat(a.health));
}
