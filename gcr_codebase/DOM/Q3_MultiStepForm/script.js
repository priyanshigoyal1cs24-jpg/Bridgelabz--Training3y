const form = document.getElementById("multiForm");
const steps = [...document.querySelectorAll(".step")];
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");
const summary = document.getElementById("summary");
let currentStep = 0;

function showStep(index) {
  steps.forEach((step, position) => step.classList.toggle("active", position === index));
  backButton.disabled = index === 0;
  nextButton.textContent = index === steps.length - 1 ? "Submit" : "Next";
}

function validateCurrentStep() {
  const input = steps[currentStep].querySelector("input");
  return input.reportValidity();
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) return;

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    form.style.display = "none";
    summary.innerHTML = `<h2>Summary</h2><p>Name: ${document.getElementById("name").value}</p><p>Email: ${document.getElementById("email").value}</p><p>Password: ${"*".repeat(document.getElementById("password").value.length)}</p>`;
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

showStep(currentStep);
