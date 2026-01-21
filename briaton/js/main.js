import cityMenu from "./components/city-menu.js";
import burgerMenu from "./components/burger-menu.js";
import countType from "./components/count-type.js";
import accordion from "./components/accordion.js";
import slider from "./components/slider.js";
import validateForm from "./components/validate.js";
import initCatalog from "./components/catalog.js";
import initBasket from "./components/basket.js";

window.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  cityMenu()
  initCatalog()
  countType()
  initBasket()
  accordion()
  slider()
  validateForm()
});
