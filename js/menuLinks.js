const menuAboutLink = document.querySelectorAll(".navbar-content-link");
const sideMenuCheckbox = document.getElementById("side-menu");

menuAboutLink.forEach(function (link) {
   link.addEventListener("click", function () {
      sideMenuCheckbox.checked = false;
   });
});
