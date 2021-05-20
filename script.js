const toggleBtn = document.querySelector(".toggleBtn");
const menu = document.querySelector(".nav-links");
const icons = document.querySelector(".nav-icons");

toggleBtn.addEventListener("click", function () {
  menu.classList.toggle("show");
  icons.classList.toggle("show");
});
