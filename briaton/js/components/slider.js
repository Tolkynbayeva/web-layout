import { el } from "./dom-utils.js"
import loadProducts from "./load-products.js"
import { createProductCard } from "./product-card.js"

function initSlider() {
  new Swiper('.swiper', {
    navigation: {
      nextEl: '.day-products__navigation-btn--next',
      prevEl: '.day-products__navigation-btn--prev'
    },
    spaceBetween: 40,
    slidesPerView: 4,
  })
}

export default async function slider() {
  const swiper = document.querySelector('.swiper')
  const list = document.querySelector('.day-products__list')
  const data = await loadProducts()


  data.forEach(item => {
    if (item.goodsOfDay) {
      const li = el('li', {className: 'day-products__item swiper-slide'})
      const card = createProductCard(item)
      card.classList.add('product-card--small')
      li.append(card)
      list.append(li)
    }
  })
  initSlider()
}