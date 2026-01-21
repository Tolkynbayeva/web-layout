export const PER_PAGE = 6;

export function isInStock(item) {
  return Object.values(item.availability || {}).some((val) => val > 0);
}

export function applyTypeFilter(items, selectedTypes) {
  if (!selectedTypes.length) return items;
  return items.filter((item) =>
    selectedTypes.some((type) => item.type?.includes(type)),
  );
}

export function applyFilter(items, statusMode) {
  if (statusMode === "instock") return items.filter(isInStock);
  return items;
}

export function applySort(items, sortMode) {
  const arr = [...items];

  if (sortMode === "price-min") arr.sort((a, b) => a.price.new - b.price.new);
  if (sortMode === "price-max") arr.sort((a, b) => b.price.new - a.price.new);
  if (sortMode === "rating-max") arr.sort((a, b) => b.rating - a.rating);
  return arr;
}

export function getPageItems(items, page, perPage = PER_PAGE) {
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
}

export function getTotalPages(items, perPage = PER_PAGE) {
  return Math.ceil(items.length / perPage);
}
