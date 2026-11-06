const area = document.getElementById("area");
const coordinates = document.getElementById("coordinates");

area.addEventListener("mousemove", event => {
  const rectangle = area.getBoundingClientRect();
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

area.addEventListener("dblclick", event => {
  const rectangle = area.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "dot";
  dot.style.left = `${event.clientX - rectangle.left}px`;
  dot.style.top = `${event.clientY - rectangle.top}px`;
  area.appendChild(dot);
});
