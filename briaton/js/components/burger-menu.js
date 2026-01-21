export default function burgerMenu() {
  const openBtn = document.querySelector(".header__catalog-btn");
  const closeBtn = document.querySelector(".main-menu__close");
  const wrapperMenu = document.querySelector(".main-menu");

  if (!openBtn || !closeBtn || !wrapperMenu) return;

  openBtn.addEventListener("click", () => {
    wrapperMenu.classList.add("main-menu--active");
  });

  closeBtn.addEventListener("click", () => {
    wrapperMenu.classList.remove("main-menu--active");
  });
}
