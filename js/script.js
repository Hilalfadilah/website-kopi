// toggle active
const navbar = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
// ketika di click
// document.querySelector("#hamburger-menu").onclick = () => {
//   navbar.classList.toggle("active");
// };

hamburger.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
