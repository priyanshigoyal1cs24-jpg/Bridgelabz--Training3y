const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

dropdownButton.addEventListener("click", event => {
  event.stopPropagation();
  options.classList.toggle("show");
});

options.addEventListener("click", event => {
  const option = event.target.closest("[data-value]");
  if (!option) return;
  dropdownButton.textContent = `${option.dataset.value} ▾`;
  options.classList.remove("show");
});

document.addEventListener("click", () => options.classList.remove("show"), true);
