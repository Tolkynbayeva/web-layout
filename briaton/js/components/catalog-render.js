import { el } from "./dom-utils.js"
import { createProductCard } from "./product-card.js"

export function renderCards(listEl, items) {
  listEl.innerHTML = ''
  items.forEach(item => {
    const li = el('li', { className: 'catalog__item' })
    li.append(createProductCard(item))
    listEl.append(li)
  })
}

export function renderPagination(paginationList, totalPages, currPage, onPageClick) {
  paginationList.innerHTML = ''

  if (totalPages <= 1) return

  for (let i = 1; i <= totalPages; i++) {
    const li = el('li', { className: 'catalog__pagination-item' })
    const btn = el('button', { className: 'catalog__pagination-link', text: i })
    if (i === currPage) btn.classList.add('catalog__pagination-link--active')
    btn.addEventListener('click', () => onPageClick(i))
    li.append(btn)
    paginationList.append(li)
  }
}