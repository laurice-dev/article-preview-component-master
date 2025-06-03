var socialButton = document.querySelector(".card__social-button");
var socialLinks = document.querySelector(".card__social-popup--in-active");

socialButton.addEventListener("click", function () {
  socialLinks.classList.toggle("card__social-popup--active");
  socialButton.classList.toggle("card__social-button--dark");
});
