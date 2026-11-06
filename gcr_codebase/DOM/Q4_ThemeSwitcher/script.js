const themeButtons = document.querySelectorAll("[data-theme-choice]");

themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedTheme = button.getAttribute("data-theme-choice");
    document.body.setAttribute("class", selectedTheme);
    document.body.setAttribute("data-theme", selectedTheme);
  });
});
