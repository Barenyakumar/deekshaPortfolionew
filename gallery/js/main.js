/*=============== SWIPER JS GALLERY ===============*/
let swiperCards1 = new Swiper(".gallery-cards1", {
  loop: true,
  loopedSlides: 5,
  cssMode: true,
  effect: "fade",
})

let swiperThumbs1 = new Swiper(".gallery-thumbs1", {
  loop: true,
  loopedSlides: 5,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  // navigation: {
  //   nextEl: ".swiper-button-next1",
  //   prevEl: ".swiper-button-prev1",
  // },
})

swiperThumbs1.controller.control = swiperCards1



/*=============== SWIPER JS GALLERY ===============*/
let swiperCards2 = new Swiper(".gallery-cards2", {
  loop: true,
  loopedSlides: 5,
  cssMode: true,
  effect: "fade",
})

let swiperThumbs2 = new Swiper(".gallery-thumbs2", {
  loop: true,
  loopedSlides: 5,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  // navigation: {
  //   nextEl: ".swiper-button-next1",
  //   prevEl: ".swiper-button-prev",
  // },
})

swiperThumbs2.controller.control = swiperCards2