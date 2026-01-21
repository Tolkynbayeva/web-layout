import { sendForm, showErrorModal, showSuccessModal } from "./submit-form.js";

export default function validateForm() {
  const validator = new JustValidate(".questions__form");

  validator
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Введите имя",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимум 3 символа",
      },
      {
        rule: "maxLength",
        value: 20,
        errorMessage: "Максимум 20 символов",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Введите email",
      },
      {
        rule: "email",
        errorMessage: "Введите корректный email",
      },
    ])
    .addField("#agree", [
      {
        rule: "required",
        errorMessage: "Необходимо согласие",
      },
    ])
    .onSuccess(async (e) => {
      e.preventDefault();
      const form = e.target;
      if (form.dataset.sending === "true") return;
      form.dataset.sending = "true";
      const submitBtn = form.querySelector(".questions__btn");
      if (submitBtn) submitBtn.disabled = true;

      try {
        await sendForm(form);
        showSuccessModal();
        form.reset();
      } catch (e) {
        showErrorModal();
      } finally {
        delete form.dataset.sending;
        if (submitBtn) submitBtn.disabled = false;
      }
    });
}
