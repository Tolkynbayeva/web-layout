// 1. swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 75,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// 2. tabs
document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
      btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
      tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// 3. accordion
$(".accordion").accordion({
  heightStyle: "content"
});

// 4. burger
  let burger = document.querySelector('.header-burger');
  let menu = document.querySelector('.header-nav__list');

  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

// 5. search
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#header-form-button').addEventListener('click', function () {
    document.querySelector('#form-search').classList.toggle('is-active');
  });
});


