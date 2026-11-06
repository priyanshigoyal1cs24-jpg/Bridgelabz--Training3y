const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("success");

function validateForm() {
  let valid = true;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  nameError.textContent = nameInput.value.trim() ? "" : "Name is required.";
  emailError.textContent = emailInput.value.includes("@") ? "" : "Enter a valid email containing @.";
  passwordError.textContent = passwordInput.value.length >= 6 ? "" : "Password must be at least 6 characters.";

  if (nameError.textContent || emailError.textContent || passwordError.textContent) valid = false;
  return valid;
}

[nameInput, emailInput, passwordInput].forEach(input => {
  input.addEventListener("input", () => {
    validateForm();
    successMessage.textContent = "";
  });
});

signupForm.addEventListener("submit", event => {
  event.preventDefault();

  if (validateForm()) {
    successMessage.textContent = "Form Submitted Successfully";
    signupForm.reset();
  }
});
