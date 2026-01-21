export function el(tag, { className, text, attrs = {} } = {}) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text) e.textContent = text;
  Object.entries(attrs).forEach(([key, value]) => {
    e.setAttribute(key, value);
  });

  return e;
}

export function imgEl({ src, className, alt, width, height } = {}) {
  const img = document.createElement("img");
  img.src = src;
  if (className) img.className = className;
  if (alt) img.alt = alt;
  if (width) img.width = width;
  if (height) img.height = height;

  return img;
}

export function svgIcon({ className, width, height, href, ariaHidden = true } = {}) {
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(SVG_NS, 'svg')
  if (className) svg.classList.add(className)
  if (width) svg.setAttribute('width', width);
  if (height) svg.setAttribute('height', height);
  if (ariaHidden) svg.setAttribute('aria-hidden', 'true');

  const use = document.createElementNS(SVG_NS, 'use');
  if (href) use.setAttribute('href', href);
  svg.append(use)

  return svg;
}