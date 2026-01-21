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
      try {
        await sendForm(form);
        showSuccessModal();
        form.reset();
      } catch (e) {
        showErrorModal();
      }
    });
}
