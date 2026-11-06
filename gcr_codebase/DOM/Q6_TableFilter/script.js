const searchInput = document.getElementById("search");
const studentRows = [...document.querySelectorAll("#studentRows tr")];
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase().trim();
  let visibleRows = 0;

  studentRows.forEach(row => {
    const rowText = row.textContent.toLowerCase();
    const matches = rowText.includes(searchText);
    row.style.display = matches ? "" : "none";
    if (matches) visibleRows++;
  });

  noResults.style.display = visibleRows === 0 ? "block" : "none";
});
