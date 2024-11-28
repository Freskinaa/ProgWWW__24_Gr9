const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav__links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
