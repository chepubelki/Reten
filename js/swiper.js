window.addEventListener('load', () => {
   const windowWidth = window.innerWidth;
   if (windowWidth < 768) {
      const swiper = new Swiper(".mySwiper", {
         spaceBetween: 4,
         scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
         },
      });
   }
});