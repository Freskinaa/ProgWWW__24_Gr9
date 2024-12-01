document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.querySelector('.menu-container');
  const navLinks = document.querySelector('.nav__links');
  const btnGroup = document.querySelector('.btn__group');
  const navbarContent = document.querySelector('.navbar__content');

  menuContainer.addEventListener('click', () => {
    navLinks.classList.toggle("active");
    btnGroup.classList.toggle("active");
    navbarContent.classList.toggle("active");
    menuContainer.classList.toggle("active");
  });
});
