const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("reset");
const maximumCharacters = 100;

message.addEventListener("beforeinput", event => {
  if (message.value.length >= maximumCharacters && event.inputType.startsWith("insert")) {
    event.preventDefault();
  }
});

message.addEventListener("input", updateCounter);

function updateCounter() {
  const remaining = maximumCharacters - message.value.length;
  counter.textContent = `${remaining} characters remaining`;
  counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
  counter.classList.toggle("danger", remaining === 0);
}

resetButton.addEventListener("click", () => {
  message.value = "";
  updateCounter();
});

updateCounter();
