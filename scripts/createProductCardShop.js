const shopProducts = document.querySelector(".shop-products");

const colorButton = (color) => {
  const button = document.createElement("button");
  button.classList.add("product-color-shop");
  button.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

  return button;
};

const createProductCard = (product) => {
  const productCard = document.createElement("article");
  productCard.classList.add("product-card-shop");

  productCard.innerHTML = `
    <img
        class="product-card-shop_image"
        src="${product.image}"
      alt="${product.title}"
    />
    <h3 class="product-card-shop_title">${product.title}</h3>
    <div class="product-card-shop_price">
        <span class="product-card-shop_discount-price">$${product.price}</span>
    </div>
    <div class="product-card-shop_colors">
    </div>
  `;
  //mount component
  const productColorsBox = productCard.querySelector(
    ".product-card-shop_colors"
  );
  const colors = [
    [255, 0, 0], // rojo
    [0, 255, 0], // verde
    [0, 0, 255], // azul
  ];
  colors.forEach((color) => {
    productColorsBox.appendChild(colorButton(color));
  });
  shopProducts.appendChild(productCard);
};

shopProducts.innerHTML = "";

const getProducts = async () => {
  return fetch("https://fakestoreapi.com/products?limit=9").then((res) =>
    res.json()
  );
};

const mountProducts = async () => {
  const products = await getProducts();
  console.log(products);
  products.forEach((product) => createProductCard(product));
};

mountProducts();
