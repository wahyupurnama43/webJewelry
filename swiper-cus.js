var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".bestSeller", {
  slidesPerView: "2",
  spaceBetween: 250,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    464: {
      spaceBetween: 180,
    },
    498: {
      spaceBetween: 150,
    },
    510: {
      slidesPerView: "2",
      spaceBetween: 130,
    },
    552: {
      slidesPerView: "2",
      spaceBetween: 90,
    },
    596: {
      slidesPerView: "2",
      spaceBetween: 70,
    },
    638: {
      slidesPerView: "2",
      spaceBetween: 90,
    },
    666: {
      slidesPerView: "3",
      spaceBetween: 290,
    },
    674: {
      slidesPerView: "3",
      spaceBetween: 270,
    },
    752: {
      slidesPerView: "3",
      spaceBetween: 200,
    },
    804: {
      slidesPerView: "3",
      spaceBetween: 150,
    },
    860: {
      slidesPerView: "3",
      spaceBetween: 100,
    },
    930: {
      slidesPerView: "3",
      spaceBetween: 30,
    },
    992: {
      slidesPerView: "4",
      spaceBetween: 250,
    },
    1088: {
      slidesPerView: "4",
      spaceBetween: 200,
    },
    1150: {
      slidesPerView: "4",
      spaceBetween: 120,
    },
    1216: {
      slidesPerView: "4",
      spaceBetween: 60,
    },
    1290: {
      slidesPerView: "4",
      spaceBetween: 10,
    },

    1344: {
      slidesPerView: "5",
      spaceBetween: 250,
    },
    1426: {
      slidesPerView: "5",
      spaceBetween: 200,
    },
    1500: {
      slidesPerView: "5",
      spaceBetween: 120,
    },
    1554: {
      slidesPerView: "5",
      spaceBetween: 60,
    },
    1668: {
      slidesPerView: "5",
      spaceBetween: 10,
    },
    1692: {
      slidesPerView: "6",
      spaceBetween: 250,
    },
    1798: {
      slidesPerView: "6",
      spaceBetween: 200,
    },
    1880: {
      slidesPerView: "6",
      spaceBetween: 120,
    },
    2056: {
      slidesPerView: "6",
      spaceBetween: 10,
    },
    2372: {
      slidesPerView: "7",
      spaceBetween: 10,
    },
    2588: {
      slidesPerView: "8",
      spaceBetween: 10,
    },
    2694: {
      slidesPerView: "8",
      spaceBetween: 10,
    },
    2728: {
      slidesPerView: "8",
      spaceBetween: 10,
    },
    2750: {
      slidesPerView: "8",
      spaceBetween: 10,
    },
    2756: {
      slidesPerView: "8",
      spaceBetween: 10,
    },
    2856: {
      slidesPerView: "8",
      spaceBetween: 10,
    },
    2937: {
      slidesPerView: "9",
      spaceBetween: 10,
    },
  },
});