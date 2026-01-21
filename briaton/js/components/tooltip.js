import { el, svgIcon } from "./dom-utils.js";

function getRow(city, count) {
  const li = el('li', { className: 'tooltip__item' })
  const text = el('span', { className: 'tooltip__text', text: `${city}: ` })
  const countEl = el('span', { className: 'tooltip__count', text: String(count ?? 0) })
  text.append(countEl);
  li.append(text);

  return li;
}

function buildContent(availability) {
  const wrap = el('div', { className: 'tooltip__content' })
  const title = el('span', { className: 'tooltip__text', text: 'Наличие товара по городам:' })
  const list = el('ul', { className: 'tooltip__list' })

  list.append(
    getRow("Москва", availability?.moscow),
    getRow("Оренбург", availability?.orenburg),
    getRow("Санкт-Петербург", availability?.saintPetersburg),
  )

  wrap.append(title, list);
  return wrap;
}

export function createTooltip(item) {
  const wrapper = el('div', { className: 'tooltip' })
  const btn = el('button', { className: 'tooltip__btn', attrs: { type: 'button', 'aria-label': 'Показать подсказку' } })
  const icon = svgIcon({ className: 'tooltip__icon', width: 5, height: 10, href: '../images/sprite.svg#icon-i' })
  btn.append(icon);
  wrapper.append(btn);

  tippy(btn, {
    content: buildContent(item.availability),
    allowHTML: true,
    interactive: true,
    trigger: 'mouseenter focus',
    placement: 'bottom-end',
    appendTo: () => document.body,
  })

  return wrapper;
}


