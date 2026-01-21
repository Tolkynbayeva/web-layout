import { el, imgEl, svgIcon } from "./dom-utils.js"
import { createTooltip } from "./tooltip.js"

function createVisual(item) {
  const visual = el('div', { className: 'product-card__visual' })
  const img = imgEl({ className: 'product-card__img', src: item.image, alt: item.name, width: 290, height: 436, })
  visual.append(img, createActions(item))

  return visual
}

function createBasketBtn(item) {
  const a = el('a', { className: 'product-card__link btn btn--icon', attrs: { 'href': '#', 'data-id': item.id } })
  const text = el('span', { className: 'btn__text', text: 'В корзину' })
  const svg = svgIcon({ width: 24, height: 24, href: '../images/sprite.svg#icon-basket' })

  a.append(text, svg)
  return a
}

function createMoreBtn() {
  const a = el('a', { className: 'product-card__link btn btn--secondary', attrs: { 'href': '#' } })
  const text = el('span', { className: 'btn__text', text: 'Подробнее' })
  a.append(text)
  return a
}

function createActions(item) {
  const wrap = el('div', { className: 'product-card__more' })
  wrap.append(createBasketBtn(item), createMoreBtn())
  return wrap
}

function createInfo(item) {
  const wrap = el('div', { className: 'product-card__info' })
  const title = el('h2', { className: 'product-card__title', text: item.name })
  const priceWrapOld = el('span', { className: 'product-card__old' })
  const priceOld = el('span', { className: 'product-card__old-number', text: `${item.price.old} ₽` })
  priceWrapOld.append(priceOld)
  const priceWrapNew = el('span', { className: 'product-card__price' })
  const priceNew = el('span', { className: 'product-card__price-number', text: `${item.price.new} ₽` })
  priceWrapNew.append(priceNew)
  const tooltip = createTooltip(item)
  tooltip.classList.add('product-card__tooltip')
  wrap.append(title, priceWrapOld, priceWrapNew, tooltip)
  return wrap
}

export function createProductCard(item) {
  const card = el('div', { className: 'product-card' })
  card.append(createVisual(item), createInfo(item))
  return card
}