new Swiper('.swiper', {
   slidesPerView: 3,
   spaceBetween: 30,
   grabCursor: true,
   loop: true,
   autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
}); 






