let hambutton = document.querySelector(".hamburger-btn");
let backdrop = document.querySelector(".backdrop");
let mobileNav = document.querySelector(".mobile-nav");

hambutton.addEventListener("click", () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

backdrop.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
});
