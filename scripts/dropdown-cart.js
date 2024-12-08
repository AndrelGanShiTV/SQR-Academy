import "./header.js";
const cartBtn = document.getElementById("cart-btn");
const dropdownCart = document.getElementById("dropdown-cart");
const closeCartBtn = document.getElementById("close-cart-btn");

// Abrir el carrito al presionar el botón principal
cartBtn.addEventListener("click", () => {
  dropdownCart.classList.add("active");
});

// Cerrar el carrito al presionar el botón de cierre
closeCartBtn.addEventListener("click", () => {
  dropdownCart.classList.remove("active");
});
