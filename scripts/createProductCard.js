const newArrivalsContent = document.querySelector(".new-arrivals-bottom");

const colorButton = (color) => {
  const button = document.createElement("button");
  button.classList.add("product-color");
  button.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

  return button;
};

const createProductCard = (product) => {
  const productCard = document.createElement("article");
  productCard.classList.add("product-card");

  productCard.innerHTML = `
    <img
      class="product-card_image"
      src="${product.image}"
      alt="${product.title}"
    />
    <h3 class="product-card_title">${product.title}</h3>
    <div class="product-card_price">
      <span class="product-card_discount-price">$${product.price}</span>
      <span class="product-card_original-price">$${product.price}</span>
    </div>
    <div class="product-card_colors">
    </div>
    <a href="#" class="product-card_buy">Comprar</a>
  `;
  //mount component
  const productColorsBox = productCard.querySelector(".product-card_colors");
  const colors = [
    [255, 0, 0], // rojo
    [0, 255, 0], // verde
    [0, 0, 255], // azul
  ];
  colors.forEach((color) => {
    productColorsBox.appendChild(colorButton(color));
  });
  newArrivalsContent.appendChild(productCard);
};

newArrivalsContent.innerHTML = "";

const getProducts = async () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

const mountProducts = async () => {
  const products = await getProducts();
  console.log(products);
  products.forEach((product) => createProductCard(product));
};

mountProducts();
