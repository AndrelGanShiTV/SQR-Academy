const menuBtn = document.querySelector(".menu-btn");
const headerNav = document.getElementById("header-nav");
const closeNavBtn = document.getElementById("header-close-nav");

// Abrir el carrito al presionar el botón principal
menuBtn.addEventListener("click", () => {
  headerNav.classList.add("active");
});

// Cerrar el carrito al presionar el botón de cierre
closeNavBtn.addEventListener("click", () => {
  headerNav.classList.remove("active");
});
