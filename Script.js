//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika humbergur menu di click
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//click di luar sidebar untuk menghilangkan nav
const humburger = document.querySelector("#humburger-menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// test
// test

