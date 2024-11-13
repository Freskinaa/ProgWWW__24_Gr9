const currentUrl = window.location.pathname;
function setActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const linkText = link.textContent.trim().toLowerCase();
    const pageName = currentUrl === '/' ? 'home' : currentUrl.split('/').pop().split('.')[0].toLowerCase();

    if (linkText === pageName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
setActiveLink();
