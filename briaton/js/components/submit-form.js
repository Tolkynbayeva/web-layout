function openModal({ icon, title, text }) {
  document.querySelector(".modal")?.remove();

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal__overlay" data-close="true"></div>
    <div class="modal__window" role="dialog" aria-modal="true">
      <button class="modal__btn" type="button" aria-label="Закрыть">
        <svg class="modal__btn-icon" width="24" height="24" aria-hidden="true">
          <use xlink:href="../images/sprite.svg#icon-close"></use>
        </svg>
      </button>
      <svg class="modal__icon" width="44" height="44" aria-hidden="true">
        <use xlink:href="../images/sprite.svg#${icon}"></use>
      </svg>
      <h2 class="modal__title">${title}</h2>
      <p class="modal__text">${text}</p>
    </div>
  `;

  document.body.append(modal);
  const close = () => modal.remove();

  modal.querySelector(".modal__btn").addEventListener("click", close);
  modal.querySelector(".modal__overlay").addEventListener("click", close);

  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape") close();
    },
    { once: true },
  );
}

export async function sendForm(form) {
  const formData = new FormData(form);

  const res = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Request failed");
  return res.json();
}

export function showSuccessModal() {
  openModal({
    icon: "icon-modal-check",
    title: "Благодарим за обращение!",
    text: "Мы получили вашу заявку и свяжемся с вами в ближайшее время",
  });
}

export function showErrorModal() {
  openModal({
    icon: "icon-modal-warning",
    title: "Не удалось отправить обращение",
    text: "Что-то пошло не так, попробуйте отправить форму еще раз. Если ошибка повторится — свяжитесь со службой поддержки.",
  });
}
