const navbarNav = document.getElementById('navbarNav');
const navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', () => {
  navbarNav.classList.toggle('show');
});