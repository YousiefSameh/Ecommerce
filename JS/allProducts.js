// Open And Close Filter
const filter = document.querySelector(".filter");
const OpenAndCloseFilter = () => {
  filter.classList.toggle("active");
}


// Fetch And Show The Data
fetch("../JS/items.json").then(res => res.json()).then(data => showData(data));

const showData = (data) => {
  const Products = document.querySelector("#products-div");
  allProductJSON = data;
  data.forEach(product => {
    // Math.floor((product.old_price - product.price) / product.old_price * 100)
    const oldPriceParagraph = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
    const present_disc_div = product.old_price ? `<span class="sale-present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";
    Products.innerHTML += `
      <div class="product">
        <div class="icons">
          <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
          <span><i class="fa-solid fa-heart"></i></span>
          <span><i class="fa-solid fa-share"></i></span>
        </div>
        ${present_disc_div}
        <div class="img-product">
          <img src="${product.img}" alt="">
          <img class="img-hover" src="${product.img_hover}" alt="">
        </div>
        <h3 class="name-product"><a href="item.html">${product.name}</a></h3>
        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="price">
          <p><span>$${product.price}</span></p>
          ${oldPriceParagraph}
        </div>
      </div>
    `;
  });
}