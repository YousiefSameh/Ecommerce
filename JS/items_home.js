fetch("../JS/items.json").then(res => res.json()).then(data => showData(data));

const showData = (data) => {
  const productsItemsSale = document.querySelector(".products-items-sale");
  const otherProductsSwiper = document.querySelector("#other-product-swiper");
  const otherProductsSwiper2 = document.querySelector("#other-product-swiper2");

  allProductJSON = data;
  data.forEach(product => {
    if (product.old_price) {
      const present_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
      productsItemsSale.innerHTML += `
        <div class="product swiper-slide">
          <div class="icons">
            <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
            <span><i class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-share"></i></span>
          </div>
          <span class="sale-present">%${present_disc}</span>
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
            <p class="old-price">$${product.old_price}</p>
          </div>
        </div>
      `;
    }
  });
  data.forEach(product => {
      otherProductsSwiper.innerHTML += `
        <div class="product swiper-slide">
          <div class="icons">
            <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
            <span><i class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-share"></i></span>
          </div>
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
          </div>
        </div>
      `;
    
  });
  data.forEach(product => {
      otherProductsSwiper2.innerHTML += `
        <div class="product swiper-slide">
          <div class="icons">
            <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
            <span><i class="fa-solid fa-heart"></i></span>
            <span><i class="fa-solid fa-share"></i></span>
          </div>
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
          </div>
        </div>
      `;
    
  });
}