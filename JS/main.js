// Open & Close Cart
let cart = document.querySelector(".cart");
let openCartBtn = document.querySelector(".cart-btn");
let closeCartBtn = document.querySelector(".close-cart");

const openAndCloseCart = () => {
  cart.classList.toggle("active");
};

openCartBtn.addEventListener("click", openAndCloseCart);
closeCartBtn.addEventListener("click", openAndCloseCart);

// Open & Close Menu
let menu = document.querySelector(".links ul");
let openMenuBtn = document.querySelector(".btn-open-menu");
let closeMenuBtn = document.querySelector(".btn-close-menu");

const openAndCloseMenu = () => {
  menu.classList.toggle("active");
};

openMenuBtn.addEventListener("click", openAndCloseMenu);
closeMenuBtn.addEventListener("click", openAndCloseMenu);
// Change Item Image
const bigImg = document.querySelector("#bigImg");
const changeItemImg = (img) => {
  bigImg.src = img;
}
// Add Products To The Cart
const itemsInCart = document.querySelector(".item-in-cart");
let allProductJSON;
let productCart = [];

const addToCart = (id, btn) => {
  productCart.push(allProductJSON[id]);
  btn.classList.add("active");
  getItemsCart();
};

const countItem = document.querySelector(".count-item");
const countList = document.querySelector("#count-list");
const priceCartHead = document.querySelector(".price-cart-head");
const priceCartTotal = document.querySelector(".price-cart-total");


const getItemsCart = () => {
  let totalPrice = 0;
  let itemC = "";
  for (let i = 0; i < productCart.length; i++) {
    itemC += `
      <div class="item-cart">
        <img src="${productCart[i].img}" alt="">
        <div class="content">
          <h4>${productCart[i].name}</h4>
          <p class="price-cart">$${productCart[i].price}</p>
        </div>
        <button onclick="removeProductFromCart(${i})" class="delete-item"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;
    totalPrice += productCart[i].price;
  }
  itemsInCart.innerHTML = itemC;
  priceCartHead.innerHTML = `$${totalPrice}`;
  countItem.innerHTML = productCart.length;
  priceCartTotal.innerHTML = `$${totalPrice}`;
  countList.innerHTML = `(${productCart.length})`;
};

// Remove Product Item From The Cart
const removeProductFromCart = (index) => {
  productCart.splice(index, 1);
  getItemsCart();
  let addToCartBtn = document.querySelectorAll(".fa-cart-plus");
  for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].classList.remove("active");
    productCart.forEach(product => {
      if(product.id == i) addToCartBtn[i].classList.add("active");
    })
  }
};

// Back To Top Button
const backToTopBtn = document.querySelector(".back-to-top");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
});
