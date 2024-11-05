const productsCategories = document.querySelectorAll(".filter-btn");
let selectedCatergory = "womens fashion";

const cleanSelectedCategories = () => {
  productsCategories.forEach((element) => {
    element.classList.remove("active");
  });
};

productsCategories.forEach((element) => {
  element.addEventListener("click", () => {
    cleanSelectedCategories();
    element.classList.add("active");
    selectedCatergory = element.getAttribute("data-value");
  });
});
