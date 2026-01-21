import initBasket from "./basket.js";
import initCatalog from "./catalog.js";
import initCountType from "./count-type.js";
import loadProducts from "./load-products.js";
import slider from "./slider.js";

export const initProducts = async () => {
  const data = await loadProducts();
  initBasket(data)
  initCatalog(data)
  initCountType(data)
  slider(data)
};
