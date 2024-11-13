const currentUrl = window.location.pathname;
function setActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const linkPath = link.getAttribute('href');

    if (currentUrl === linkPath || currentUrl.startsWith(linkPath)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
setActiveLink();