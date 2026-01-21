export default function cityMenu() {
  const cityBtn = document.querySelector(".location__city");
  const cityName = document.querySelector(".location__city-name");
  const cityItems = document.querySelectorAll(".location__sublink");

  if (!cityBtn || !cityName || !cityItems.length) return;

  cityBtn.addEventListener("click", () => {
    cityBtn.classList.toggle("location__city--active");
  });

  cityItems.forEach((city) => {
    city.addEventListener("click", () => {
      cityName.textContent = city.textContent;
      cityBtn.classList.remove("location__city--active");
    });
  });
}
