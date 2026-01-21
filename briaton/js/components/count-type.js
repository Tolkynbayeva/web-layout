import loadProducts from "./load-products.js";

export default async function countType() {
  const checkboxs = document.querySelectorAll('input[name="type"]');
  const data = await loadProducts();

  checkboxs.forEach((checkbox) => {
    let count = 0

    data.forEach((item) => {
      if (item.type.includes(checkbox.value)) {
        count++
      }
    });

    const countEl = checkbox.closest('.custom-checkbox').querySelector('.custom-checkbox__count')
    countEl.textContent = count
  });
}
