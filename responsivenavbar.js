document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav__links');
  const accountLink = document.getElementById("accountLink");

  hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const isLoggedIn = true;

  if (isLoggedIn) {
    accountLink.style.display = "block";
  } else {
    accountLink.style.display = "none";
  }
});
