const productInput = document.getElementById("productInput");
const addProductButton = document.getElementById("addProduct");
const productList = document.getElementById("productList");
let editedItem = null;

function addProduct() {
  const productName = productInput.value.trim();
  if (!productName) return;

  const listItem = document.createElement("li");
  listItem.innerHTML = `<span class="product-name"></span><button class="edit">Edit</button><button class="delete">Delete</button>`;
  listItem.querySelector(".product-name").textContent = productName;
  productList.appendChild(listItem);
  productInput.value = "";
}

addProductButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", event => {
  if (event.key === "Enter") addProduct();
});

productList.addEventListener("click", event => {
  const listItem = event.target.closest("li");
  if (!listItem) return;

  if (event.target.classList.contains("delete")) {
    listItem.remove();
    if (editedItem === listItem) editedItem = null;
  }

  if (event.target.classList.contains("edit")) {
    if (editedItem && editedItem !== listItem) saveEdit(editedItem);
    if (listItem.querySelector(".inline-edit")) return;

    editedItem = listItem;
    const nameSpan = listItem.querySelector(".product-name");
    const editInput = document.createElement("input");
    editInput.className = "inline-edit";
    editInput.value = nameSpan.textContent;
    nameSpan.replaceWith(editInput);
    editInput.focus();
    editInput.addEventListener("keydown", e => {
      if (e.key === "Enter") saveEdit(listItem);
    });
  }
});

function saveEdit(listItem) {
  const editInput = listItem.querySelector(".inline-edit");
  if (!editInput) return;
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = editInput.value.trim() || "Unnamed Product";
  editInput.replaceWith(nameSpan);
  if (editedItem === listItem) editedItem = null;
}

document.addEventListener("click", event => {
  if (editedItem && !editedItem.contains(event.target)) saveEdit(editedItem);
});
