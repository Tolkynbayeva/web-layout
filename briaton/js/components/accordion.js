export default function () {
  const btns = document.querySelectorAll('.accordion__btn')

  function openBtn(btn) {
    btn.classList.add('accordion__btn--active')
    const content = btn.nextElementSibling;
    if (content) content.style.display = ''
  }

  function closeBtn(btn) {
    btn.classList.remove('accordion__btn--active')
    const content = btn.nextElementSibling;
    if (content) content.style.display = 'none'
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isActive = btn.classList.contains('accordion__btn--active')

      if (isActive) {
        closeBtn(btn)
        return
      }

      btns.forEach(closeBtn)
      openBtn(btn)
    })
  })
}