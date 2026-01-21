import cityMenu from "./components/city-menu.js";
import burgerMenu from "./components/burger-menu.js";
import accordion from "./components/accordion.js";
import validateForm from "./components/validate.js";
import { initProducts } from "./components/init-products.js";

window.addEventListener("DOMContentLoaded", () => {
  burgerMenu();
  cityMenu();
  accordion();
  validateForm();
  initProducts();
});
