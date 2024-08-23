var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

var swiper = new Swiper(".sale-sec", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true,
  breakpoints: {
    1300: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

var swiper = new Swiper(".products-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true,
  breakpoints: {
    1300: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});