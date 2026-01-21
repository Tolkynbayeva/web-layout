import { renderCards, renderPagination } from "./catalog-render.js";
import {
  applyFilter,
  applySort,
  applyTypeFilter,
  getPageItems,
  getTotalPages,
  PER_PAGE,
} from "./catalog-state.js";

export default async function initCatalog(data) {
  const listEl = document.querySelector(".catalog__list");
  const paginationEl = document.querySelector(".catalog__pagination");
  const selectEl = document.querySelector(".catalog__sort-select");
  const statuses = document.querySelectorAll('input[name="status"]');
  const typeCheckboxes = document.querySelectorAll('input[name="type"]');
  const catalogForm = document.querySelector(".catalog-form");

  let currPage = 1;

  function getStatusMode() {
    return document.querySelector('input[name="status"]:checked')?.value;
  }

  function getSelectedTypes() {
    return [...typeCheckboxes]
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
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

  typeCheckboxes.forEach((checkbox) =>
    checkbox.addEventListener("change", () => {
      currPage = 1;
      update();
    }),
  );

  selectEl.addEventListener("change", () => {
    currPage = 1;
    update();
  });

  statuses.forEach((input) =>
    input.addEventListener("change", () => {
      currPage = 1;
      update();
    }),
  );

  catalogForm.addEventListener("reset", () => {
    currPage = 1;
    requestAnimationFrame(update);
  });

  update();
}
