// Selecting elements
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = document.querySelector(".mobile-nav-links");

// Adding event listener to mobile-nav (hamburger icon)
mobileNav.addEventListener("click", () => {
  mobileNavLinks.classList.toggle("show");
});

// Smooth scroll (if needed)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
