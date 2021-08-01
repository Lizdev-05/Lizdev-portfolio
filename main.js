const click = document.getElementById("navigation-icon");
const menu = document.getElementById("nav-item-wrapper");
click.addEventListener("click", () => {
  menu.classList.toggle("nav-items");
});
