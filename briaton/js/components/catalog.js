import { renderCards, renderPagination } from "./catalog-render.js";
import {
  applyFilter,
  applySort,
  applyTypeFilter,
  getPageItems,
  getTotalPages,
  PER_PAGE,
} from "./catalog-state.js";
import loadProducts from "./load-products.js";

export default async function initCatalog() {
  const listEl = document.querySelector('.catalog__list');
  const paginationEl = document.querySelector(".catalog__pagination");
  const selectEl = document.querySelector(".catalog__sort-select");
  const statuses = document.querySelectorAll('input[name="status"]');
  const typeCheckboxes = document.querySelectorAll('input[name="type"]');

  const data = await loadProducts();
  let currPage = 1;

  function getStatusMode() {
    return document.querySelector('input[name="status"]:checked')?.value;
  }

  function getSelectedTypes() {
    return [...typeCheckboxes].filter((c) => c.checked).map((c) => c.value);
  }

  function update() {
    const statusMode = getStatusMode();
    const sortMode = selectEl.value;
    const selectedTypes = getSelectedTypes();

    let items = applyFilter([...data], statusMode);
    items = applyTypeFilter(items, selectedTypes);
    items = applySort(items, sortMode);

    const totalPages = getTotalPages(items, PER_PAGE);
    if (currPage > totalPages) currPage = 1;

    renderCards(listEl, getPageItems(items, currPage, PER_PAGE));
    renderPagination(paginationEl, totalPages, currPage, (page) => {
      currPage = page;
      update();
    });
  }

  typeCheckboxes.forEach((c) =>
    c.addEventListener("change", () => {
      currPage = 1;
      update();
    }),
  );

  selectEl.addEventListener("change", () => {
    currPage = 1;
    update();
  });

  statuses.forEach((r) =>
    r.addEventListener("change", () => {
      currPage = 1;
      update();
    }),
  );

  update();
}
