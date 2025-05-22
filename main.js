var button = document.querySelector(".card__share-button");
var socialLinks = document.querySelector(".card__social-popup");

button.addEventListener("click", function () {
  socialLinks.classList.toggle("active");
});

// include if-else statement to remove in-active class
