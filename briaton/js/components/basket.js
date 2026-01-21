import { el, imgEl, svgIcon } from "./dom-utils.js"
import loadProducts from "./load-products.js"

function createBasketItem(item) {
  const li = el('li', { className: 'basket__item' })
  const imgWrapper = el('div', { className: 'basket__img' })
  const img = imgEl({ src: item.image, alt: item.name, width: 60, height: 60, })
  imgWrapper.append(img)

  const title = el('span', { className: 'basket__name', text: item.name })
  const price = el('span', { className: 'basket__price', text: `${item.price.new} руб` })
  const deleteBtn = el('button', { className: 'basket__close', attrs: { type: 'button', 'aria-label': 'удалить товар' } })
  const svg = svgIcon({ className: 'main-menu__icon', width: 24, height: 24, href: '../images/sprite.svg#icon-close' })

  deleteBtn.append(svg)

  li.append(imgWrapper, title, price, deleteBtn)
  return li
}

export default async function initBasket() {
  const data = await loadProducts()

  const basketBtn = document.querySelector('.header__user-btn')
  const basketMenu = document.querySelector('.basket')
  const basketEmpty = document.querySelector('.basket__empty-block')
  const basketList = document.querySelector('.basket__list')
  const basketCount = document.querySelector('.header__user-count')

  let count = 0

  function setCount(n) {
    count = n
    basketCount.textContent = String(count)
    basketEmpty.style.display = count === 0 ? '' : 'none'
  }

  basketBtn.addEventListener('click', (e) => {
    e.preventDefault()
    basketMenu.classList.toggle('basket--active')
  })

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn--icon[data-id]');
    if (!btn) return;

    e.preventDefault();

    const id = Number(btn.dataset.id);
    const item = data.find(p => p.id === id);
    if (!item) return;

    basketList.append(createBasketItem(item));
    setCount(count + 1);
  });

  basketList.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('.basket__close')
    if (!closeBtn) return
    const row = closeBtn.closest('.basket__item')
    if (!row) return

    row.remove()
    setCount(Math.max(0, count - 1))
  })
  setCount(0)
}