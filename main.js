var button = document.querySelector(".card__social-button");
var socialLinks = document.querySelector(".card__social-popup--in-active");

button.addEventListener("click", function () {
  socialLinks.classList.toggle("card__social-popup--active");
});
