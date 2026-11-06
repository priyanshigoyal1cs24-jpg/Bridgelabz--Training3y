const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

gallery.addEventListener("click", event => {
  if (event.target.tagName !== "IMG") return;
  modalImage.src = event.target.src.replace("/300/200", "/900/600");
  modal.classList.add("show");
});

modal.addEventListener("click", () => modal.classList.remove("show"));
modalImage.addEventListener("click", event => event.stopPropagation());
