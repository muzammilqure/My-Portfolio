const toggleMenu = () => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};
const typed = new Typed("#element", {
  strings: ["Frontend Developer."],
  typeSpeed: 85,
});
