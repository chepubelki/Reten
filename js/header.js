let header = document.querySelector(".header");
let minOffset = 100;
window.onscroll = function () {
   let has_class = header.classList.contains("active");

   if (minOffset < document.documentElement.scrollTop) {
      if (!has_class) {
         header.classList.add("active");
      }
   } else if (has_class) {
      header.classList.remove("active")

   }
}